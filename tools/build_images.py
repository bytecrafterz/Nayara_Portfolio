"""Build web images from source/ into img/ and print each project's palette.

Run from the project folder:  python tools/build_images.py
Needs Pillow (pip install pillow).

source/<slug>-<n>.webp  ->  img/<slug>-<n>.webp      (original, copied as is)
                            img/<slug>-<n>-sm.webp   (760 px wide, for cards)
                            lqip.js                  (blurred previews, via build_lqip.py)
"""
import json
import shutil
from collections import defaultdict
from pathlib import Path

from PIL import Image

import build_lqip

ROOT = Path(__file__).resolve().parent.parent
SRC, OUT = ROOT / "source", ROOT / "img"
OUT.mkdir(exist_ok=True)
SMALL_W = 760


def palette(images, n=5):
    """Dominant colours across a project's images, dark to light."""
    strip = Image.new("RGB", (150 * len(images), 100))
    for i, im in enumerate(images):
        strip.paste(im.resize((150, 100)), (150 * i, 0))
    q = strip.quantize(colors=n * 3, method=Image.Quantize.MEDIANCUT)
    pal = q.getpalette()
    picked = []
    for _, idx in sorted(q.getcolors(), reverse=True):
        rgb = tuple(pal[idx * 3: idx * 3 + 3])
        if all(sum((a - b) ** 2 for a, b in zip(rgb, p)) > 1100 for p in picked):
            picked.append(rgb)
        if len(picked) == n:
            break
    picked.sort(key=lambda c: 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2])
    return ["#%02x%02x%02x" % c for c in picked]


groups = defaultdict(list)
for src in sorted(SRC.glob("*.webp")):
    shutil.copy(src, OUT / src.name)
    im = Image.open(src).convert("RGB")
    h = round(im.height * SMALL_W / im.width)
    im.resize((SMALL_W, h), Image.LANCZOS).save(OUT / f"{src.stem}-sm.webp", "WEBP", quality=76, method=6)
    groups[src.stem.rsplit("-", 1)[0]].append(im)

av = Image.open(SRC / "avatar.png").convert("RGB")
av.crop((12, 12, 180, 180)).save(OUT / "avatar.webp", "WEBP", quality=88)

# Link preview (Open Graph), 1200 x 630.
og = Image.open(SRC / "aurel-1.webp").convert("RGB")
h = round(og.width * 630 / 1200)
top = (og.height - h) // 2
og.crop((0, top, og.width, top + h)).resize((1200, 630), Image.LANCZOS).save(OUT / "og.jpg", quality=84)

print(json.dumps({slug: palette(ims) for slug, ims in groups.items()}))

build_lqip.build()
