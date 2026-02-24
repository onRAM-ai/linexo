

## Update Hero Section Image Collage Layout

### What Changes
Adjust the three hero images so they are more similarly sized, with the Kalgoorlie aerial photo (bottom center, `images[2]`) being the largest and most prominent — acting as the focal point of the collage.

### Layout Changes in `src/components/HeroSection.tsx`

**Current sizes:**
- Truck (top-left): `w-3/5` — too dominant
- Laundry (top-right): `w-2/5` — too small
- Kalgoorlie (bottom-center): `w-1/2` — should be the focus

**New sizes and positions:**
1. **Truck image** (`images[0]`): Reduce from `w-3/5` to `w-[48%]`, keep at top-left. Add a fixed aspect ratio height (~220px) so it doesn't stretch too tall.
2. **Laundry image** (`images[1]`): Increase from `w-2/5` to `w-[44%]`, keep at top-right. Match similar height to the truck image.
3. **Kalgoorlie image** (`images[2]`): Increase from `w-1/2` to `w-[58%]`, keep bottom-center. Add a slightly higher z-index and stronger shadow to emphasize it as the focal point. Adjust positioning so it overlaps the bottom portions of both flanking images.

### Technical Details

**File: `src/components/HeroSection.tsx`** -- 3 class changes (lines 191, 199, 207):

1. **Line 191** (Truck): Change class from `"absolute left-0 top-0 w-3/5 overflow-hidden rounded-2xl shadow-xl ring-1 ring-primary/10"` to `"absolute left-0 top-0 w-[48%] h-[220px] overflow-hidden rounded-2xl shadow-xl ring-1 ring-primary/10"`
2. **Line 199** (Laundry): Change class from `"absolute right-0 top-16 w-2/5 overflow-hidden rounded-2xl shadow-xl ring-1 ring-primary/10"` to `"absolute right-0 top-0 w-[44%] h-[200px] overflow-hidden rounded-2xl shadow-xl ring-1 ring-primary/10"`
3. **Line 207** (Kalgoorlie): Change class from `"absolute bottom-0 left-1/4 w-1/2 overflow-hidden rounded-2xl shadow-xl ring-1 ring-primary/10"` to `"absolute bottom-0 left-[18%] w-[60%] h-[200px] z-10 overflow-hidden rounded-2xl shadow-2xl ring-1 ring-primary/10"`

### Files Changed
- `src/components/HeroSection.tsx` -- adjust image sizing classes for balanced collage with Kalgoorlie as focal point

