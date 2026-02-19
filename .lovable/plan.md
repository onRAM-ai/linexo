

## Remove "Heat-Sealed" References Across Codebase

All instances are in `src/pages/Index.tsx`. Three changes needed:

### Changes

| Line | Current | Updated |
|------|---------|---------|
| 78 | `"Hygienic Sealed Packaging"` | `"Hygienic Packaging"` |
| 79 | `"Commercially laundered and heat-sealed in packaging. Audit-ready on arrival."` | `"Commercially laundered in hygienic packaging. Audit-ready on arrival."` |
| 101 | `"Heat-sealed hygienic packaging"` | `"Hygienic packaging"` |
| 122 | `"Heat-Sealed Packaging"` | `"Hygienic Packaging"` |

No structural or component changes -- just text updates across four lines in one file.

