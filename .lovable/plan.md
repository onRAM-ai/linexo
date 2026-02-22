

## Fix "LinEXO" Spelling to "LinExo"

### What Changes

One instance of incorrect spelling found in `src/pages/Index.tsx`:

**Line 574** (Born in the Goldfields section): The brand name is rendered as "LinEXO" using two spans:
```html
<span class="text-primary">Lin</span><span class="text-accent">EXO</span>
```
This will be corrected to:
```html
<span class="text-primary">Lin</span><span class="text-accent">Exo</span>
```

All other instances across the codebase already use the correct "LinExo" spelling (including the "Why LinExo?" heading, meta tags, alt text, and email addresses).

### Files Changed
- `src/pages/Index.tsx` — fix "EXO" to "Exo" on line 574

