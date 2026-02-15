

## Remove Watermark Text from Sector Cards

The large, rotated watermark text (e.g., "HOSPITALITY") overlaying each sector tile will be removed.

### Change

**src/pages/Index.tsx** (lines 331-333): Delete the `<span>` element inside each sector card that renders the large rotated watermark label.

```
// REMOVE this element:
<span className="absolute -right-4 top-1/2 -translate-y-1/2 rotate-90 text-[5rem] ..." >
  {s.title}
</span>
```

This is a single 3-line deletion. No other files are affected.
