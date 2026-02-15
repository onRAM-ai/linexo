import { motion } from "framer-motion";
import AnimatedCounter from "@/components/AnimatedCounter";

const fadeUp = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { delay: i * 0.1, duration: 0.7, ease: "easeOut" as const },
  }),
};

const statBandItems = [
  { value: 5000, suffix: "+", label: "Pieces Daily" },
  { value: 50, suffix: "+", label: "Clients Served" },
  { value: 24, suffix: "hr", label: "Turnaround" },
  { value: 100, suffix: "%", label: "Hygiene Compliance" },
];

const StatBand = () => (
  <section className="relative bg-primary py-16 overflow-hidden">
    <div className="container relative z-10">
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
        {statBandItems.map((stat, i) => (
          <motion.div
            key={stat.label} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center"
          >
            <div className="text-4xl font-bold text-primary-foreground md:text-5xl">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </div>
            <p className="mt-2 text-sm font-medium text-primary-foreground/70">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StatBand;
