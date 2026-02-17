

## Improve Hero-to-Services Wave Transition

Replace the current single-wave divider at the bottom of the hero section with a layered, multi-depth wave transition inspired by the reference image.

---

### What changes

**`src/components/HeroSection.tsx`** (lines 206-218) -- Replace the single SVG wave with two overlapping SVG waves at different opacities and heights:

- **Back wave**: A taller, softer wave (`h-24 md:h-36`) filled with a lighter blue (`hsl(207 30% 93% / 0.6)`) to create the background depth layer
- **Front wave**: A shorter wave (`h-16 md:h-24`) with the current solid fill (`hsl(207 30% 93%)`) sitting in front, using a different curve path

Both waves use `absolute bottom-0` positioning so they overlap naturally, creating the layered effect shown in the reference image. The back wave uses a gentler curve while the front wave uses the existing more dynamic curve, producing visual depth without animation.

**`src/pages/Index.tsx`** (line 204) -- Add top padding to the services section (`pt-8 md:pt-12`) to give the waves breathing room and ensure the section background aligns with the wave fill color.

### Technical Details

- Two separate SVG elements stacked with z-index ordering
- No new files, components, or dependencies
- Static SVGs per the design quality standard (no animation on dividers)
- Wave fills match the services section background gradient starting color

