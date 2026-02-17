

## Replace Flip Cards with Slider Reveal

Replace the current click/hover flip interaction with a **draggable slider** on each card. The card shows both the problem (image + text) and the solution side-by-side, with a slider handle that the user drags left/right to reveal the solution underneath.

---

### How It Works

Each card is a fixed-height container with two layers:

1. **Bottom layer (Solution)**: The clean `bg-primary/5` solution tile, always rendered
2. **Top layer (Problem)**: The background image with dark overlay and problem text, clipped by the slider position

A vertical divider handle sits at the slider position. Dragging it to the left reveals more of the solution. Dragging right hides it again.

```text
SLIDER AT 100% (default - problem fully visible):
+------------------------------------------------------------------+
|  [background image + dark overlay]                                |
|  "You're scrambling before guests check in..."           |handle| |
+------------------------------------------------------------------+

SLIDER AT 40% (solution mostly revealed):
+------------------------------------------------------------------+
|  [image]  |handle|  [check] Linen Hire, Finishing & Delivery     |
|           |      |  Fixed-schedule pickup and delivery...         |
+------------------------------------------------------------------+
```

---

### Interaction

- **Drag**: User drags the handle left/right to reveal/hide the solution
- **Touch support**: Works on mobile with touch events
- **Click shortcut**: Clicking anywhere on the problem side slides it to 30%; clicking the solution side slides back to 100%
- **Visual cue**: A subtle "Slide to reveal" label with a drag icon near the handle on initial load

---

### Technical Changes

**File: `src/pages/Index.tsx`**

1. **Remove** `activeCard` state, `hoverTimerRef`, and `useIsMobile` (no longer needed for this section)
2. **Add** a `sliderPositions` state: `useState<number[]>([100, 100, 100, 100])` tracking each card's slider percentage (100 = problem fully visible, 0 = solution fully visible)
3. **Replace the card JSX** (lines 245-322) with a new slider-based layout:
   - Each card is a `relative` container with `min-h-[220px]`
   - Solution layer rendered as a normal `div` filling the card
   - Problem layer rendered with `clipPath: inset(0 ${100 - sliderPos}% 0 0)` to clip from the right based on slider position
   - A vertical handle bar (`w-1 bg-white` with a drag icon) positioned at the slider percentage
   - `onMouseDown`/`onTouchStart` on the handle initiates dragging; `onMouseMove`/`onTouchMove` on the container updates the position; `onMouseUp`/`onTouchEnd` stops dragging
   - Smooth CSS transition on the clip-path when clicking (not dragging) for animated slide
4. **Remove** `AnimatePresence` usage from this section (no longer flipping)
5. **Keep** the `fadeUp` scroll-in animation on each card container
6. **Remove** `useIsMobile` import if not used elsewhere; keep `useRef` for drag tracking

No new dependencies -- uses native pointer/touch events and CSS `clipPath`.

