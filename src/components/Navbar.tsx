import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import BrandName from "@/components/BrandName";

const navLinks = [
  { label: "Home", target: "top" },
  { label: "Services", target: "services" },
  { label: "About", target: "about" },
  { label: "Capability Statement", target: "capability" },
  { label: "Contact", target: "contact" },
];

const scrollTo = (target: string) => {
  if (target === "top") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
  }
};

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/20 bg-background/70 backdrop-blur-xl supports-[backdrop-filter]:bg-background/50">
      <div className="container flex h-16 items-center justify-between">
        <button onClick={() => scrollTo("top")} className="flex items-center text-xl font-bold">
          <BrandName />
        </button>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.target}
              onClick={() => scrollTo(link.target)}
              className="rounded-md px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </button>
          ))}
          <Button size="sm" className="ml-4" onClick={() => scrollTo("contact")}>
            Get In Touch
          </Button>
        </nav>

        {/* Mobile toggle */}
        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="border-t bg-background md:hidden">
          <nav className="container flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <button
                key={link.target}
                onClick={() => { scrollTo(link.target); setOpen(false); }}
                className="rounded-md px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary text-left"
              >
                {link.label}
              </button>
            ))}
            <Button className="mt-2" onClick={() => { scrollTo("contact"); setOpen(false); }}>
              Get In Touch
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
