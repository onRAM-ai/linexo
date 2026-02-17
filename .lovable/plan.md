

## Tier1-Style Hover Reveal Cards

Replace the current slider-based interaction with a **hover/click reveal layout** inspired by the Tier1 Coatings reference. Each card has a background image depicting the pain point, with a colored overlay panel on top showing the solution. When the user hovers (desktop) or taps (mobile), the overlay panel slides up/shrinks to reveal the full problem image underneath.

---

### Layout (4 cards in a row on desktop, stacked on mobile)

```text
DEFAULT STATE (solution overlay visible):
+-------------------------+
|  [image partially       |
|   visible at top]       |
|                         |
| +---------------------+ |
| | SOLUTION TITLE      | |
| | (vertical large     | |
| |  text on right)     | |
| |                     | |
| | Solution description| |
| | text here...        | |
| +---------------------+ |
+-------------------------+

HOVERED STATE (overlay slides down, image revealed):
+-------------------------+
|                         |
|  [Full problem image    |
|   revealed with dark    |
|   gradient overlay]     |
|                         |
|  "Pain point quote"     |
|                         |
| +---smaller overlay---+ |
| | Solution title      | |
| +---------------------+ |
+-------------------------+
```

---

### Design per Card

- **Background**: The problem image fills the entire card
- **Overlay panel**: A colored panel (`bg-primary` for each, varying opacity) sits in the lower portion of the card, containing:
  - The solution title in large, bold vertical text along the right edge
  - The solution description text
- **On hover/tap**: The overlay panel translates downward (shrinks to ~30% height), revealing the problem image and the pain-point quote text overlaid on it
- **Colors**: Each card gets a slightly different accent color to add visual variety (similar to Tier1's orange/cream/teal pattern), using `bg-primary`, `bg-primary/85`, `bg-primary/70`, and `bg-primary/60`

---

### Grid Layout

- **Desktop**: `grid-cols-4` -- four cards side by side
- **Tablet**: `grid-cols-2` -- two per row
- **Mobile**: `grid-cols-1` -- stacked

Each card has a fixed `aspect-[3/4]` ratio for consistent sizing.

---

### Technical Changes

**File: `src/pages/Index.tsx`**

1. **Remove** all slider state and logic: `sliderPositions`, `draggingRef`, `isDraggingRef`, `containerRefs`, `updateSlider`, the `useEffect` for mouse/touch events
2. **Add** `hoveredCard` state: `useState<number | null>(null)` to track which card is being hovered
3. **Replace the card JSX** (lines 268-338) with the new grid layout:
   - Each card is a `relative` container with `aspect-[3/4]` and `rounded-2xl overflow-hidden`
   - Background: `img` tag with `object-cover` filling the card, plus a dark gradient overlay
   - Pain-point quote text positioned over the image (visible when hovered)
   - Colored overlay panel using `motion.div` that animates `y` position on hover (from covering ~65% of the card to only ~25%)
   - Solution title and description inside the overlay
4. **Remove** `GripVertical` import (no longer needed)
5. **Keep** `fadeUp` scroll-in animation on each card
6. **Use framer-motion** `animate` prop for smooth overlay transitions

No new dependencies needed.

