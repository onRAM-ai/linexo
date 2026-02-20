
## Add Slim Blue Underline to Section Headings

### Reference
The uploaded image shows a bold section heading ("Problems We Solve") with a slim, solid primary-blue line directly beneath the text, spanning the full width of the text — not the container.

### Approach
Add a reusable CSS utility class `.heading-underline` in `src/index.css` that uses `display: inline-block` with a `border-bottom` in the primary blue color. Then apply this class to all 4 main section `h2` headings in `src/pages/Index.tsx`.

This is cleaner than inline Tailwind because the underline must match the text width (not the full container width), which requires `inline-block` — a behaviour that's consistent with the reference image.

### 1. Add utility class to `src/index.css`

```css
/* ─── Section Heading Underline ─── */
.heading-underline {
  display: inline-block;
  border-bottom: 3px solid hsl(var(--primary));
  padding-bottom: 6px;
}
```

- `inline-block` ensures the border only spans the text width
- `3px solid` gives a slim but visible line (matching the reference)
- `hsl(var(--primary))` uses the existing Primary Blue CSS variable

### 2. Apply class to section headings in `src/pages/Index.tsx`

There are 4 main centered section headings to update:

| Line | Heading |
|------|---------|
| 241 | Problems We Solve |
| 361 | How It Works |
| 401 | Why LinExo? |
| 439 | Sectors We Serve |

Each `h2` gets the `heading-underline` class added. The parent `div` is already `text-center`, so the `inline-block` heading will naturally center itself.

For the "Why LinExo?" heading (line 401), the `<span>` children inside will inherit the inline layout correctly, so the underline will span the full heading text including the colored spans.

### 3. Headings NOT updated
- Line 563 ("Born in the Goldfields…") — this is a left-aligned content block, not a centered section header
- Line 606 ("What If Your Linen Just… Showed Up?") — this is on a dark background CTA section with different styling

These two are styled differently from the main section headers and will be left unchanged to preserve the existing visual design.

### Files Changed
- `src/index.css` — add `.heading-underline` utility class
- `src/pages/Index.tsx` — add `heading-underline` to 4 section `h2` elements (lines 241, 361, 401, 439)
