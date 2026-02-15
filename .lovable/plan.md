

## Tidy Up CTA-to-Footer Transition

The current issue: the CTA section's bottom wave fills with the dark `foreground` color, but the footer also renders its own multi-layer wave SVGs at the top. This creates a visible clash with overlapping waves and color mismatches between the two sections.

### Fix

**1. Remove the footer's top wave dividers (`src/components/Footer.tsx`)**

Delete the entire wave overlay block (lines 10-33) -- the two animated SVGs sitting inside the `absolute -top-[1px]` container. Since the CTA bottom wave already transitions cleanly into the dark footer background color, these are redundant and cause the visual clash.

**2. Reduce footer top padding (`src/components/Footer.tsx`)**

Change `pt-24` to `pt-12` on the footer content container (line 34), since the extra padding was compensating for the now-removed wave height.

**3. Refine CTA bottom wave (`src/pages/Index.tsx`)**

- Add the animated `animate-wave-drift-slow` class to the bottom wave SVG for consistency with the hero section's waves.
- Add a subtle second wave layer with low-opacity primary fill to create a smoother, more organic blend rather than a single hard wave edge.

### Result

A single, clean wave transition from the blue CTA into the dark footer -- no overlapping artifacts, no color mismatch.

