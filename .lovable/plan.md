

## Problem/Solution Services Section

Replace the current 7-card services grid with a **paired problem/solution tile layout** that clearly communicates the pain points LinExo solves. Each row shows a "problem" tile on the left and a "LinExo solves it" tile on the right, creating a compelling before/after narrative.

---

### Layout

```text
+-------------------------------+    +-------------------------------+
| [!] THE PROBLEM               |    | [check] HOW LINEXO SOLVES IT  |
|                                |    |                                |
| Linen arrives late, wrinkled,  |    | Fixed-schedule pickup and     |
| or not at all -- and you're    |    | delivery with 24-48hr         |
| scrambling before guests       |    | turnaround. Sheets, towels,   |
| check in.                      |    | and duvet covers pressed,     |
|                                |    | folded, and guest-ready.      |
+-------------------------------+    +-------------------------------+

+-------------------------------+    +-------------------------------+
| [!] THE PROBLEM               |    | [check] HOW LINEXO SOLVES IT  |
|                                |    |                                |
| Workwear comes back still      |    | Commercial-grade processing   |
| dirty or takes a week to       |    | for PPE, overalls, and heavy- |
| process -- putting your crew   |    | duty garments. Express        |
| and compliance at risk.        |    | turnaround available on       |
|                                |    | demand.                       |
+-------------------------------+    +-------------------------------+
```

On mobile, the problem tile stacks above the solution tile.

---

### Content Pairs

| # | Problem | Solution Title | Solution |
|---|---------|---------------|----------|
| 1 | Linen arrives late, wrinkled, or not at all -- and you're scrambling before guests check in. | Linen Hire, Finishing & Delivery | Fixed-schedule pickup and delivery with 24-48hr turnaround. Sheets, pillowcases, and duvet covers -- pressed, folded, and guest-ready every time. |
| 2 | Your workwear comes back still dirty or takes a week to process -- putting your crew and compliance at risk. | Industrial Workwear Processing | Commercial-grade processing for PPE, overalls, and heavy-duty garments. Express turnaround available on demand. |
| 3 | You're never sure if your linen is actually clean -- and one hygiene complaint could cost you your contract. | Heat-Sealed Hygienic Packaging | Every item commercially laundered and continuously heat-sealed in packaging -- so it arrives hygienically protected and audit-ready. |
| 4 | A sudden booking surge hits and your linen supplier can't keep up -- leaving rooms unserviced. | Surge & Emergency Processing | Purpose-built to scale from 50 to 5,000+ pieces daily. Emergency and priority processing available when you need it most. |

This consolidates the 7 service cards into 4 problem/solution pairs, which is more focused and persuasive.

---

### Visual Design

- **Problem tile**: Light red/warm tinted background (`bg-destructive/5`), with an `AlertTriangle` icon and "THE PROBLEM" label. Text in a conversational, pain-focused tone.
- **Solution tile**: Light green/blue tinted background (`bg-primary/5`), with a `CheckCircle` icon and "HOW LINEXO SOLVES IT" label. Text stacks the value clearly.
- **Connected feel**: A small arrow or connector between the tiles on desktop to show the transformation.
- **Section heading**: Change from "Our Services" to "Problems We Solve" with a subtitle like "Every service exists because we've seen what happens when it's done badly."

---

### Overlap Fix

The stat band overlap will also be fixed by increasing the services section bottom padding from `pb-12 md:pb-16` to `pb-24 md:pb-28` to accommodate the `-mt-20 md:-mt-24` negative margin.

---

### Technical Details

All changes in `src/pages/Index.tsx`:

- **Replace `services` array** (lines 57-65) with a new `problemSolutions` array of 4 objects, each with `problem`, `solutionTitle`, and `solution` fields
- **Replace services grid JSX** (lines 218-238) with a new layout: a vertical stack of rows, each row being a 2-column grid (problem tile + solution tile)
- **Update section heading** (lines 214-216) to "Problems We Solve"
- **Fix section padding** (line 206) from `pb-12 md:pb-16` to `pb-24 md:pb-28`
- Uses existing icons from lucide-react (`AlertTriangle`, `CheckCircle2`), no new dependencies

