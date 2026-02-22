

## Make "Capability Statement" a Dropdown Under "About"

### What Changes

Instead of "About" and "Capability Statement" being two separate nav links, the "About" button will have a small dropdown arrow. Clicking "About" itself still scrolls to the about section, but hovering (desktop) or tapping the arrow reveals a dropdown with "Capability Statement" as a sub-option.

### Desktop Behavior
- "About" shows a chevron icon indicating a dropdown
- Hovering over "About" opens a small dropdown menu
- Clicking "About" text scrolls to the about section
- The dropdown contains "Capability Statement" which scrolls to that section
- Dropdown has a solid background (not transparent) with proper z-index

### Mobile Behavior
- "About" shows with an expand arrow
- Tapping it reveals "Capability Statement" as an indented sub-item beneath it
- Both items scroll to their respective sections and close the menu

### Technical Approach

Use the existing `DropdownMenu` component from `@radix-ui/react-dropdown-menu` (already installed) for the desktop dropdown. For mobile, use a simple collapsible pattern with state.

### Steps

1. **`src/components/Navbar.tsx`**:
   - Remove "Capability Statement" from the flat `navLinks` array
   - Import `ChevronDown` from lucide-react
   - Import `DropdownMenu`, `DropdownMenuTrigger`, `DropdownMenuContent`, `DropdownMenuItem` from the existing UI components
   - Replace the simple "About" button in desktop nav with a dropdown: the trigger shows "About" with a chevron, clicking the text scrolls to about, and the dropdown item "Capability Statement" scrolls to capability
   - In mobile nav, add a collapsible sub-item under "About" for "Capability Statement"

### Files Changed
- `src/components/Navbar.tsx` -- restructure About link to include Capability Statement dropdown

