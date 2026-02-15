import { Link, useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {
  Bed, Layers, Bath, HardHat, Package, Truck, ShieldCheck, TrendingUp, MapPin, Building2, Clock,
  ArrowRight, Hotel, UtensilsCrossed, Pickaxe, Quote,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import AnimatedCounter from "@/components/AnimatedCounter";
import SectionDivider from "@/components/SectionDivider";
import heroImg1 from "@/assets/hero-laundry-1.jpg";
import heroImg2 from "@/assets/hero-laundry-2.jpg";
import heroImg3 from "@/assets/hero-laundry-3.jpg";
import React, { useRef } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

/* Cinematic entrance variants */
const fadeUp = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: (i: number) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { delay: i * 0.08, duration: 0.8, ease: EASE },
  }),
};

const fadeLeft = {
  hidden: { opacity: 0, x: -50, scale: 0.97 },
  visible: {
    opacity: 1, x: 0, scale: 1,
    transition: { duration: 0.8, ease: EASE },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 50, scale: 0.97 },
  visible: {
    opacity: 1, x: 0, scale: 1,
    transition: { duration: 0.8, ease: EASE },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1, scale: 1,
    transition: { delay: i * 0.1, duration: 0.7, ease: EASE },
  }),
};

const services = [
  { icon: Bed, title: "Hotel Linen Hire", desc: "Premium sheets, pillowcases, and duvet covers for accommodation providers.", span: "md:col-span-2 md:row-span-1" },
  { icon: Layers, title: "Flatwork Finishing", desc: "Professionally pressed and folded flat linens ready for service.", span: "" },
  { icon: Bath, title: "Towels & Hospitality", desc: "Towels, bathmats, and hospitality textiles laundered to exacting standards.", span: "" },
  { icon: HardHat, title: "Industrial Workwear", desc: "PPE and heavy-duty garment laundering for mining and industrial clients.", span: "md:col-span-2 md:row-span-1" },
  { icon: Package, title: "Heat-Sealed Packaging", desc: "Continuous heat-sealed bag packaging for hygienic linen delivery.", span: "" },
  { icon: Truck, title: "Scheduled Delivery", desc: "Reliable pickup and delivery across the Goldfields region.", span: "" },
];

const values = [
  { icon: ShieldCheck, title: "Reliability", desc: "Consistent turnaround you can count on, every single time." },
  { icon: Layers, title: "Hygiene Standards", desc: "Commercial-grade processes meeting the highest hygiene benchmarks." },
  { icon: TrendingUp, title: "Scalable Capacity", desc: "Purpose-built to handle surges — from 50 to 5,000 pieces daily." },
];

const processSteps = [
  { icon: Truck, label: "Collect", desc: "Scheduled pickup from your premises" },
  { icon: Bath, label: "Wash", desc: "Commercial-grade laundering" },
  { icon: Layers, label: "Finish", desc: "Ironed, folded & pressed" },
  { icon: Package, label: "Pack", desc: "Heat-sealed hygienic packaging" },
  { icon: ArrowRight, label: "Deliver", desc: "On-time return to your door" },
];

const sectors = [
  { icon: Hotel, title: "Accommodation", desc: "Hotels, serviced apartments, and short-stay providers — premium linen hire with reliable turnaround.", bg: "bg-primary", text: "text-primary-foreground" },
  { icon: UtensilsCrossed, title: "Hospitality", desc: "Restaurants, pubs, and event venues — tablecloths, napkins, and service textiles laundered to standard.", bg: "bg-accent", text: "text-accent-foreground" },
  { icon: Pickaxe, title: "Industrial & Mining", desc: "Mining camps and industrial sites — heavy-duty workwear, PPE, and overalls with surge capacity.", bg: "bg-foreground", text: "text-background" },
];

const clientLogos = [
  "Goldfields Hotel Group", "Kalgoorlie Resorts", "Boulder Mining Co",
  "Outback Hospitality", "Pilbara Camps", "WA Resources",
];

const statBandItems = [
  { value: 5000, suffix: "+", label: "Pieces Daily" },
  { value: 50, suffix: "+", label: "Clients Served" },
  { value: 24, suffix: "hr", label: "Turnaround" },
  { value: 100, suffix: "%", label: "Hygiene Compliance" },
];

