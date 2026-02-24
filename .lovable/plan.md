

## Link Capability Statement to Uploaded PDF

### What Changes

Copy the uploaded PDF to `public/linexo-capability-statement.pdf` so the existing "View Statement" and "Download PDF" buttons work with the real document. The code already references this path -- only the file needs to be added.

### Steps

1. **Copy the uploaded PDF** from `user-uploads://LINEXO_Capability_Statement.pdf` to `public/linexo-capability-statement.pdf`

### Files Changed
- `public/linexo-capability-statement.pdf` -- new file (the uploaded PDF)
- No code changes needed -- the buttons in `Index.tsx` already point to `/linexo-capability-statement.pdf`

