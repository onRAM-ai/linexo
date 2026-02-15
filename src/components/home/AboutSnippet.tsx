import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutSnippet = () => (
  <section className="py-24 md:py-32">
    <div className="container">
      <div className="mx-auto max-w-5xl">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30, scale: 0.97 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -left-4 -top-4 h-24 w-24 rounded-2xl bg-primary/10" />
            <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-2xl bg-accent/10" />
            <div className="relative rounded-2xl border border-border bg-card p-8 shadow-lg">
              <Quote className="mb-4 h-10 w-10 text-primary/30" />
              <p className="text-lg font-medium italic text-foreground leading-relaxed">
                "Purpose-built in the heart of the Goldfields to deliver reliable, high-quality linen and laundry services."
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-px flex-1 bg-border" />
                <div className="flex items-center gap-2 text-primary">
                  <MapPin className="h-4 w-4" />
                  <span className="text-xs font-semibold uppercase tracking-wider font-sans">Kalgoorlie-Boulder, WA</span>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.97 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-4 flex items-center gap-2 text-primary">
              <MapPin className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-[0.2em] font-sans">Locally Owned & Operated</span>
            </div>
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              Born in the Goldfields, Built for the Goldfields
            </h2>
            <p className="mb-6 text-muted-foreground leading-relaxed">
              <span className="text-primary">LIN</span><span className="text-accent">EXO</span> is a proudly Western Australian business, purpose-built in the heart of the Goldfields
              to deliver reliable, high-quality linen and laundry services to the region's accommodation,
              hospitality, and industrial sectors.
            </p>
            <Button asChild variant="outline" size="lg">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSnippet;
