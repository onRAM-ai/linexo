

## Add Full Logo Above Hero Title

Place the uploaded LinExo logo image above the "Goldfields' Premier Linen & Laundry Specialists" heading in the hero section.

---

### Steps

1. **Copy the uploaded logo** into `src/assets/linexo-logo-full.png`

2. **Update `src/components/HeroSection.tsx`**:
   - Add an optional `logo` prop (`string | undefined`) to the `HeroSectionProps` interface
   - Render an `img` tag above the `h1` title when the `logo` prop is provided, wrapped in a `motion.div` with the existing `itemVariants` for consistent entrance animation
   - Size it to roughly `max-w-[280px]` on desktop, smaller on mobile (`max-w-[200px]`)

3. **Update `src/pages/Index.tsx`**:
   - Import the new logo asset: `import linexoLogoFull from "@/assets/linexo-logo-full.png"`
   - Pass `logo={linexoLogoFull}` to the `HeroSection` component

