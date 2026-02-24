

## Add GWA Logo to Carousel and Fix Logo Styling

### What Changes

1. **Add GWA Automotive logo** to the "Trusted by the Goldfields" carousel
2. **Remove grayscale filter** so all logos show in full color
3. **Standardize logo sizing** so all logos appear the same size

### Steps

1. **Copy the uploaded GWA logo** from `user-uploads://image-31.png` to `src/assets/client-logo-gwa.png`

2. **`src/pages/Index.tsx`** -- Import and add the new logo:
   - Add import: `import clientLogoGwa from "@/assets/client-logo-gwa.png";`
   - Add `{ src: clientLogoGwa, alt: "GWA Automotive" }` to the `clientLogos` array

3. **`src/pages/Index.tsx`** -- Update logo `<img>` styling (line 499):
   - Remove `grayscale` and `opacity-60` classes
   - Keep consistent sizing (`h-16 w-32 object-contain`) and hover transition
   - Final classes: `"h-16 w-32 object-contain transition-all duration-300 hover:scale-105"`

### Files Changed
- `src/assets/client-logo-gwa.png` -- new file (uploaded GWA logo)
- `src/pages/Index.tsx` -- new import, updated `clientLogos` array, updated logo styling

