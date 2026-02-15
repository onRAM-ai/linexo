import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import BrandName from "@/components/BrandName";

const serviceAreas = ["Kalgoorlie-Boulder", "Coolgardie", "Kambalda", "Leonora", "Laverton"];

const Footer = () => (
  <footer className="relative bg-foreground text-primary-foreground">
    {/* Wave divider */}
    <div className="absolute -top-[1px] left-0 right-0 overflow-hidden leading-[0]">
      <svg
        className="relative block w-full h-10 md:h-14"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,60 C200,100 400,20 600,60 C800,100 1000,30 1200,50 L1200,0 L0,0 Z"
          className="fill-background"
        />
      </svg>
    </div>

    {/* Newsletter */}
    <div className="container pt-20 pb-8">
      <div className="mx-auto max-w-xl text-center">
        <h3 className="mb-2 text-lg font-semibold text-primary-foreground">Stay in the Loop</h3>
        <p className="mb-4 text-sm text-primary-foreground/60">Get updates on services, capacity, and Goldfields industry news.</p>
        <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
          <Input
            type="email"
            placeholder="your@email.com"
            className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40"
          />
          <Button type="submit" size="default" className="shrink-0">Subscribe</Button>
        </form>
      </div>
    </div>

    <div className="container pb-12">
      <div className="mb-10 h-px bg-primary-foreground/10" />
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
        {/* Brand */}
        <div className="space-y-4 lg:col-span-2">
          <Link to="/" className="text-xl font-bold">
            <BrandName />
          </Link>
          <p className="text-sm text-primary-foreground/70">
            Goldfields' premier commercial laundry and linen-hire specialist.
          </p>
          <p className="text-xs font-medium uppercase tracking-wider text-primary/80">
            Western Australian Goldfields owned and operated
          </p>
          {/* Social Icons */}
          <div className="flex gap-3 pt-2">
            {[Facebook, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-foreground/10 text-primary-foreground/60 transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">Quick Links</h4>
          <nav className="flex flex-col gap-2">
            {[
              { label: "Home", to: "/" },
              { label: "About", to: "/about" },
              { label: "Services", to: "/services" },
              { label: "Contact", to: "/contact" },
            ].map((link) => (
              <Link key={link.to} to={link.to} className="text-sm text-primary-foreground/70 transition-colors hover:text-primary">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Service Area */}
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">Service Area</h4>
          <ul className="flex flex-col gap-2">
            {serviceAreas.map((area) => (
              <li key={area} className="text-sm text-primary-foreground/70">{area}</li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">Contact</h4>
          <div className="flex flex-col gap-3 text-sm text-primary-foreground/70">
            <span className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> (08) 9000 0000</span>
            <span className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> info@linexo.com.au</span>
            <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> Kalgoorlie-Boulder, WA</span>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-primary-foreground/10 pt-6 text-center text-xs text-primary-foreground/50">
        <p>© {new Date().getFullYear()} <BrandName />. All rights reserved.</p>
        <p className="mt-1">ABN: 00 000 000 000 · Registered in Western Australia</p>
      </div>
    </div>
  </footer>
);

export default Footer;
