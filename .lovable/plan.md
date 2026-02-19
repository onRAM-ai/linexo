

## Unify Solution Overlay Background & Full-Tile Hover Slide

### What Changes

1. **Consistent overlay background**: All four cards currently use varying opacities (`bg-primary`, `bg-primary/85`, `bg-primary/70`, `bg-primary/60`). Remove the `overlayOpacities` array and use `bg-primary` (solid, 100% opacity) for all cards -- matching the Linen Hire card.

2. **Full-tile slide on hover**: Change the solution overlay animation so it slides from `30%` height (default) to `100%` height on hover, covering the entire card instead of stopping at `65%`.

### Technical Details (src/pages/Index.tsx)

- **Line 247**: Remove the `overlayOpacities` array entirely.
- **Line 288**: Replace `${overlayOpacities[i]}` with just `bg-primary` so all cards share the same solid background.
- **Line 291**: Change the hover height from `'65%'` to `'100%'` so the overlay slides across the full tile.
- **Line 288**: Remove `rounded-t-2xl` from the overlay since at 100% height the card's own `rounded-2xl` handles the corners.

