"""Build the web images for the "Client work" section (real Workana projects).

Run from the project folder:  python tools/build_real.py   (then python tools/build_lqip.py)
Needs Pillow and PyMuPDF. The sources are the delivered files on this machine (Downloads and
apps/); they are NOT copied into the repo, only the web-size images below are.

For each project <id>:
  img/real-<id>-1.webp      a 1600 x 1067 cover: the real pieces laid out on the site's dark backdrop
  img/real-<id>-<n>.webp    the delivered pieces themselves (n >= 2), at most 1600 px wide
  img/real-<id>-<n>-sm.webp the same at 800 px, for cards and while the large one loads
and real.js, with every image's size, so the page can reserve the space before it loads.

José's 250 event photos and Angel's e-commerce images are private and are never built here.
"""
import io
import json
import zipfile
from pathlib import Path

import fitz  # PyMuPDF
from PIL import Image, ImageDraw, ImageFilter, ImageOps

ROOT = Path(__file__).resolve().parent.parent
IMG = ROOT / "img"
DL = Path("C:/Users/Administrator/Downloads")
APPS = ROOT.parent
W, H = 1600, 1067
sizes = {}


# ---------- helpers ----------
def pdf_page(path, n, dpi=150):
    doc = fitz.open(path)
    pix = doc[n].get_pixmap(dpi=dpi)
    return Image.frombytes("RGB", (pix.width, pix.height), pix.samples)


def from_zip(zpath, name):
    with zipfile.ZipFile(zpath) as z:
        return Image.open(io.BytesIO(z.read(name))).convert("RGB")


def fit(im, w, h):
    im = im.copy()
    im.thumbnail((w, h), Image.LANCZOS)
    return im


def cover_crop(im, w, h):
    return ImageOps.fit(im, (w, h), Image.LANCZOS, centering=(.5, .5))


def board(light=False):
    """The backdrop: a warm dark (or parchment) gradient with a soft gold glow, like the site."""
    top, bottom = ((240, 233, 221), (222, 212, 196)) if light else ((30, 25, 19), (12, 10, 8))
    g = Image.new("RGB", (1, H))
    for y in range(H):
        t = y / (H - 1)
        g.putpixel((0, y), tuple(round(top[i] + (bottom[i] - top[i]) * t) for i in range(3)))
    bg = g.resize((W, H))
    glow = Image.new("L", (W, H), 0)
    ImageDraw.Draw(glow).ellipse((W * .18, -H * .35, W * .82, H * .55), fill=70 if light else 46)
    glow = glow.filter(ImageFilter.GaussianBlur(160))
    gold = Image.new("RGB", (W, H), (255, 250, 238) if light else (214, 176, 110))
    return Image.composite(gold, bg, glow)


def place(canvas, im, x, y, rot=0, shadow=.55, blur=26, offset=18):
    """Paste a piece with a soft drop shadow; x, y = top-left of the unrotated piece."""
    im = im.convert("RGBA")
    if rot:
        im = im.rotate(rot, Image.BICUBIC, expand=True)
    alpha = im.getchannel("A")
    sh = Image.new("RGBA", im.size, (0, 0, 0, 0))
    sh.putalpha(alpha.point(lambda a: int(a * shadow)))
    pad = blur * 3
    big = Image.new("RGBA", (im.width + pad * 2, im.height + pad * 2), (0, 0, 0, 0))
    big.paste(sh, (pad, pad))
    big = big.filter(ImageFilter.GaussianBlur(blur))
    canvas.paste(big, (int(x - pad), int(y - pad + offset)), big)
    canvas.paste(im, (int(x), int(y)), im)


def save(im, key, wmax=1600):
    im = im.convert("RGB")
    if im.width > wmax:
        im = im.resize((wmax, round(im.height * wmax / im.width)), Image.LANCZOS)
    im.save(IMG / f"{key}.webp", "WEBP", quality=82, method=6)
    sm = im.resize((800, round(im.height * 800 / im.width)), Image.LANCZOS)
    sm.save(IMG / f"{key}-sm.webp", "WEBP", quality=80, method=6)
    sizes[key] = [im.width, im.height]
    print(f"{key:22} {im.width}x{im.height}")


