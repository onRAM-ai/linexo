

## Unified Color Palette: Logo Colors Only

The logo uses two colors: **blue** (primary, dominant) and **green** (accent, secondary). Currently, the green accent is overused across blobs, badges, sector cards, wave fills, and decorative elements, creating visual noise. This plan strips back to a disciplined two-color system where blue dominates and green appears only in the brand name and subtle supporting touches.

### Color Strategy

- **Blue (primary)**: All interactive elements, icons, badges, section backgrounds, blobs, waves, glows
- **Green (accent)**: Reserved for the LINEXO brand name only (the "EXO" portion)
- **Neutral tones**: Backgrounds, text, borders stay as-is

### Changes

**1. CSS Variables (`src/index.css`)**
- Adjust the accent green HSL to better match the logo's green (currently `90 50% 50%`, shift to approx `130 45% 48%` -- a truer mid-green matching the logo)
- Update mesh/glow utility classes to use primary instead of accent

**2. Hero Section (`src/components/HeroSection.tsx`)**
- Replace all `bg-accent/*` blob references with `bg-primary/*` variants
- Remove the `fill-accent/10` wave layer, keep only primary-toned waves

**3. Index Page (`src/pages/Index.tsx`)**
- Hero title: Change `text-accent` on "Linen & Laundry" to `text-primary`
- Process step number badges: Change `bg-accent` to `bg-primary`
- Sector cards: Change the Hospitality card from `bg-accent` to `bg-primary/90` so all three cards sit in the blue family
- All decorative blobs: Replace `bg-accent/*` with `bg-primary/*`
- CTA floating shapes: Replace `bg-accent/10` blob with `bg-primary/10`
- About snippet: Replace `bg-accent/10` decorative square with `bg-primary/10`

**4. About Page (`src/pages/About.tsx`)**
- Brand name in hero already uses BrandName component (keep green there)
- No other accent overrides needed

**5. Services Page (`src/pages/Services.tsx`)**
- No accent color usage found -- no changes needed

**6. BrandName Component (`src/components/BrandName.tsx`)**
- Keep as-is: "LIN" in primary blue, "EXO" in accent green -- this is the one place green belongs

### Technical Details

Files modified:
- `src/index.css` -- accent HSL tweak, utility class updates (mesh-green, glow-accent use primary instead)
- `src/components/HeroSection.tsx` -- ~5 class changes (blobs + wave fills)
- `src/pages/Index.tsx` -- ~10 class changes (badges, blobs, sector card, hero title)

No dependency or structural changes. Purely className and CSS variable updates.

