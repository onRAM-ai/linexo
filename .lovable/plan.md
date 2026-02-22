

## Add Capability Statement to Navigation Bar

### What Changes

Add a new nav link in `src/components/Navbar.tsx` that smooth-scrolls to the capability statement section. We also need to add an `id` to the capability statement section in `src/pages/Index.tsx` so the scroll target works.

### Steps

1. **`src/components/Navbar.tsx`** -- Add a new entry to the `navLinks` array:
   ```
   { label: "Capability Statement", target: "capability" }
   ```
   Placed after "About" and before "Contact".

2. **`src/pages/Index.tsx`** -- Add `id="capability"` to the capability statement `<section>` element so smooth-scroll can find it.

### Files Changed
- `src/components/Navbar.tsx` -- add nav link
- `src/pages/Index.tsx` -- add section id

