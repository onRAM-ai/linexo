

## Remove Section Label Headers

Remove the small uppercase label text that appears above each section's main heading. These are the blue "WHAT WE SOLVE", "OUR PROCESS", "OUR PROMISE", and "INDUSTRIES" labels.

### Changes in `src/pages/Index.tsx`

Remove the following 4 lines (the `<p>` tags with uppercase tracking labels):

| Line | Text to Remove |
|------|---------------|
| 240 | `What We Solve` |
| 360 | `Our Process` |
| 400 | `Our Promise` |
| 438 | `Industries` |

Each section will keep its main `<h2>` heading (e.g., "Problems We Solve", "How It Works", "Why LinExo?", "Sectors We Serve") and any subtitle text below it. Only the small blue uppercase labels above them will be removed.

