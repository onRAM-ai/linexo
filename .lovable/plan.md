

## Update "Deliver" Step to Include Pickup Option

Update the last process step in the "How It Works" section to communicate that customers can also pick up their items, not just have them delivered.

### Change in `src/pages/Index.tsx`

Update the "Deliver" step (line 100) from:

| Field | Current | New |
|-------|---------|-----|
| label | "Deliver" | "Deliver or Pickup" |
| desc | "Returned on your schedule" | "Delivered to your site or ready for pickup at our facility" |

The icon (`RotateCcw`) and all other steps remain unchanged.

