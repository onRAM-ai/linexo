import { useEffect, useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "LinExo transformed our linen operations. Turnaround times dropped and our guests consistently comment on the quality of our bedding.",
    name: "Sarah Mitchell",
    role: "Operations Manager",
    company: "Goldfields Hotel Group",
  },
  {
    quote: "Reliable, consistent, and always on time. We scaled from 200 to 2,000 pieces daily and LinExo handled it without missing a beat.",
    name: "James Carter",
    role: "Site Manager",
    company: "Boulder Mining Co",
  },
  {
    quote: "The heat-sealed packaging is a game-changer for hygiene compliance. Our auditors love it and so do our guests.",
    name: "Priya Sharma",
    role: "General Manager",
    company: "Kalgoorlie Resorts",
  },
  {
    quote: "We tried three other providers before LinExo. Nobody else in the Goldfields comes close to their service and reliability.",
    name: "Tom O'Brien",
    role: "Owner",
    company: "Outback Hospitality",
  },
];

const TestimonialsCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();

    // Auto-play
    const interval = setInterval(() => {
      if (emblaApi.canScrollNext()) emblaApi.scrollNext();
      else emblaApi.scrollTo(0);
    }, 5000);

    return () => {
      clearInterval(interval);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-secondary/30">
      <span className="watermark-text left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        TRUST
      </span>
      <div className="container relative z-10">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary font-sans">
            Testimonials
          </p>
          <h2 className="text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            What Our Clients Say
          </h2>
        </div>

        <div className="mx-auto max-w-4xl" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="min-w-0 flex-[0_0_100%] px-4 md:flex-[0_0_80%] md:px-8"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="rounded-2xl border border-border/50 bg-card p-8 md:p-10 shadow-lg"
                >
                  <Quote className="mb-4 h-10 w-10 text-primary/20" />
                  <p className="mb-6 text-lg leading-relaxed text-foreground md:text-xl italic">
                    "{t.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-lg">
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{t.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {t.role}, {t.company}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Dot indicators */}
        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === selectedIndex
                  ? "w-8 bg-primary"
                  : "w-2.5 bg-primary/20 hover:bg-primary/40"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
