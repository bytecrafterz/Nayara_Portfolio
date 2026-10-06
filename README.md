# Nayara J. N. · Selected Works (v2)

The second version of the portfolio: the 20 concept projects from the ChatGPT "Selected Works" site, rebuilt as a dark, gold‑accented one‑page site in English, Portuguese and Spanish. It has no build step: open `index.html` in a browser.

## What's on the page

- **Hero:** the headline "A point of view.", the **My Career** button, and five floating project images. On a laptop the images move in depth with the mouse.
- **Work:** 20 projects in a staggered grid with filters. Every card shows a blurred preview at once and its image fades in when it arrives, so no card ever appears empty. Filters show and hide cards rather than rebuilding them. Cards tilt toward the cursor and catch the light. Clicking one opens a full‑screen viewer with the description, suggested stack, palette and all 3 images.
- **Disciplines:** nine rows that filter the grid. On a laptop an image preview follows the cursor; on a phone each row shows a thumbnail.
- **Career:** the same book as a small 3D object, plus key numbers.
- **My Career book:** clicking any My Career button, or the small book, flies a leather‑bound book to the centre. It floats, opens its cover, and turns its pages:
  - Laptop: two‑page spreads.
  - Phone: one page at a time.
  - Turn pages with a click, the arrows, ← →, or a swipe.
- **Mouse and click effects:**
  - The gold cursor ring stretches like liquid as it moves, and says View / Open / Filter / Close over things you can click.
  - A gold‑dust trail follows the mouse, with a warm light behind the page.
  - Every click or tap sets off a gold burst with a flash.
  - The headline letters spring away from the cursor and light up gold.
  - On a project card, a lens around the cursor shows the second image.
  - Filters and the Close button fill with liquid gold from the side the mouse enters.
  - Buttons are magnetic and bounce back when the mouse leaves.
  - Project images trail the mouse across the Contact section.
- **Scroll effects:** cards bend with scroll speed and the right column trails a little behind. The marquee speeds up and follows the scroll direction.
- **FX switch** (✦ FX in the top bar, "Motion effects" in the footer): turns the intro, drifting, scroll and flying motion on or off, and the browser remembers the choice.
  - It starts off when the computer asks for reduced motion. Windows does this when "Animation effects" is off, which is the default on Windows Server and over Remote Desktop.
  - Mouse, hover and click effects stay on either way. The book still fades in and turns its cover.

## Files

| Path | What it holds |
| --- | --- |
| `index.html` | Layout, styles, the script, and the English page text |
| `content.js` | Projects, disciplines, career book text and the Portuguese/Spanish page text |
| `lqip.js` | Tiny blurred previews of every image, shown while the real image loads (generated) |
| `img/` | `slug-1..3.webp` (1536 px), `slug-1..3-sm.webp` (760 px), `avatar.webp`, `og.jpg` |
| `source/` | Original images and `chatgpt-projects.json` from the ChatGPT site (not published) |
| `tools/build_images.py` | Rebuilds `img/` from `source/`, prints the palettes, then runs `build_lqip.py` |
| `tools/build_lqip.py` | Rebuilds `lqip.js` from `img/*-sm.webp` |
| `deploy/` | `deploy.sh` (nginx + HTTPS on an Ubuntu server) and `nginx.conf` |

## Common edits

- **Text:** edit the English in `index.html` (elements with `data-i18n`), then edit the same key under `strings.pt` and `strings.es` in `content.js`.
- **Career book:** the `career` section of `content.js`. When your Workana numbers change, also update the numbers in `index.html` (Career section stats) and in `faces()` in the script (pages 3 and 4).
- **Add a project:** put `slug-1/2/3.webp` in `source/`, run `python tools/build_images.py`, then add an entry to `projects` in `content.js`.

## Publishing

Live at **https://portfolio-self-two-17.vercel.app/**. Vercel publishes every push to `main` on GitHub on its own; `.vercelignore` keeps `source/`, `tools/` and `deploy/` off the live site. If the address changes, update `og:url`, `og:image`, `twitter:image` and `canonical` in `index.html`.

`deploy/` is only needed to host on your own Ubuntu server instead (`deploy/deploy.sh setup user@host domain`, then `push`).

## Content rules

- All projects are labelled as concept studies, and the footer says the brands are fictional.
- Tool stacks are labelled "Suggested production stack", as on the ChatGPT site.
- Career facts come from the public Workana profile on 6 Oct 2026:
  - 5.0 rating (the counts of projects delivered and reviews are left out on purpose)
  - Bronze level
  - English test 80%
  - years of experience as listed for each skill
