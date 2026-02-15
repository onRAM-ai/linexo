

## Align Sector Cards to Blue Color Theme

The three sector cards currently use mismatched colors: blue for Accommodation, slightly lighter blue for Hospitality, and dark (foreground) for Industrial & Mining. The screenshot confirms the green card is still showing for Hospitality. All three should use the primary blue palette for consistency.

### Changes

**`src/pages/Index.tsx` (line 76-78) -- Sector card colors**

Update the `sectors` array so all three cards use graduated shades of the primary blue, creating a cohesive look while still having visual distinction:

- **Accommodation**: `bg-primary` (full blue) -- stays as-is
- **Hospitality**: `bg-primary/85` (slightly lighter blue) -- replacing `bg-primary/90` to add a touch more differentiation
- **Industrial & Mining**: `bg-primary/70` (lighter blue) -- replacing `bg-foreground` (dark navy) to bring it into the blue family

All three cards keep `text-primary-foreground` (white text) for readability.

This creates a subtle gradient effect across the three cards while keeping everything firmly within the blue brand palette.

