

## Simplify Hero Wave to a Single Wave

Replace the three stacked SVG wave layers (lines 207-237 in `src/components/HeroSection.tsx`) with one single SVG wave.

### Change

**`src/components/HeroSection.tsx` (lines 206-237)**

Remove all three `<svg>` elements and replace with a single, clean wave:

- One `<svg>` with a gentle wave path
- Fill color: `hsl(207 30% 93%)` (the lightest blue, matching the section below)
- Height: `h-16 md:h-24` for a subtle but visible curve
- No animation classes -- keep it static and simple
- Full width, no overflow tricks needed

This removes visual complexity and creates a clean, single-curve transition from the hero into the "What We Do" section.

