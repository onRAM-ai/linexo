

## Tighten Hero Image Collage Overlap

### What Changes
Bring all three images closer together so they visually overlap each other, creating a tighter, more cohesive collage.

### How

Currently the top two images sit at `top-0` with a gap between them, and the bottom image sits at `bottom-0` with space above. To create overlap:

1. **Truck image** (`images[0]`): Keep at `top-0 left-0`. Increase width slightly to `w-[52%]` so it extends further right, overlapping with the laundry image.
2. **Laundry image** (`images[1]`): Keep at `top-0 right-0`. Increase width to `w-[48%]` so it extends further left, overlapping with the truck image. Add `z-[5]` so it layers on top of the truck.
3. **Kalgoorlie image** (`images[2]`): Move it up by changing from `bottom-0` to `top-[160px]` so it overlaps the bottom portions of both top images. Keep `z-10` so it sits on top of both. Adjust to `left-[12%] w-[65%]` for better centering and more overlap.

### Reduce container min-height
Reduce `min-h-[420px]` to `min-h-[380px]` since the images are now tighter together.

### Technical Details

**File: `src/components/HeroSection.tsx`** -- 4 edits:

1. **Line 181** (container): Change `min-h-[420px]` to `min-h-[380px]`
2. **Line 191** (Truck): Change to `w-[52%] h-[220px]` (wider, creates horizontal overlap)
3. **Line 199** (Laundry): Change to `w-[48%] h-[200px] z-[5]` (wider + z-index for layering)
4. **Line 207** (Kalgoorlie): Change from `bottom-0 left-[18%] w-[60%]` to `top-[160px] left-[12%] w-[65%]` (moved up to overlap both top images)

### Files Changed
- `src/components/HeroSection.tsx`

