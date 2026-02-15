import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    quote: "LinExo transformed our linen operations. The turnaround is incredible and the quality is consistently outstanding.",
    name: "Sarah Mitchell",
    role: "Operations Manager",
    company: "Goldfields Hotel Group",
    rating: 5,
  },
  {
    quote: "Reliable, professional, and always on time. They handle our surge periods without breaking a sweat.",
    name: "James Cooper",
    role: "Site Manager",
    company: "Boulder Mining Co",
    rating: 5,
  },
  {
    quote: "The heat-sealed packaging is a game-changer for hygiene compliance. Wouldn't go anywhere else.",
    name: "Lisa Nguyen",
    role: "Head of Housekeeping",
    company: "Kalgoorlie Resorts",
    rating: 5,
  },
];

const TestimonialCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[current];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-secondary/30">
      <span className="watermark-text left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">REVIEWS</span>
      <div className="container relative z-10">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary font-sans">Testimonials</p>
          <h2 className="text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">What Our Clients Say</h2>
        </div>

        <div className="mx-auto max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="glass rounded-3xl p-8 md:p-12 text-center"
            >
              <Quote className="mx-auto mb-6 h-10 w-10 text-primary/30" />
              <p className="mb-8 text-lg font-medium italic text-foreground leading-relaxed md:text-xl">
                "{t.quote}"
              </p>
              <div className="mb-4 flex justify-center gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-base font-semibold text-foreground">{t.name}</p>
              <p className="text-sm text-muted-foreground">
                {t.role}, {t.company}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === current ? "w-8 bg-primary" : "w-2.5 bg-primary/30"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
