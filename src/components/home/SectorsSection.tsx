import { motion } from "framer-motion";
import { Hotel, UtensilsCrossed, Pickaxe } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { delay: i * 0.1, duration: 0.7, ease: "easeOut" as const },
  }),
};

const sectors = [
  { icon: Hotel, title: "Accommodation", desc: "Hotels, serviced apartments, and short-stay providers — premium linen hire with reliable turnaround.", bg: "bg-primary", text: "text-primary-foreground" },
  { icon: UtensilsCrossed, title: "Hospitality", desc: "Restaurants, pubs, and event venues — tablecloths, napkins, and service textiles laundered to standard.", bg: "bg-accent", text: "text-accent-foreground" },
  { icon: Pickaxe, title: "Industrial & Mining", desc: "Mining camps and industrial sites — heavy-duty workwear, PPE, and overalls with surge capacity.", bg: "bg-foreground", text: "text-background" },
];

const SectorsSection = () => (
  <section className="relative py-24 md:py-32 overflow-hidden">
    <span className="watermark-text left-1/2 top-8 -translate-x-1/2">SECTORS</span>
    <div className="container relative z-10">
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary font-sans">Industries</p>
        <h2 className="text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">Sectors We Serve</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {sectors.map((s, i) => (
          <motion.div
            key={s.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            whileHover={{ scale: 1.02, y: -4, transition: { duration: 0.3 } }}
            className={`group relative overflow-hidden rounded-2xl ${s.bg} ${s.text} p-10 shadow-lg transition-shadow duration-300 hover:shadow-2xl min-h-[280px] flex flex-col justify-end`}
          >
            <div className="relative z-10">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-background/15">
                <s.icon className="h-7 w-7" />
              </div>
              <h3 className="mb-3 text-2xl font-bold">{s.title}</h3>
              <p className="text-sm opacity-80 leading-relaxed">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SectorsSection;
