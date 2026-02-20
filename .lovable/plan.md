
## Fix Bottom Image Overlap with Right Laundry Image

### Problem
The bottom image (`images[2]`) is currently `w-3/4` starting at `left-1/4`, meaning it spans from 25% to 100% of the container — completely covering the right-side laundry image (`images[1]` at `right-0 w-2/5`).

### Fix in `src/components/HeroSection.tsx` — Line 207

Reduce the bottom image width and shift it left so it sits beneath the truck image (top-left) without overlapping the right laundry panel:

```tsx
// Before
className="absolute bottom-0 left-1/4 w-3/4 overflow-hidden rounded-2xl shadow-xl ring-1 ring-primary/10"

// After
className="absolute bottom-0 left-0 w-3/5 overflow-hidden rounded-2xl shadow-xl ring-1 ring-primary/10"
```

- `left-0` — anchors it to the left edge, under the truck image
- `w-3/5` — matches the top-left image width (60%), keeping it from overlapping the right laundry column

This keeps the bottom image roughly the same size as the previous "50% larger" request (vs the original `w-1/2`) while freeing up the right side for the laundry image to remain visible.
