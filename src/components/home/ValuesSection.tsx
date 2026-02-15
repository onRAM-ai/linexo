import { motion } from "framer-motion";
import { ShieldCheck, Layers, TrendingUp } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { delay: i * 0.1, duration: 0.7, ease: "easeOut" as const },
  }),
};

const values = [
  { icon: ShieldCheck, title: "Reliability", desc: "Consistent turnaround you can count on, every single time." },
  { icon: Layers, title: "Hygiene Standards", desc: "Commercial-grade processes meeting the highest hygiene benchmarks." },
  { icon: TrendingUp, title: "Scalable Capacity", desc: "Purpose-built to handle surges — from 50 to 5,000 pieces daily." },
];

const ValuesSection = () => (
  <section className="relative py-24 md:py-32 bg-secondary/30 overflow-hidden">
    <span className="watermark-text right-[5%] top-1/2 -translate-y-1/2">VALUES</span>
    <div className="container relative z-10">
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary font-sans">Our Promise</p>
        <h2 className="text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">Why <span className="text-primary">LIN</span><span className="text-accent">EXO</span>?</h2>
      </div>
      <div className="mx-auto max-w-2xl">
        {values.map((v, i) => (
          <motion.div
            key={v.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="relative flex gap-6 pb-12 last:pb-0"
          >
            {i < values.length - 1 && (
              <div className="absolute left-7 top-16 h-full w-0.5 bg-gradient-to-b from-primary/30 to-transparent" />
            )}
            <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg">
              <v.icon className="h-6 w-6" />
            </div>
            <div className="pt-2">
              <h3 className="mb-1 text-xl font-bold text-foreground">{v.title}</h3>
              <p className="text-muted-foreground">{v.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ValuesSection;
