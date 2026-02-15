

# Remove Sector Tile Watermark Text

## What's Changing
Remove the large, rotated, semi-transparent watermark text (e.g. "Hospitality", "Accommodation", "Industrial & Mining") that appears behind the content on each sector card.

## Technical Detail
In `src/pages/Index.tsx`, inside the sectors `.map()` block (~line 183-185), delete the `<span>` element with classes `absolute -right-4 top-1/2 ... rotate-90 text-[5rem] ... opacity-[0.08]` that renders `{s.title}` as a background watermark.

One line removal, no other files affected.

