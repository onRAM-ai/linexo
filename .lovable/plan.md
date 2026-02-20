
## Swap Hero Image Positions

The hero collage in `src/pages/Index.tsx` passes images as an ordered array to `HeroSection`. The positions are fixed by index:

- `images[0]` → top-left, large (currently the aerial/town photo — `heroImg1`)
- `images[1]` → right-center (currently the industrial laundry — `heroImg2`)
- `images[2]` → bottom-center (currently the LinExo truck — `heroImg3`)

The user wants to swap `images[0]` and `images[2]`, putting the truck at top-left and the aerial photo at bottom-center.

### Change in `src/pages/Index.tsx` — Line 227

```tsx
// Before
images={[heroImg1, heroImg2, heroImg3]}

// After
images={[heroImg3, heroImg2, heroImg1]}
```

That's the only change needed — a single line edit.