def row(canvas, pieces, y_center, gap=40, height=None, rots=None):
    """Lay pieces side by side, centred, all at the same height."""
    pieces = [p.resize((round(p.width * height / p.height), height), Image.LANCZOS) for p in pieces]
    total = sum(p.width for p in pieces) + gap * (len(pieces) - 1)
    x = (W - total) / 2
    for i, p in enumerate(pieces):
        place(canvas, p, x, y_center - p.height / 2, rot=(rots or [0] * len(pieces))[i])
        x += p.width + gap


# ---------- the projects ----------
def beyond():
    d = DL / "Beyond7-Proyecto0"
    save(cover_crop(Image.open(d / "3D/Beyond7_cartel.jpg"), W, H), "real-beyond-1")
    save(Image.open(d / "3D/Proyecto0_cartel.jpg"), "real-beyond-2")
    save(Image.open(d / "3D/Tarjetas_dorado.jpg"), "real-beyond-3")
    save(pdf_page(d / "Entrega-4_Logos-y-branding/Bases-de-marca_Beyond7-Proyecto0.pdf", 2, 170), "real-beyond-4")
    save(Image.open(d / "1_Paleta-clara.jpg"), "real-beyond-5")
    save(Image.open(d / "6_Carruseles-e-historias_con-fotos.jpg"), "real-beyond-6")


def allyo():
    d = DL / "Allyo-Packaging/Allyo_Packaging"
    cal = d / "3_Desk-Calendar/Calendar-pages_2027/Allyo_Calendar-2027_pages_A5.pdf"
    c1, c2 = pdf_page(cal, 0, 170), pdf_page(cal, 1, 170)
    wine = pdf_page(d / "1_Wine-Box/Allyo_Wine-Box_8cm-bottle_dieline.pdf", 0, 110)
    calbox = pdf_page(d / "3_Desk-Calendar/Allyo_Desk-Calendar_box_dieline.pdf", 0, 110)
    # Cover: the dielines as technical sheets (wine box with crash-lock bottom, calendar box)
    # and a month page of the calendar, instead of the template cover with its empty photo slot.
    b = board()
    wb = fit(wine, 600, 900)
    place(b, wb, 110, (H - wb.height) / 2)
    place(b, fit(calbox, 860, 600), 650, 100, rot=1.5)
    place(b, fit(c2, 620, 450), 860, 540, rot=-3)
    save(b, "real-allyo-1")
    save(c1, "real-allyo-2")
    save(pdf_page(cal, 5, 170), "real-allyo-3")
    save(wine, "real-allyo-4")
    save(Image.open(d / "2_Gift-Boxes/Option-1_Rigid-box/Allyo_Gift-Box_rigid_assembly-guide.png"), "real-allyo-5")
    save(calbox, "real-allyo-6")


