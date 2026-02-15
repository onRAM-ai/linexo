import { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import BrandName from "@/components/BrandName";

const serviceAreas = ["Kalgoorlie-Boulder", "Coolgardie", "Kambalda", "Leonora", "Laverton"];

const Footer = () => {
  const [email, setEmail] = useState("");

  return (
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
      <div className="container py-12 pt-20">
        {/* Newsletter */}
        <div className="mb-12 rounded-2xl bg-primary-foreground/5 p-8 md:p-10">
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
            <h3 className="text-xl font-bold text-primary-foreground md:text-2xl">Stay in the Loop</h3>
            <p className="text-sm text-primary-foreground/60">Get updates on our services and industry insights.</p>
            <form
              onSubmit={(e) => { e.preventDefault(); setEmail(""); }}
              className="flex w-full max-w-md gap-2"
            >
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-primary-foreground/10 border-primary-foreground/15 text-primary-foreground placeholder:text-primary-foreground/40"
              />
              <Button type="submit" size="icon" className="shrink-0">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>

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
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-foreground/10 text-primary-foreground/60 transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:-translate-y-0.5"
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
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-primary-foreground/70 transition-all duration-200 hover:text-primary hover:translate-x-1"
                >
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
              <span className="flex items-center gap-2 transition-colors duration-200 hover:text-primary-foreground">
                <Phone className="h-4 w-4 text-primary" /> (08) 9000 0000
              </span>
              <span className="flex items-center gap-2 transition-colors duration-200 hover:text-primary-foreground">
                <Mail className="h-4 w-4 text-primary" /> info@linexo.com.au
              </span>
              <span className="flex items-center gap-2 transition-colors duration-200 hover:text-primary-foreground">
                <MapPin className="h-4 w-4 text-primary" /> Kalgoorlie-Boulder, WA
              </span>
            </div>
          </div>
        </div>

        {/* Acknowledgment + Copyright */}
        <div className="mt-10 border-t border-primary-foreground/10 pt-6 space-y-3 text-center">
          <p className="text-xs text-primary-foreground/40 leading-relaxed max-w-2xl mx-auto">
            We acknowledge the Wongatha people as the traditional custodians of the land on which we operate,
            and pay our respects to Elders past, present, and emerging.
          </p>
          <p className="text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} <BrandName />. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
