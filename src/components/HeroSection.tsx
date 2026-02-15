import { motion } from "framer-motion";
import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";
import AnimatedCounter from "./AnimatedCounter";
import { ChevronDown, Award } from "lucide-react";

interface StatProps {
  value: string;
  label: string;
  icon: React.ReactNode;
}

interface ActionProps {
  text: string;
  href?: string;
  onClick?: () => void;
  variant?: ButtonProps["variant"];
  className?: string;
}

interface HeroSectionProps {
  title: React.ReactNode;
  subtitle: string;
  actions: ActionProps[];
  stats: StatProps[];
  images: string[];
  className?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

const floatingVariants = {
  animate: {
    y: [0, -12, 0],
    transition: { duration: 5, repeat: Infinity, ease: "easeInOut" as const },
  },
};

const WaveDivider = () => (
  <div className="absolute -bottom-1 left-0 right-0 overflow-hidden leading-[0]">
    <svg
      className="animate-wave-drift-slow relative block w-[calc(100%+50px)] -ml-[25px] h-16 md:h-24"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
    >
      <path
        d="M0,40 C150,80 350,0 500,40 C650,80 800,10 1000,50 C1100,70 1150,30 1200,40 L1200,120 L0,120 Z"
        className="fill-accent/10"
      />
    </svg>
    <svg
      className="animate-wave-drift absolute bottom-0 left-0 block w-[calc(100%+50px)] -ml-[25px] h-14 md:h-20"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
    >
      <path
        d="M0,60 C200,20 400,90 600,50 C800,10 1000,70 1200,40 L1200,120 L0,120 Z"
        className="fill-primary/8"
      />
    </svg>
    <svg
      className="absolute bottom-0 left-0 block w-full h-10 md:h-14"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
    >
      <path
        d="M0,80 C300,40 600,100 900,60 C1050,40 1150,70 1200,60 L1200,120 L0,120 Z"
        className="fill-background"
      />
    </svg>
  </div>
);

function parseStatValue(value: string) {
  const match = value.match(/^([^\d]*)(\d[\d,]*)(.*)$/);
  if (!match) return { prefix: "", num: 0, suffix: value };
  return {
    prefix: match[1],
    num: parseInt(match[2].replace(/,/g, ""), 10),
    suffix: match[3],
  };
}

const HeroSection = ({ title, subtitle, actions, stats, images, className }: HeroSectionProps) => {
  return (
    <section className={cn("relative overflow-hidden bg-gradient-to-b from-primary/5 via-primary/8 to-primary/12 pb-32 pt-28 md:pb-40 md:pt-36", className)}>
      {/* Soft organic background shapes */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-20 top-10 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute -left-20 bottom-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute left-1/2 top-1/4 h-64 w-64 -translate-x-1/2 rounded-full bg-accent/3 blur-3xl" />
      </div>

      <motion.div
        className="container relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Column */}
          <div className="flex flex-col gap-7">
            <motion.h1
              variants={itemVariants}
              className="text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl xl:text-7xl"
            >
              {title}
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="max-w-lg text-lg font-light leading-relaxed text-muted-foreground md:text-xl"
            >
              {subtitle}
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              {actions.map((action, index) => (
                <Button
                  key={index}
                  variant={action.variant || "default"}
                  size="lg"
                  onClick={action.onClick}
                  className={cn("text-base btn-premium", action.className)}
                  asChild={!!action.href}
                >
                  {action.href ? <a href={action.href}>{action.text}</a> : action.text}
                </Button>
              ))}
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="mt-2 flex flex-wrap items-center gap-8"
            >
              {stats.map((stat, index) => {
                const parsed = parseStatValue(stat.value);
                return (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      {stat.icon}
                    </div>
                    <div>
                      <p className="text-lg font-bold text-foreground">
                        <AnimatedCounter value={parsed.num} prefix={parsed.prefix} suffix={parsed.suffix} />
                      </p>
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Right Column: Image Collage */}
          <motion.div
            variants={itemVariants}
            className="relative hidden min-h-[420px] lg:block"
          >
            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="absolute -right-6 -top-6 h-72 w-72 rounded-full bg-primary/5 blur-3xl"
            />
            <motion.div
              variants={floatingVariants}
              animate="animate"
              style={{ animationDelay: "1.5s" }}
              className="absolute -bottom-6 -left-6 h-72 w-72 rounded-full bg-accent/5 blur-3xl"
            />
            <div className="absolute right-6 top-6 h-28 w-28 rounded-2xl border border-primary/15 bg-primary/5" />

            {images[0] && (
              <motion.div
                variants={imageVariants}
                className="absolute left-0 top-0 w-3/5 overflow-hidden rounded-2xl shadow-xl ring-1 ring-primary/10"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent z-10" />
                <img src={images[0]} alt="Premium linen service" className="h-full w-full object-cover" />
              </motion.div>
            )}
            {images[1] && (
              <motion.div
                variants={imageVariants}
                className="absolute right-0 top-16 w-2/5 overflow-hidden rounded-2xl shadow-xl ring-1 ring-primary/10"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent z-10" />
                <img src={images[1]} alt="Laundry facility" className="h-full w-full object-cover" />
              </motion.div>
            )}
            {images[2] && (
              <motion.div
                variants={imageVariants}
                className="absolute bottom-0 left-1/4 w-1/2 overflow-hidden rounded-2xl shadow-xl ring-1 ring-primary/10"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent z-10" />
                <img src={images[2]} alt="Quality linens" className="h-full w-full object-cover" />
              </motion.div>
            )}

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="absolute -left-4 bottom-12 z-20 glass rounded-2xl px-5 py-3 shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">Trusted by 50+</p>
                  <p className="text-xs text-muted-foreground">Goldfields clients</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-20 left-1/2 z-10 -translate-x-1/2 md:bottom-28"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-6 w-6 text-muted-foreground/50" />
        </motion.div>
      </motion.div>

      <WaveDivider />
    </section>
  );
};

export default HeroSection;
