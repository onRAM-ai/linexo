

## Widen Blue Underline to Match Heading Text Width

Change the blue underline from a fixed-width bar (`w-24`) to one that spans the full width of each heading's text. This is done by wrapping each `<h2>` and its underline in an inline-block container so the underline naturally matches the text width.

### Changes in `src/pages/Index.tsx`

For all 4 section headings, replace the current pattern:

```tsx
<h2 className="...">Problems We Solve</h2>
<div className="mx-auto mt-3 h-1 w-24 rounded-full bg-primary" />
```

With an inline-block wrapper so the underline stretches to the text width:

```tsx
<div className="inline-block">
  <h2 className="...">Problems We Solve</h2>
  <div className="mt-3 h-1 w-full rounded-full bg-primary" />
</div>
```

Key changes:
- Wrap `<h2>` + underline div in `<div className="inline-block">`
- Change underline from `w-24 mx-auto` to `w-full` (removes fixed width, spans full heading width)

Apply to all 4 headings:
- "Problems We Solve" (~line 241)
- "How It Works" (~line 362)
- "Why LinExo?" (~line 403)
- "Sectors We Serve" (~line 442)

No new files or dependencies needed.

