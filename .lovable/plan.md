

## Make Problem/Solution Section More Interactive and Visual

Replace the static side-by-side tiles with an interactive **reveal-based layout** where the problem side uses a vivid scene-setting image with overlay text (instead of the word "Problem"), and clicking/hovering reveals the solution. This creates engagement and speaks directly to the pain point visually.

---

### New Interaction Model

Each pair becomes a single wide card with two states:

1. **Default state (Problem)**: A background image relevant to the pain point (e.g., a messy hotel room, a worker in dirty overalls) with a dark gradient overlay. The pain-point text sits on top in bold white. A "See How We Solve It" button invites interaction.

2. **Revealed state (Solution)**: Clicking the button (or hovering on desktop) flips/slides the card to show the clean LinExo solution tile with the green/blue styling.

On mobile, the card starts showing the problem and tapping toggles to the solution.

---

### Visual Layout (per card)

```text
DEFAULT STATE:
+------------------------------------------------------------------+
|  [background image with dark gradient overlay]                    |
|                                                                   |
|  "You're scrambling before guests check in                       |
|   because linen arrived late, wrinkled, or not at all."          |
|                                                                   |
|              [ See How We Solve It -> ]                           |
+------------------------------------------------------------------+

CLICKED/HOVERED STATE:
+------------------------------------------------------------------+
|  [bg-primary/5 clean tile]                                        |
|                                                                   |
|  [check] Linen Hire, Finishing & Delivery                        |
|                                                                   |
|  Fixed-schedule pickup and delivery with 24-48hr turnaround.     |
|  Sheets, pillowcases, and duvet covers -- pressed, folded,      |
|  and guest-ready every time.                                      |
|                                                                   |
|              [ <- Back to Problem ]                               |
+------------------------------------------------------------------+
```

---

### AI-Generated Images

Generate 4 images using the Nano banana model that depict each pain point scenario. These will be used as background images with a dark gradient overlay:

| # | Image Prompt | Pain Point |
|---|---|---|
| 1 | A stressed hotel housekeeper looking at an empty linen closet with unmade beds visible, commercial photography style | Late/missing linen delivery |
| 2 | A pile of dirty industrial workwear and PPE overalls on a warehouse floor, gritty industrial photography | Dirty workwear, slow processing |
| 3 | A close-up of questionable stained hotel towels stacked on a shelf, editorial photography | Hygiene uncertainty |
| 4 | An overwhelmed hotel front desk with a line of waiting guests and a "No Rooms Available" sign, commercial photography | Surge capacity failure |

---

### Interactivity Features

- **Flip animation**: Each card uses framer-motion's `AnimatePresence` to smoothly transition between problem and solution states
- **State toggle**: `useState` tracks which card is "flipped" -- clicking toggles the state
- **Auto-close**: When one card is opened, the previously opened card closes (accordion behavior)
- **Hover preview on desktop**: On desktop, hovering for 800ms also triggers the flip (with `onMouseEnter`/`onMouseLeave` timers)
- **Staggered entrance**: Cards animate in with the existing `fadeUp` variants as they scroll into view

---

### Content Updates

Remove "THE PROBLEM" label entirely. Instead, the problem text speaks for itself against the evocative image background. The solution side keeps the `CheckCircle2` icon and "HOW LINEXO SOLVES IT" label.

Update the `problemSolutions` array to include an `image` field for each pair pointing to the generated image.

---

### Technical Details

**Files modified:** `src/pages/Index.tsx`

1. **Generate 4 images** using the AI image generation API and save them to `src/assets/` (e.g., `problem-linen.jpg`, `problem-workwear.jpg`, `problem-hygiene.jpg`, `problem-surge.jpg`)

2. **Update `problemSolutions` array** (lines 58-79): Add an `image` field to each object with the imported image path

3. **Replace services grid JSX** (lines 233-271): New interactive card component with:
   - `useState` to track the active/flipped card index (`activeCard: number | null`)
   - Each card renders conditionally based on whether it's flipped
   - Problem state: `div` with background image, dark gradient overlay (`bg-gradient-to-r from-black/70 to-black/50`), white text, and a "See How We Solve It" button
   - Solution state: Clean tile with `bg-primary/5`, solution content, and a "Back" button
   - `AnimatePresence` with `motion.div` for smooth enter/exit transitions between states
   - Cards use `rounded-2xl overflow-hidden` with `min-h-[200px]` for consistent sizing

4. **No new dependencies** -- uses existing framer-motion and lucide-react

