#!/usr/bin/env bash
# Publish the portfolio to an Ubuntu server over SSH (runs from Git Bash too).
#
#   deploy/deploy.sh setup  user@host  domain   # once: nginx, site config, HTTPS
#   deploy/deploy.sh push   user@host  domain   # every update: upload the files
#
# The SSH user must be root or have sudo. Each push goes into its own release
# folder and then becomes "current" in one step, so visitors never see a
# half-uploaded site. The last 3 releases are kept for rollback.
set -euo pipefail

MODE=${1:?setup or push}
HOST=${2:?user@host}
DOMAIN=${3:?domain}
cd "$(dirname "$0")/.."

SUDO='sudo'
[[ ${HOST%%@*} == root ]] && SUDO=''

if [[ $MODE == setup ]]; then
    sed "s/__DOMAIN__/$DOMAIN/" deploy/nginx.conf | ssh "$HOST" "
        set -e
        $SUDO apt-get update -qq </dev/null
        $SUDO DEBIAN_FRONTEND=noninteractive apt-get install -y -qq nginx certbot python3-certbot-nginx </dev/null >/dev/null
        $SUDO mkdir -p /var/www/nayara-portfolio/releases
        $SUDO tee /etc/nginx/sites-available/nayara-portfolio >/dev/null
        $SUDO ln -sfn /etc/nginx/sites-available/nayara-portfolio /etc/nginx/sites-enabled/nayara-portfolio
        $SUDO nginx -t
        $SUDO systemctl reload nginx
        if command -v ufw >/dev/null && $SUDO ufw status | grep -q 'Status: active'; then
            $SUDO ufw allow 'Nginx Full' >/dev/null
        fi
    "
    "$0" push "$HOST" "$DOMAIN"
    ssh "$HOST" "$SUDO certbot --nginx -d '$DOMAIN' --non-interactive --agree-tos --register-unsafely-without-email --redirect"
    echo "Live: https://$DOMAIN"
    exit 0
fi

[[ $MODE == push ]] || { echo "unknown mode: $MODE" >&2; exit 1; }

RELEASE=$(date +%Y%m%d-%H%M%S)
STAGE=$(mktemp -d)
trap 'rm -rf "$STAGE"' EXIT
cp -r index.html content.js img "$STAGE"/
# Link previews need an absolute image URL.
sed -i "s#content=\"img/og.jpg\"#content=\"https://$DOMAIN/img/og.jpg\"#" "$STAGE/index.html"

tar czf - -C "$STAGE" . | ssh "$HOST" "
    set -e
    R=/var/www/nayara-portfolio/releases/$RELEASE
    $SUDO mkdir -p \$R
    $SUDO tar xzf - -C \$R
    $SUDO chown -R www-data:www-data \$R
    $SUDO ln -sfn \$R /var/www/nayara-portfolio/current.tmp
    $SUDO mv -T /var/www/nayara-portfolio/current.tmp /var/www/nayara-portfolio/current
    cd /var/www/nayara-portfolio/releases && ls -1t | tail -n +4 | xargs -r $SUDO rm -rf
"
echo "Pushed release $RELEASE to $HOST"
