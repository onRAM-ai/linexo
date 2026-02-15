

## Convert "What We Do" Section to Light Color Scheme

The dark navy "What We Do / Our Services" section (lines 154-192 in `src/pages/Index.tsx`) will be converted to a light theme that matches the rest of the page.

### Changes

**`src/pages/Index.tsx`**

1. **Section wrapper (line 155)**: Remove `section-dark` class, replace with a light background like `bg-secondary/50` or `bg-gradient-to-b from-background to-secondary/30`
2. **Background blobs (lines 159-160)**: Keep as-is -- `bg-primary/5` already works on light backgrounds
3. **Heading text (line 164)**: No change needed -- `text-primary` works on light
4. **Section title (line 165)**: Remove inherited dark styling; it will naturally use `text-foreground` from the light context
5. **Service cards (line 178-181)**: Update card background from the translucent dark style to a proper light card: `bg-card` with `border-border/20` and a subtle shadow
6. **Card text (lines 186-187)**: Change `text-background` to `text-foreground` and `text-background/60` to `text-muted-foreground`

**`src/components/HeroSection.tsx`**

7. **Bottom wave fill (line ~235)**: Change from the deep navy `fill="hsl(207 30% 18%)"` back to match the new light section background (e.g., `fill-secondary/50` or remove entirely for a clean transition)

**`src/index.css`**

8. No changes needed -- the `.section-dark` utility stays for other potential uses

### Result

The services section becomes a clean, light card grid on a soft blue-tinted background, with the wave from the hero flowing naturally into it. The stat band below continues to float over the transition as before.

