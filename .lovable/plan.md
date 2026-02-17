

## Reduce Section Spacing by 50%

Cut all vertical padding and margins between sections in half to create a tighter, more compact layout.

---

### Changes (all in `src/pages/Index.tsx`)

**Section padding reductions:**

| Section | Current | New |
|---|---|---|
| Services (line 206) | `pb-24 md:pb-32` | `pb-12 md:pb-16` |
| Stat band (line 243) | `mb-8` | `mb-4` |
| How It Works (line 275) | `py-24 md:py-32` | `py-12 md:py-16` |
| Why LinExo (line 315) | `py-24 md:py-32` | `py-12 md:py-16` |
| Sectors (line 352) | `py-24 md:py-32` | `py-12 md:py-16` |
| Contract Banner (line 395) | `py-16` | `py-8` |
| About (line 423) | `py-24 md:py-32` | `py-12 md:py-16` |
| CTA inner (line 512) | `py-24 md:py-32` | `py-12 md:py-16` |

**Section heading margins:**

All `mb-16` heading containers (lines 214, 281, 321, 359) reduced to `mb-8`.

---

### Technical Details

- Single file modified: `src/pages/Index.tsx`
- No structural or content changes -- purely spacing adjustments
- All `py-24 md:py-32` become `py-12 md:py-16`, all `mb-16` become `mb-8`

