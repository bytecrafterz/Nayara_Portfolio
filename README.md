# Nayara J. N. · Selected Works (v2)

The second version of the portfolio: the 20 concept projects from the ChatGPT "Selected Works" site, rebuilt as a dark, gold‑accented one‑page site in English, Portuguese and Spanish. It has no build step: open `index.html` in a browser.

## What's on the page

- **Hero:** the headline "A point of view.", the **My Career** button, and five floating project images. On a laptop the images move in depth with the mouse.
- **Work:** 20 projects in a staggered grid with filters. Cards tilt toward the cursor and catch the light. Clicking one opens a full‑screen viewer with the description, suggested stack, palette and all 3 images.
- **Disciplines:** nine rows that filter the grid. On a laptop an image preview follows the cursor; on a phone each row shows a thumbnail.
- **Career:** the same book as a small 3D object, plus key numbers.
- **My Career book:** clicking any My Career button, or the small book, flies a leather‑bound book to the centre. It floats, opens its cover, and turns its pages:
  - Laptop: two‑page spreads.
  - Phone: one page at a time.
  - Turn pages with a click, the arrows, ← →, or a swipe.
- **Mouse and click effects:** a gold cursor ring that says View / Open / Filter / Close over things you can click, a gold‑dust trail behind the mouse, a gold burst on every click or tap, and magnetic buttons.
- People who turn on "reduce motion" in their system settings get the same page without the animations.

## Files

| Path | What it holds |
| --- | --- |
| `index.html` | Layout, styles, the script, and the English page text |
| `content.js` | Projects, disciplines, career book text and the Portuguese/Spanish page text |
| `img/` | `slug-1..3.webp` (1536 px), `slug-1..3-sm.webp` (760 px), `avatar.webp`, `og.jpg` |
| `source/` | Original images and `chatgpt-projects.json` from the ChatGPT site (not published) |
| `tools/build_images.py` | Rebuilds `img/` from `source/` and prints the palettes |
| `deploy/` | `deploy.sh` (nginx + HTTPS on an Ubuntu server) and `nginx.conf` |

## Common edits

- **Text:** edit the English in `index.html` (elements with `data-i18n`), then edit the same key under `strings.pt` and `strings.es` in `content.js`.
- **Career book:** the `career` section of `content.js`. When your Workana numbers change, also update the numbers in `index.html` (Career section stats) and in `faces()` in the script (pages 3 and 4).
- **Add a project:** put `slug-1/2/3.webp` in `source/`, run `python tools/build_images.py`, then add an entry to `projects` in `content.js`.

## Publishing

Live at **https://nayaraportfolio.vercel.app/**. Vercel publishes every push to `main` on GitHub on its own; `.vercelignore` keeps `source/`, `tools/` and `deploy/` off the live site. If the address changes, update `og:url`, `og:image`, `twitter:image` and `canonical` in `index.html`.

`deploy/` is only needed to host on your own Ubuntu server instead (`deploy/deploy.sh setup user@host domain`, then `push`).

## Content rules

- All projects are labelled as concept studies, and the footer says the brands are fictional.
- Tool stacks are labelled "Suggested production stack", as on the ChatGPT site.
- Career facts come from the public Workana profile on 6 Oct 2026:
  - 5.0 rating, 3 projects delivered, 2 reviews
  - Bronze level
  - English test 80%
  - years of experience as listed for each skill
