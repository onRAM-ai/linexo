import { motion } from "framer-motion";
import { Bed, Layers, Bath, HardHat, Package, Truck } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { delay: i * 0.1, duration: 0.7, ease: "easeOut" as const },
  }),
};

const services = [
  { icon: Bed, title: "Hotel Linen Hire", desc: "Premium sheets, pillowcases, and duvet covers for accommodation providers." },
  { icon: Layers, title: "Flatwork Finishing", desc: "Professionally pressed and folded flat linens ready for service." },
  { icon: Bath, title: "Towels & Hospitality", desc: "Towels, bathmats, and hospitality textiles laundered to exacting standards." },
  { icon: HardHat, title: "Industrial Workwear", desc: "PPE and heavy-duty garment laundering for mining and industrial clients." },
  { icon: Package, title: "Heat-Sealed Packaging", desc: "Continuous heat-sealed bag packaging for hygienic linen delivery." },
  { icon: Truck, title: "Scheduled Delivery", desc: "Reliable pickup and delivery across the Goldfields region." },
];

const ServicesSection = () => (
  <section className="section-dark relative py-24 md:py-32 overflow-hidden">
    <span className="watermark-text left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">LINEN</span>
    <div className="container relative z-10">
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary font-sans">What We Do</p>
        <h2 className="text-4xl font-bold md:text-5xl lg:text-6xl">Our Services</h2>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <motion.div
            key={s.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            className="group relative rounded-2xl border border-border/10 bg-background/5 p-7 backdrop-blur-sm transition-colors duration-300 hover:bg-background/10"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-transform duration-300 group-hover:scale-110">
              <s.icon className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-background">{s.title}</h3>
            <p className="text-sm text-background/60 leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
