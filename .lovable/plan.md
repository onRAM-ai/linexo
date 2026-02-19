

## Fix: Solution Overlay Should Fit Content, Not Fill Entire Card

The blue solution overlay currently animates to `100%` height on hover, but the text content only occupies the bottom portion -- leaving a large empty blue area at the top (as shown in the screenshot).

### Change

In `src/pages/Index.tsx` line 288, swap the layout from `justify-end` (content pinned to bottom) to `justify-center` (content vertically centered) when the overlay expands. This way the text fills the visible blue area without awkward empty space above it.

Specifically:
- **Line 288**: Change `flex flex-col justify-end` to `flex flex-col justify-center`

This keeps the default (collapsed) state looking the same since the overlay is small and the content fills it. When expanded to 100%, the content centers vertically instead of leaving dead space at the top.

