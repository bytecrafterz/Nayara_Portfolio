"""Build the portrait images from source/ into img/.

Run from the project folder:  python tools/build_portraits.py
(build_images.py also runs it.) Run build_lqip.py afterwards for the blurred previews.

source/portrait-studio.png   ->  img/portrait-studio.webp, -sm.webp   (first screen)
                                 img/avatar.webp                      (round photo on the book's Ex libris page)
source/portrait-atelier.png  ->  img/portrait-atelier.webp, -sm.webp  (contact section)
"""
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
SRC, OUT = ROOT / "source", ROOT / "img"
SMALL_W = 640

# Square around the face in portrait-studio.png, for the round bookplate photo.
AVATAR_BOX = (240, 70, 980, 810)


def build():
    for name in ("portrait-studio", "portrait-atelier"):
        im = Image.open(SRC / f"{name}.png").convert("RGB")
        im.save(OUT / f"{name}.webp", "WEBP", quality=84, method=6)
        h = round(im.height * SMALL_W / im.width)
        im.resize((SMALL_W, h), Image.LANCZOS).save(OUT / f"{name}-sm.webp", "WEBP", quality=80, method=6)
        if name == "portrait-studio":
            im.crop(AVATAR_BOX).resize((336, 336), Image.LANCZOS).save(OUT / "avatar.webp", "WEBP", quality=86, method=6)
    print("portraits: img/portrait-studio*.webp, img/portrait-atelier*.webp, img/avatar.webp")


if __name__ == "__main__":
    build()
