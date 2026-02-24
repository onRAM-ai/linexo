

## Remove "View Statement" Button and Center "Download PDF"

### What Changes

Remove the "View Statement" button and center the remaining "Download PDF" button. Also update the description text since viewing online is no longer an option.

### Steps

1. **`src/pages/Index.tsx`** (lines 608-618):
   - Remove the "View Statement" button
   - Change the "Download PDF" button from `variant="outline"` to default (primary) styling
   - Center it by simplifying the flex container
   - Update the description text on line 606 to remove mention of viewing online

### Files Changed
- `src/pages/Index.tsx` -- remove View Statement button, center Download PDF button, update description text

