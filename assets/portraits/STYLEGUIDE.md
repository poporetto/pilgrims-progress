# Dialogue Portrait Style Guide

Every dialogue portrait must look like it belongs to the same set. Use
`public/portraits/christian.webp` as the primary visual reference and compare
new portraits against it before installing them.

## Required visual style

- **Geometry:** Use a few large, clean cuboids. Avoid dense micro-voxels,
  rounded geometry, realistic fur, surface noise, and excessive accessories.
- **Camera:** Use the same gentle three-quarter view, turned slightly toward
  screen-right. Do not use a perfectly straight-on or strongly angled pose.
- **Framing:** Show the full head and upper chest. Keep ears, horns, hats, and
  other identifying features inside the frame with comfortable padding.
  Character heads should occupy approximately the same area as Christian's.
- **Eyes:** Use simple, long vertical dark-brown rectangular eyes without
  highlights unless the in-game model specifically requires glowing eyes.
- **Facial pieces:** Build muzzles, noses, cheeks, beaks, and snouts from simple
  flat rectangular blocks.
- **Lighting:** Use soft, warm, diffuse light with restrained shadows. Avoid
  harsh highlights, dramatic bloom, rim lighting, or glowing backgrounds.
- **Background:** Use a plain, muted pastel sky-blue backdrop matching
  Christian's portrait. Avoid cyan gradients, scenery, texture, borders, and
  white edge strips.
- **Palette:** Match the character's actual in-game fur, skin, clothing, robe,
  armor, and accessory colors. Do not invent modern clothes.
- **Species:** Verify the portrait against the model constructor in `src/`.
  Preserve defining features such as horns, ears, snout, tail species, mane,
  beak, or frog eyes. Never substitute a generic bear.
- **Setting:** Clothing and accessories must suit the story's medieval
  storybook world.

## Output requirements

- Export as WebP under `public/portraits/`.
- Standard output size is **235 × 200 px**.
- Crop each source to the same **1.175:1** aspect ratio before resizing.
- Use `background-size: cover` compatibility: no baked frame or border.
- No text, watermark, UI, halo, or glow unless it is genuinely part of the
  in-game character.
- After replacing a portrait, bump the cache version in
  `src/dialoguePortraits.ts`.

## Review checklist

Before accepting a portrait, confirm:

1. Does the species match the voxel model?
2. Do clothing and accessory colors match the model?
3. Is the geometry as simple as Christian's?
4. Is the head at the same scale and three-quarter angle?
5. Are all ears, horns, hats, and hair fully framed?
6. Is the background the same muted blue?
7. Is the lighting soft and consistent?
8. Does the final WebP measure 235 × 200 px without white edge artifacts?
