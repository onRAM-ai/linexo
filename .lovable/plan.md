

## Fix Footer Copyright Section

### Problem
The copyright line at the bottom of the footer uses the `BrandName` component, which renders a logo image. This causes the copyright text to break into separate lines with the logo appearing disconnected (as shown in the red-highlighted area of the screenshot).

### Solution
Replace the `BrandName` component in the copyright line with plain text "LinExo" so it renders inline as a single clean line: "© 2026 LinExo. All rights reserved."

### Changes

**`src/components/Footer.tsx`** (line 84):
- Change `© {new Date().getFullYear()} <BrandName />. All rights reserved.` to `© {new Date().getFullYear()} LinExo. All rights reserved.`
- This keeps the copyright integrated within the footer's dark background section rather than appearing as a separate block with a misaligned logo.

