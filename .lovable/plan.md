

## Update Hero-to-Services Wave Overlay to Blue

The bottom wave in `src/components/HeroSection.tsx` (line ~234) currently uses `fill="hsl(207 30% 93%)"` -- a very light, almost white-gray. It should be a visible light blue to create a smooth branded transition into the "Our Services" section.

### Change

**`src/components/HeroSection.tsx` (line 234)**

Update the bottom wave fill from `hsl(207 30% 93%)` to a light blue that matches the top of the services section gradient (`secondary/30`). The CSS `--secondary` is `207 30% 95%`, so at 30% opacity it's very subtle. A better visible blue would be something like `hsl(207 45% 88%)` -- a soft sky blue that bridges the hero gradient into the services section.

Additionally, the two decorative wave layers above it (lines 218 and 226) use `fill-primary/8` which is barely visible. These can be bumped to `fill-primary/12` and `fill-primary/15` to reinforce the blue transition effect.

### Result

The wave overlay between the hero and services section becomes a visible soft blue gradient instead of near-white, creating a smooth branded transition.

