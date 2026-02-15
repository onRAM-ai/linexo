import { motion } from "framer-motion";
import { Truck, Bath, Layers, Package, ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { delay: i * 0.1, duration: 0.7, ease: "easeOut" as const },
  }),
};

const processSteps = [
  { icon: Truck, label: "Collect", desc: "Scheduled pickup from your premises" },
  { icon: Bath, label: "Wash", desc: "Commercial-grade laundering" },
  { icon: Layers, label: "Finish", desc: "Ironed, folded & pressed" },
  { icon: Package, label: "Pack", desc: "Heat-sealed hygienic packaging" },
  { icon: ArrowRight, label: "Deliver", desc: "On-time return to your door" },
];

const ProcessSection = () => (
  <section className="relative py-24 md:py-32 overflow-hidden">
    <span className="watermark-text left-[5%] top-1/2 -translate-y-1/2">PROCESS</span>
    <div className="container relative z-10">
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary font-sans">Our Process</p>
        <h2 className="text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">How It Works</h2>
      </div>
      <div className="relative mx-auto max-w-4xl">
        <div className="absolute top-8 left-[10%] right-[10%] hidden h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 md:block" />
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.label} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              whileHover={{ scale: 1.08, transition: { duration: 0.3 } }}
              className="group flex flex-col items-center text-center"
            >
              <div className="relative z-10 mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-shadow duration-300 group-hover:shadow-[0_0_30px_hsl(207_55%_53%/0.5)]">
                <step.icon className="h-6 w-6" />
                <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-accent-foreground text-xs font-bold">
                  {i + 1}
                </span>
              </div>
              <h3 className="mb-1 text-base font-bold text-foreground">{step.label}</h3>
              <p className="text-xs text-muted-foreground">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ProcessSection;
