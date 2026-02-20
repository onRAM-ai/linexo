
## Replace "LINEXO" with "LinExo" in the Section Heading

### Finding
The codebase already uses correct `LinExo` casing everywhere — in `index.html`, `BrandName.tsx`, `HeroSection.tsx`, testimonials, and comments — **except one place**:

`src/pages/Index.tsx`, line 401:
```tsx
<h2 className="text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
  Why <span className="text-primary">LIN</span><span className="text-accent">EXO</span>?
</h2>
```
This renders as **"Why LINEXO?"** with all-caps text split across two styled spans.

### Fix
Update the two spans to use mixed-case text matching the brand name `LinExo`:

```tsx
// Before
<span className="text-primary">LIN</span><span className="text-accent">EXO</span>

// After
<span className="text-primary">Lin</span><span className="text-accent">Exo</span>
```

This renders as **"Why LinExo?"** — consistent with the brand name used everywhere else in the codebase.

### Files to Change
- `src/pages/Index.tsx` — line 401 only