/** Zigzag process step with animated connecting path */
const ProcessStep = ({ step, index }: { step: typeof processSteps[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      className={`group flex flex-col items-center text-center ${
        index % 2 === 1 ? "md:mt-16" : ""
      }`}
    >
      <div className="relative z-10 mb-4 flex h-18 w-18 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all duration-500 group-hover:shadow-[0_0_40px_hsl(207_55%_53%/0.4)] group-hover:scale-110">
        <step.icon className="h-7 w-7" />
        <span className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-accent text-accent-foreground text-xs font-bold shadow-md">
          {index + 1}
        </span>
      </div>
      <h3 className="mb-1 text-base font-bold text-foreground">{step.label}</h3>
      <p className="text-xs text-muted-foreground max-w-[120px]">{step.desc}</p>
    </motion.div>
  );
};

const Index = () => {
  const navigate = useNavigate();
  const processRef = useRef<HTMLDivElement>(null);
  const processInView = useInView(processRef, { once: true, margin: "-100px" });

  return (
    <Layout>
      {/* Hero */}
      <HeroSection
        title={
          <>
            Goldfields' Premier{" "}
            <span className="text-accent">Linen & Laundry</span> Specialists
          </>
        }
        subtitle="End-to-end linen supply, laundering, finishing, packing, and scheduled delivery — purpose-built for accommodation, hospitality, and industrial clients."
        actions={[
          { text: "Get In Touch", onClick: () => navigate("/contact") },
          { text: "Our Services", onClick: () => navigate("/services"), variant: "outline" as const },
        ]}
        stats={[
          { value: "5,000+", label: "Pieces Daily", icon: <Layers className="h-5 w-5" /> },
          { value: "50+", label: "Clients Served", icon: <Building2 className="h-5 w-5" /> },
          { value: "24hr", label: "Turnaround", icon: <Clock className="h-5 w-5" /> },
        ]}
        images={[heroImg1, heroImg2, heroImg3]}
      />

      {/* ═══ Services — DARK section with staggered grid ═══ */}
      <section className="section-dark relative py-24 md:py-32 overflow-hidden">
        <span className="watermark-text left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">LINEN</span>
        {/* Organic background blobs */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl animate-blob" />
          <div className="absolute -left-20 bottom-10 h-80 w-80 rounded-full bg-accent/5 blur-3xl animate-blob-reverse" />
        </div>
        <div className="container relative z-10">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary font-sans">What We Do</p>
            <h2 className="text-4xl font-bold md:text-5xl lg:text-6xl">Our Services</h2>
          </div>
          {/* Staggered masonry-style grid */}
          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-4">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={scaleIn}
                whileHover={{ scale: 1.03, y: -4, transition: { duration: 0.3 } }}
                className={`group relative rounded-2xl border border-border/10 p-7 backdrop-blur-sm transition-all duration-300 hover-glow ${s.span}`}
                style={{
                  background: "linear-gradient(135deg, hsl(var(--background) / 0.06), hsl(var(--background) / 0.1))",
                }}
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/20">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-background">{s.title}</h3>
                <p className="text-sm text-background/60 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Floating Glass Stat Band ═══ */}
      <div className="relative z-20 -mt-12 mb-8 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE }}
          className="glass-strong mx-auto max-w-5xl rounded-3xl px-8 py-10 md:py-12"
        >
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {statBandItems.map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="relative text-center"
              >
                {/* Subtle radial glow behind each stat */}
                <div className="pointer-events-none absolute inset-0 glow-primary rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="text-4xl font-bold text-primary md:text-5xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-2 text-sm font-medium text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ═══ How It Works — Zigzag Process Path ═══ */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <span className="watermark-text left-[5%] top-1/2 -translate-y-1/2">PROCESS</span>
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-10 top-20 h-72 w-72 rounded-full bg-primary/4 blur-3xl animate-blob" />
        </div>
        <div className="container relative z-10">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary font-sans">Our Process</p>
            <h2 className="text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">How It Works</h2>
          </div>
          <div ref={processRef} className="relative mx-auto max-w-5xl">
            {/* Animated connecting SVG path */}
            <svg
              className="absolute top-10 left-0 w-full h-24 hidden md:block pointer-events-none"
              viewBox="0 0 1000 100"
              preserveAspectRatio="none"
              fill="none"
            >
              <path
                d="M 50 30 C 200 30, 200 70, 300 70 C 400 70, 400 30, 500 30 C 600 30, 600 70, 700 70 C 800 70, 800 30, 950 30"
                stroke="hsl(207 55% 53% / 0.3)"
                strokeWidth="2"
                strokeDasharray="8 4"
                className={processInView ? "animate-draw-path" : ""}
                style={{ strokeDasharray: 1200, strokeDashoffset: processInView ? 0 : 1200, transition: "stroke-dashoffset 2s ease-out" }}
              />
            </svg>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
              {processSteps.map((step, i) => (
                <ProcessStep key={step.label} step={step} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Divider ═══ */}
      <SectionDivider variant="organic" from="fill-background" />

      {/* ═══ Why LinExo — Staggered Left/Right Cards ═══ */}
      <section className="relative py-24 md:py-32 bg-secondary/30 overflow-hidden">
        <span className="watermark-text right-[5%] top-1/2 -translate-y-1/2">VALUES</span>
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/3 top-10 h-80 w-80 rounded-full bg-accent/4 blur-3xl animate-blob-reverse" />
        </div>
        <div className="container relative z-10">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary font-sans">Our Promise</p>
            <h2 className="text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">Why <span className="text-primary">LIN</span><span className="text-accent">EXO</span>?</h2>
          </div>
          <div className="mx-auto max-w-3xl space-y-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={i % 2 === 0 ? fadeLeft : fadeRight}
                className={`flex gap-6 items-start ${i % 2 === 1 ? "md:flex-row-reverse md:text-right" : ""}`}
              >
                <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg">
                  <v.icon className="h-7 w-7" />
                </div>
                <div className="glass-strong rounded-2xl p-6 flex-1">
                  <h3 className="mb-2 text-xl font-bold text-foreground">{v.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Divider ═══ */}
      <SectionDivider variant="wave" from="fill-secondary/30" flip />

      {/* ═══ Sectors — Overlapping Cards with Parallax Tilt ═══ */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <span className="watermark-text left-1/2 top-8 -translate-x-1/2">SECTORS</span>
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 top-1/3 h-96 w-96 rounded-full bg-primary/3 blur-3xl animate-blob" />
          <div className="absolute -right-20 bottom-1/4 h-80 w-80 rounded-full bg-accent/4 blur-3xl animate-blob-reverse" />
        </div>
        <div className="container relative z-10">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary font-sans">Industries</p>
            <h2 className="text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">Sectors We Serve</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3 md:-space-x-3">
            {sectors.map((s, i) => (
              <motion.div
                key={s.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={scaleIn}
                whileHover={{
                  scale: 1.04,
                  y: -8,
                  rotateY: i === 0 ? 2 : i === 2 ? -2 : 0,
                  transition: { duration: 0.4, ease: EASE },
                }}
                className={`group relative overflow-hidden rounded-2xl ${s.bg} ${s.text} p-10 shadow-xl transition-shadow duration-500 hover:shadow-2xl min-h-[300px] flex flex-col justify-end ${
                  i === 1 ? "md:-mt-4 md:z-10" : ""
                }`}
                style={{ perspective: "1000px" }}
              >
                {/* Large rotated watermark label */}
                <span className="absolute -right-4 top-1/2 -translate-y-1/2 rotate-90 text-[5rem] font-black uppercase opacity-[0.08] leading-none whitespace-nowrap pointer-events-none select-none" style={{ fontFamily: "'Poppins', system-ui, sans-serif" }}>
                  {s.title}
                </span>
                <div className="relative z-10">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-background/15 transition-transform duration-300 group-hover:scale-110">
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

      {/* ═══ Client Logos Marquee ═══ */}
      <section className="py-16 overflow-hidden bg-secondary/30">
        <div className="container">
          <div className="mb-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-border" />
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground font-sans">
              Trusted Across the Goldfields
            </p>
            <div className="h-px flex-1 bg-border" />
          </div>
        </div>
        <div className="relative">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-secondary/30 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-secondary/30 to-transparent" />
          <div className="animate-marquee flex w-max gap-8">
            {[...clientLogos, ...clientLogos].map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="glass-strong flex h-20 shrink-0 items-center rounded-xl px-10 text-sm font-semibold text-muted-foreground"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ About Snippet — Asymmetric 40/60 ═══ */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Flowing gradient shape connecting to CTA */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-b from-transparent via-primary/3 to-primary/8" />
        <div className="container relative z-10">
          <div className="mx-auto max-w-6xl">
            <div className="grid items-center gap-12 md:grid-cols-5">
              {/* 40% quote card */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeLeft}
                className="relative md:col-span-2"
              >
                <div className="absolute -left-4 -top-4 h-24 w-24 rounded-2xl bg-primary/10 animate-blob" />
                <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-2xl bg-accent/10 animate-blob-reverse" />
                <div className="glass-strong relative rounded-2xl p-8 shadow-xl md:-mr-8 md:z-10">
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
              {/* 60% content */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeRight}
                className="md:col-span-3"
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

      {/* ═══ CTA Banner — Immersive Full-Width ═══ */}
      <section className="relative overflow-hidden">
        {/* Top wave divider */}
        <div className="absolute -top-1 left-0 right-0 overflow-hidden leading-[0] rotate-180 z-10">
          <svg className="relative block w-full h-12 md:h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,60 C200,100 400,20 600,60 C800,100 1000,30 1200,50 L1200,120 L0,120 Z" className="fill-background" />
          </svg>
        </div>
        <div className="bg-gradient-to-br from-primary via-primary to-primary/90 py-24 md:py-28">
          {/* Floating accent shapes */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -right-20 top-10 h-64 w-64 rounded-full bg-accent/10 blur-3xl animate-blob" />
            <div className="absolute -left-20 bottom-10 h-80 w-80 rounded-full bg-background/5 blur-3xl animate-blob-reverse" />
          </div>
          <div className="container text-center relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: EASE }}
              className="mb-4 text-4xl font-bold text-primary-foreground md:text-5xl lg:text-6xl"
            >
              Ready to Streamline Your Linen Supply?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.8, ease: EASE }}
              className="mb-8 text-lg text-primary-foreground/80"
            >
              Get in touch today for a tailored solution that fits your business.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <Button asChild size="lg" variant="secondary" className="text-base font-semibold">
                <Link to="/contact">Contact Us Today</Link>
              </Button>
            </motion.div>
          </div>
        </div>
        {/* Bottom wave divider */}
        <div className="absolute -bottom-1 left-0 right-0 overflow-hidden leading-[0] z-10">
          <svg className="relative block w-full h-12 md:h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,40 C150,80 350,0 500,40 C650,80 800,10 1000,50 C1100,70 1150,30 1200,40 L1200,120 L0,120 Z" className="fill-foreground" />
          </svg>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
