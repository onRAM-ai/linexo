import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CTABanner = () => (
  <section className="relative bg-primary py-20 overflow-hidden">
    <div className="absolute -top-1 left-0 right-0 overflow-hidden leading-[0] rotate-180">
      <svg className="relative block w-full h-10 md:h-14" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,80 C300,40 600,100 900,60 C1050,40 1150,70 1200,60 L1200,120 L0,120 Z" className="fill-background" />
      </svg>
    </div>
    <div className="container text-center relative z-10">
      <h2 className="mb-4 text-4xl font-bold text-primary-foreground md:text-5xl lg:text-6xl">
        Ready to Streamline Your Linen Supply?
      </h2>
      <p className="mb-8 text-lg text-primary-foreground/80">
        Get in touch today for a tailored solution that fits your business.
      </p>
      <Button asChild size="lg" variant="secondary" className="text-base font-semibold">
        <Link to="/contact">Contact Us Today</Link>
      </Button>
    </div>
  </section>
);

export default CTABanner;
