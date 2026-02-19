

## Update "How It Works" to Include Drop-Off Option

Currently the first step says "Collect" with "Scheduled pickup from your premises". We'll update it to communicate both collection and drop-off options.

### Change in `src/pages/Index.tsx`

Update the first process step (line 98) from:

| Field | Current | New |
|-------|---------|-----|
| label | "Collect" | "Collect or Drop Off" |
| desc | "Scheduled pickup from your premises" | "We collect from your site or accept drop-offs at our facility" |

The icon (`Truck`) stays the same. All other steps remain unchanged.

