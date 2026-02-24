

## Fix Mobile Navigation Scroll Offset

### Problem
When tapping nav links on mobile, `scrollIntoView` scrolls the target section flush to the top of the viewport -- but the sticky navbar (64px tall) covers the actual heading. This makes "Services" appear to land on the first card tile instead of the "Problems We Solve" heading, and "Capability Statement" appears to land on the footer because the section is short and gets pushed under the navbar.

Desktop has larger section padding which partially masks the issue, but on mobile the smaller padding makes it very obvious.

### Solution
Add `scroll-margin-top` to all scrollable target sections so the browser leaves room for the sticky header. This is a CSS-only fix -- no JavaScript changes needed.

### Changes

**1. `src/index.css`** -- Add a global rule for scroll targets

Add a CSS rule that applies `scroll-margin-top: 5rem` (80px, slightly more than the 64px navbar to give breathing room) to all sections with IDs used by navigation:

```css
#services,
#about,
#capability,
#contact {
  scroll-margin-top: 5rem;
}
```

This is the cleanest approach -- no changes to any component files, no mobile-only media queries needed (it improves desktop too), and it works with the existing `scrollIntoView` calls in Navbar, Footer, and Index.

### Why not a JS fix?
Using `scroll-margin-top` is the browser-native, CSS-standard way to handle this. It works with all three `scrollIntoView` call sites without modifying any of them, and it's more reliable than manual offset calculations.