def luh():
    d = DL / "Planilhas-Treino/entrega-final"
    abc, abcde = Image.open(d / "Previa_ABC.jpg"), Image.open(d / "Previa_ABCDE.jpg")
    logo = Image.open(d / "logo-personal-trainer/Luh-Reis_logo-horizontal_bege.png").convert("RGBA")
    b = board()
    lg = fit(logo, 520, 170)
    b.paste(lg, ((W - lg.width) // 2, 150), lg)
    place(b, fit(abc, 1440, 560), (W - fit(abc, 1440, 560).width) / 2, 420)
    save(b, "real-luh-1")
    save(abcde, "real-luh-2")
    # Her logo in its colours, as delivered (tiles in the brand palette).
    tiles = [("marrom", (240, 232, 220)), ("bege", (62, 44, 34)), ("musgo", (240, 232, 220)), ("branco", (164, 92, 64))]
    sheet = Image.new("RGB", (1600, 1000), (24, 20, 16))
    for i, (v, bgc) in enumerate(tiles):
        x, y = (i % 2) * 800, (i // 2) * 500
        tile = Image.new("RGB", (800, 500), bgc)
        lg = fit(Image.open(d / f"logo-personal-trainer/Luh-Reis_logo-horizontal_{v}.png").convert("RGBA"), 560, 220)
        tile.paste(lg, ((800 - lg.width) // 2, (500 - lg.height) // 2), lg)
        sheet.paste(tile, (x, y))
    save(sheet, "real-luh-3")


def fernanda():
    z = DL / "FernandaRibeiro_Cliente (6)_otimizado.zip"
    arts = [pdf_page(next(DL.glob(f"FernandaRibeiro_Arte0{k}_*_A4.pdf")), 0, 120) for k in range(1, 5)]
    b = board()
    row(b, arts, H / 2, gap=30, height=500)
    save(b, "real-fernanda-1")
    feed, story = from_zip(z, "Digital/FernandaRibeiro_Arte02_Foco_Feed.jpg"), from_zip(z, "Digital/FernandaRibeiro_Arte02_Foco_Stories.jpg")
    b = board()
    row(b, [feed, story], H / 2, gap=60, height=880)
    save(b, "real-fernanda-2")
    with zipfile.ZipFile(z) as zz:
        guide = fitz.open(stream=zz.read("Guia_marca.pdf"), filetype="pdf")
    pix = guide[0].get_pixmap(dpi=150)
    save(Image.frombytes("RGB", (pix.width, pix.height), pix.samples), "real-fernanda-3")


def will():
    th = Image.open(APPS / "miniaturas/entrega/01-v2/Miniatura_El-Colapso-de-las-10-Marcas-de-Lujo_v2_1920x1080.png")
    b = board()
    t = fit(th, 1360, 765)
    place(b, t, (W - t.width) / 2, (H - t.height) / 2 - 10)
    save(b, "real-will-1")
    save(th, "real-will-2")


def book():
    pdf = APPS / "livro-autismo-para-o-povo/Autismo-para-o-povo_ENTREGA-FINAL/02_DIGITAL/Autismo-para-o-povo_versao-digital.pdf"
    cov, toc, txt = pdf_page(pdf, 0, 130), pdf_page(pdf, 10, 130), pdf_page(pdf, 20, 130)
    b = board()
    hgt = 820
    place(b, fit(toc, 10000, hgt - 60), 250, 150, rot=6)
    place(b, fit(txt, 10000, hgt - 60), 900, 150, rot=-6)
    place(b, fit(cov, 10000, hgt), (W - fit(cov, 10000, hgt).width) / 2, 110)
    save(b, "real-book-1")
    save(cov, "real-book-2", wmax=1100)
    spread = Image.new("RGB", (toc.width * 2 + 40, toc.height), (24, 20, 16))
    spread.paste(toc, (0, 0)); spread.paste(txt, (toc.width + 40, 0))
    save(spread, "real-book-3")


def cipreste():
    pdf = DL / "Portfolio-Cipreste/Entrega/Cipreste_Portfolio.pdf"
    p1, p3, p6 = pdf_page(pdf, 0, 110), pdf_page(pdf, 2, 110), pdf_page(pdf, 5, 110)
    b = board()
    hgt = 860
    place(b, fit(p3, 10000, hgt - 70), 230, 150, rot=5)
    place(b, fit(p6, 10000, hgt - 70), 930, 150, rot=-5)
    place(b, fit(p1, 10000, hgt), (W - fit(p1, 10000, hgt).width) / 2, 100)
    save(b, "real-cipreste-1")
    save(p1, "real-cipreste-2", wmax=1100)
    save(p6, "real-cipreste-3", wmax=1100)
    save(Image.open(DL / "Portfolio-Cipreste/Entrega/Cipreste_Portfolio_previa-todas-as-paginas.jpg"), "real-cipreste-4")


def vilela():
    d = DL / "Rancho-Vilela-Loureiro/Entrega"
    seal, iron = Image.open(d / "Selo-Rancho/Vilela-Loureiro_selo-rancho_previa.jpg"), Image.open(d / "Marca-do-ferro/Vilela-Loureiro_marca-do-ferro_previa.jpg")
    b = board(light=True)
    s = fit(seal, 1460, 900)
    place(b, s, (W - s.width) / 2, (H - s.height) / 2 - 10, shadow=.28)
    save(b, "real-vilela-1")
    save(iron, "real-vilela-2")
    save(seal, "real-vilela-3")


if __name__ == "__main__":
    for build in (beyond, allyo, luh, fernanda, will, book, cipreste, vilela):
        build()
    js = ("/* Generated by tools/build_real.py: pixel sizes of the client-work images. Do not edit by hand. */\n"
          "window.REAL_SIZES = " + json.dumps(sizes, separators=(",", ":")) + ";\n")
    (ROOT / "real.js").write_text(js, encoding="utf-8", newline="\n")
    print(f"real.js: {len(sizes)} images")
