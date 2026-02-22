import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import BrandName from "@/components/BrandName";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  { label: "Home", target: "top" },
  { label: "Services", target: "services" },
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
  const [aboutExpanded, setAboutExpanded] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/20 bg-background/70 backdrop-blur-xl supports-[backdrop-filter]:bg-background/50">
      <div className="container flex h-16 items-center justify-between">
        <button onClick={() => scrollTo("top")} className="flex items-center text-xl font-bold">
          <BrandName />
        </button>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) =>
            link.target === "services" ? (
              <span key={link.target} className="flex items-center">
                <button
                  onClick={() => scrollTo(link.target)}
                  className="rounded-md px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </button>
              </span>
            ) : (
              <button
                key={link.target}
                onClick={() => scrollTo(link.target)}
                className="rounded-md px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </button>
            )
          )}

          {/* About with dropdown */}
          <DropdownMenu>
            <div className="flex items-center">
              <button
                onClick={() => scrollTo("about")}
                className="rounded-md px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                About
              </button>
              <DropdownMenuTrigger asChild>
                <button className="-ml-2 rounded-md p-1 text-muted-foreground transition-colors hover:text-primary">
                  <ChevronDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
            </div>
            <DropdownMenuContent align="start" className="bg-background border border-border shadow-lg z-[60]">
              <DropdownMenuItem onClick={() => scrollTo("capability")} className="cursor-pointer">
                Capability Statement
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

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
            <button
              onClick={() => { scrollTo("top"); setOpen(false); }}
              className="rounded-md px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary text-left"
            >
              Home
            </button>
            <button
              onClick={() => { scrollTo("services"); setOpen(false); }}
              className="rounded-md px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary text-left"
            >
              Services
            </button>

            {/* About with collapsible sub-item */}
            <button
              onClick={() => setAboutExpanded(!aboutExpanded)}
              className="flex items-center justify-between rounded-md px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary text-left"
            >
              About
              <ChevronDown className={`h-4 w-4 transition-transform ${aboutExpanded ? "rotate-180" : ""}`} />
            </button>
            {aboutExpanded && (
              <>
                <button
                  onClick={() => { scrollTo("about"); setOpen(false); setAboutExpanded(false); }}
                  className="rounded-md px-8 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary text-left"
                >
                  About Us
                </button>
                <button
                  onClick={() => { scrollTo("capability"); setOpen(false); setAboutExpanded(false); }}
                  className="rounded-md px-8 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary text-left"
                >
                  Capability Statement
                </button>
              </>
            )}

            <button
              onClick={() => { scrollTo("contact"); setOpen(false); }}
              className="rounded-md px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary text-left"
            >
              Contact
            </button>
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
