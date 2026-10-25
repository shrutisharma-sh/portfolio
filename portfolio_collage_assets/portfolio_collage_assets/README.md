# Dark-green scrapbook portfolio assets

## Contents
- `leaves/`: two transparent botanical sprigs in SVG (editable) and PNG (quick use)
- `doodles/`: cloud, star, heart, smiley, arrow and curved “small steps big dreams” doodles as SVG
- `texture/`: subtle transparent paper-noise PNG
- `css/`: CSS for graph paper, polaroid, washi tape, sticky note and optional texture overlay

## Use
Copy the folders into your React/Vite `public/assets/` directory.
Reference public files like:
`<img src="/assets/leaves/leaf-sprig-01.svg" alt="" />`
For CSS, copy `collage-elements.css` into `src/styles/` and adjust the texture URL if needed.

SVGs have transparent backgrounds. Change their stroke/fill colours in any text editor or vector editor.
For line-drawing animation, target doodle paths with `stroke-dasharray` and `stroke-dashoffset`.
