

## Add Capability Statement View and Download

### Approach

Since you have a PDF ready, we'll take the simplest approach: place the PDF in the project's `public/` folder so it's served as a static file. Then add a call-to-action on the site with two options:

1. **"View" button** -- opens the PDF in a new browser tab (browsers have built-in PDF viewers)
2. **"Download" button** -- triggers a direct file download

### Where It Appears

Add a small section or banner near the "About" / "Born in the Goldfields" area with a heading like **"Our Capability Statement"** and the two buttons (View / Download). This keeps it visible without disrupting the page flow.

### Steps

1. **You upload the PDF** -- after approving this plan, you'll upload your capability statement PDF. It will be saved to `public/linexo-capability-statement.pdf`.

2. **Add a Capability Statement section** in `src/pages/Index.tsx`:
   - Placed after the "Born in the Goldfields" about section
   - A compact card/banner with a brief description and two buttons:
     - "View Statement" -- opens `/linexo-capability-statement.pdf` in a new tab
     - "Download PDF" -- uses an anchor tag with the `download` attribute to trigger a file download
   - Styled consistently with the rest of the page using existing motion animations

### Files Changed
- `public/linexo-capability-statement.pdf` -- your uploaded PDF
- `src/pages/Index.tsx` -- add capability statement section with view/download buttons

