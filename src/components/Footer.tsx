import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import BrandName from "@/components/BrandName";

const serviceAreas = ["Kalgoorlie-Boulder", "Coolgardie", "Kambalda", "Leonora", "Laverton"];

const Footer = () => (
  <footer className="relative bg-foreground text-primary-foreground">
    {/* Multi-layer organic wave divider */}
    <div className="absolute -top-[1px] left-0 right-0 overflow-hidden leading-[0]">
      <svg
        className="animate-wave-drift-slow relative block w-[calc(100%+50px)] -ml-[25px] h-14 md:h-20"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,60 C200,100 400,20 600,60 C800,100 1000,30 1200,50 L1200,0 L0,0 Z"
          fill="hsl(207 55% 53%)"
          opacity="0.15"
        />
      </svg>
      <svg
        className="animate-wave-drift absolute top-0 left-0 block w-[calc(100%+50px)] -ml-[25px] h-12 md:h-16"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,40 C150,80 350,0 500,40 C650,80 800,10 1000,50 C1100,70 1150,30 1200,40 L1200,0 L0,0 Z"
          fill="hsl(90 50% 50%)"
          opacity="0.06"
        />
      </svg>
    </div>
    <div className="container py-12 pt-24">
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
              <a key={i} href="#" className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-foreground/10 text-primary-foreground/60 transition-colors hover:bg-primary hover:text-primary-foreground">
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
        © {new Date().getFullYear()} <BrandName />. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
