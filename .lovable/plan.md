

## Add Blue Underline to Section Headings

Add a decorative blue underline beneath each section's `<h2>` heading, matching the primary blue used across the site.

### Changes in `src/pages/Index.tsx`

For each of the 4 section headings ("Problems We Solve", "How It Works", "Why LinExo?", "Sectors We Serve"), wrap or follow the `<h2>` with a centered blue bar element:

```html
<div className="mx-auto mt-3 h-1 w-24 rounded-full bg-primary" />
```

This adds a small, rounded, primary-blue bar centered below each heading. The lines to modify are approximately:

- After the "Problems We Solve" `<h2>` (~line 238)
- After the "How It Works" `<h2>` (~line 359)
- After the "Why LinExo?" `<h2>` (~line 399)
- After the "Sectors We Serve" `<h2>` (~line 437)

No new dependencies or files needed.

