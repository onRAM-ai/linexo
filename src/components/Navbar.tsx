import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import BrandName from "@/components/BrandName";

const navLinks = [
  { label: "Services", to: "#services" },
  { label: "About", to: "#about" },
  { label: "Contact", to: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/20 bg-background/70 backdrop-blur-xl supports-[backdrop-filter]:bg-background/50">
      <div className="container flex h-16 items-center justify-between">
        <a href="#" className="flex items-center text-xl font-bold" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <BrandName />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.to}
              href={link.to}
              className="rounded-md px-4 py-2 text-sm font-medium transition-colors text-muted-foreground hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <Button asChild size="sm" className="ml-4">
            <a href="#contact">Get In Touch</a>
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
              <a
                key={link.to}
                href={link.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-4 py-3 text-sm font-medium transition-colors hover:bg-secondary text-foreground"
              >
                {link.label}
              </a>
            ))}
            <Button asChild className="mt-2">
              <a href="#contact" onClick={() => setOpen(false)}>Get In Touch</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
