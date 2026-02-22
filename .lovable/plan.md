

## Replace "Proven Contract Experience" with "Trusted by the Goldfields" Logo Carousel

### What Changes

The current section shows 3 text tiles listing contract credentials. It will be replaced with a horizontally scrolling logo carousel showcasing customer logos.

### Assets to Add

Copy the 4 uploaded logos into `src/assets/`:
- `client-logo-1.png` (blue circle logo - image-23)
- `client-logo-mcd.png` (MCD Group - image-24)
- `client-logo-toyota.png` (Toyota - image-25)
- `client-logo-az.png` (A-Z Panel & Paint - image-26)

### Implementation

**1. Remove the `contractCredentials` array** from `src/pages/Index.tsx` (lines 111-115) since it's no longer needed.

**2. Replace the section content** (lines 472-498):
- Change heading text from "Proven Contract Experience" to "Trusted by the Goldfields"
- Remove the 3-column grid of text tiles
- Add an auto-scrolling infinite logo carousel using CSS animation (no JS library needed)
- Logos displayed in a horizontal strip that continuously scrolls left, with duplicated items to create seamless looping
- Each logo rendered as a grayscale image with hover-to-color effect for a polished look
- Logos sized consistently (e.g., max-height ~60px) with `object-contain` to handle different aspect ratios

**3. Add CSS keyframes** in `src/index.css` for the infinite scroll animation:
```css
@keyframes scroll-logos {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
```

The carousel will auto-scroll continuously. The logo strip is duplicated so when the first set scrolls off-screen, the second set seamlessly takes over, creating an infinite loop effect.

### Files Changed
- `src/assets/` -- 4 new logo files copied from uploads
- `src/index.css` -- add scroll animation keyframe
- `src/pages/Index.tsx` -- replace contract credentials section with logo carousel

