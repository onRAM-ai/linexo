
## Fix Hero-to-Services Wave Overlay

The bottom-most wave in the HeroSection currently uses `fill-foreground` (dark navy), which was correct when the Services section below was `section-dark`. Now that Services uses `bg-primary/5` (soft blue tint), the wave color is wrong -- it creates a harsh dark band as shown in the screenshot.

### Change

**`src/components/HeroSection.tsx` (line 235)**

Update the bottom wave fill from `fill-foreground` to `fill-primary/5` so it blends seamlessly into the Services section's `bg-primary/5` background.

The two upper wave layers already use `fill-primary/8` which will create a nice layered effect: `primary/8` -> `primary/8` -> `primary/5`, all flowing into the `bg-primary/5` Services section below.

One line change total.
