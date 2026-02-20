
## Center the Bottom Image to Overlap Both Side Photos

### Current State
- `images[0]` (truck): `left-0 w-3/5` → occupies 0%–60% horizontally
- `images[1]` (laundry): `right-0 w-2/5` → occupies 60%–100% horizontally
- `images[2]` (aerial/town): currently `left-0 w-3/5` → sits flush left, not centered

### Goal
Place the bottom image centered between both photos, covering roughly half of each — the right half of the truck and the left half of the laundry panel.

### Fix in `src/components/HeroSection.tsx` — Line 207

```tsx
// Before
className="absolute bottom-0 left-0 w-3/5 overflow-hidden rounded-2xl shadow-xl ring-1 ring-primary/10"

// After
className="absolute bottom-0 left-1/4 w-1/2 overflow-hidden rounded-2xl shadow-xl ring-1 ring-primary/10"
```

- `left-1/4` (25%) + `w-1/2` (50%) = spans from 25% to 75%
- The truck image covers 0–60%, so the bottom image overlaps the right 35% of it
- The laundry image covers 60–100%, so the bottom image overlaps the left 15% of it
- Both side images remain clearly visible above and to either side

This gives the classic layered collage look — the bottom image sits in the middle, partially covering both flanking images.
