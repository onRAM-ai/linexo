import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import {
  Bed, Layers, Bath, HardHat, Package, Truck, ShieldCheck, TrendingUp, MapPin, Building2, Clock,
  ArrowRight, Hotel, UtensilsCrossed, Pickaxe, Quote, Phone, Mail,
  AlertTriangle, CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import AnimatedCounter from "@/components/AnimatedCounter";
import SectionDivider from "@/components/SectionDivider";
import heroImg1 from "@/assets/hero-laundry-1.png";
import heroImg2 from "@/assets/hero-laundry-2.jpg";
import heroImg3 from "@/assets/hero-laundry-3.jpg";
import problemLinenImg from "@/assets/problem-linen.jpg";
import problemWorkwearImg from "@/assets/problem-workwear.jpg";
import problemHygieneImg from "@/assets/problem-hygiene.jpg";
import problemSurgeImg from "@/assets/problem-surge.jpg";
import React from "react";
import linexoLogoFull from "@/assets/linexo-logo-full.png";

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

  const problemSolutions = [
    {
      problem: "Late linen. Wrinkled sheets. Guests checking in — and you've got nothing ready.",
      solutionTitle: "Linen Hire & Delivery",
      solution: "Scheduled pickup and delivery. 24-48hr turnaround. Guest-ready every time.",
      image: problemLinenImg,
    },
    {
      problem: "Workwear comes back dirty. Or takes a week. Either way, you're exposed.",
      solutionTitle: "Industrial Workwear Processing",
      solution: "Commercial-grade cleaning for PPE and overalls. Express turnaround on demand.",
      image: problemWorkwearImg,
    },
    {
      problem: "One hygiene complaint could cost you the contract. Are you sure it's actually clean?",
      solutionTitle: "Hygienic Packaging",
      solution: "Commercially laundered in hygienic packaging. Audit-ready on arrival.",
      image: problemHygieneImg,
    },
    {
      problem: "Bookings surge. Your supplier can't keep up. Rooms sit empty.",
      solutionTitle: "Surge & Emergency Processing",
      solution: "Built to scale from 50 to 5,000+ pieces daily. Emergency processing when you need it.",
      image: problemSurgeImg,
    },
  ];

const values = [
  { icon: ShieldCheck, title: "Reliability", desc: "24–48 hour standard turnaround with express and priority processing available. You'll never be left waiting." },
  { icon: Layers, title: "Hygiene Standards", desc: "Commercial-grade processes meeting the highest hygiene benchmarks — proven through government contract compliance." },
  { icon: TrendingUp, title: "Scalable Capacity", desc: "Purpose-built to handle surges — from 50 to 5,000+ pieces daily, with emergency processing on demand." },
  { icon: Clock, title: "Contractual SLAs", desc: "Fixed service schedules and written Service Level Agreements, so you know exactly what you're getting and when." },
];

const processSteps = [
  { icon: Truck, label: "Collect or Drop Off", desc: "We collect from your site or accept drop-offs at our facility" },
  { icon: Bath, label: "Wash", desc: "Commercial-grade laundering" },
  { icon: Layers, label: "Finish", desc: "Quality checked & finished to spec" },
  { icon: Package, label: "Pack", desc: "Hygienic packaging" },
  { icon: ArrowRight, label: "Deliver or Pickup", desc: "Delivered to your site or ready for pickup at our facility" },
];

const sectors = [
  { icon: Pickaxe, title: "Industrial & Mining", desc: "Mining camps and industrial sites — heavy-duty workwear, PPE, and overalls with surge capacity.", bg: "bg-primary", text: "text-primary-foreground" },
  { icon: Hotel, title: "Accommodation", desc: "Hotels, serviced apartments, and short-stay providers — premium linen hire with reliable turnaround.", bg: "bg-primary/85", text: "text-primary-foreground" },
  { icon: UtensilsCrossed, title: "Hospitality", desc: "Restaurants, pubs, and event venues — tablecloths, napkins, and service textiles laundered to standard.", bg: "bg-primary/70", text: "text-primary-foreground" },
];

const contractCredentials = [
  "Trusted by WACHS — Kalgoorlie Regional Health Campus",
  "Government accommodation & work safety garment contracts",
  "120+ rooms serviced with highest-level hygiene compliance",
];

const serviceOptions = [
  "Hotel Linen Hire",
  "Flatwork Finishing",
  "Towels & Hospitality Textiles",
  "Industrial Workwear & PPE",
  "Hygienic Packaging",
  "Scheduled Pickup & Delivery",
  "Emergency Processing",
  "Other",
];

const testimonials = [
  {
    quote: "We stopped worrying about linen the day LinExo took over. Fixed schedule, consistent quality, no surprises — exactly what we needed.",
    name: "",
    role: "Operations Manager",
    company: "Goldfields Accommodation Provider",
  },
  {
    quote: "Our guests notice the difference. Every sheet pressed, every towel fresh — and we never have to chase a delivery.",
    name: "",
    role: "Hospitality Manager",
    company: "Regional Hotel",
  },
  {
    quote: "Managing PPE and workwear for 200+ crew across remote sites is no small task. LinExo's surge capacity and scheduled delivery changed everything for us.",
    name: "",
    role: "Camp Services Coordinator",
    company: "Mining & Resources",
  },
];

const statBandItems = [
  { value: 5000, suffix: "+", label: "Pieces Daily" },
  { value: 120, suffix: "+", label: "Rooms Serviced" },
  { value: 24, suffix: "hr", label: "Turnaround" },
];

const ProcessStep = ({ step, index }: { step: typeof processSteps[0]; index: number }) => {
  const ref = useRef(null);

  return (
    <motion.div
      ref={ref}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      className={`group flex flex-col items-center text-center ${
        index % 2 === 1 ? "md:mt-20" : ""
      }`}
    >
      {/* Number + icon container */}
      <div className="relative mb-5">
        {/* Step number */}
        <span className="absolute -top-3 -left-3 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold shadow-md">
          {index + 1}
        </span>
        {/* Glass card icon */}
        <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl border border-border/30 bg-card shadow-lg transition-all duration-500 group-hover:shadow-xl group-hover:shadow-primary/15 group-hover:-translate-y-1">
          <step.icon className="h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-110" />
        </div>
      </div>
      <h3 className="mb-1.5 text-sm font-bold uppercase tracking-wider text-foreground">{step.label}</h3>
      <p className="text-xs text-muted-foreground max-w-[140px] leading-relaxed">{step.desc}</p>
    </motion.div>
  );
};

const scrollTo = (target: string) => {
  document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
};

const Index = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const processInView = useInView(processRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <HeroSection
        logo={linexoLogoFull}
        title={
          <>
            Goldfields' Premier{" "}
            <span className="text-primary">Linen & Laundry</span> Specialists
          </>
        }
        subtitle="You shouldn't have to chase your linen supplier. We handle the pickup, laundering, finishing, packing, and delivery on a fixed schedule — so you can focus on running your business."
        actions={[
          { text: "Get In Touch", onClick: () => scrollTo("contact") },
          { text: "Our Services", onClick: () => scrollTo("services"), variant: "outline" as const },
        ]}
        stats={[
          { value: "5,000+", label: "Pieces Daily", icon: <Layers className="h-5 w-5" /> },
          { value: "120+", label: "Rooms Serviced", icon: <Building2 className="h-5 w-5" /> },
          { value: "24hr", label: "Turnaround", icon: <Clock className="h-5 w-5" /> },
        ]}
        images={[heroImg1, heroImg2, heroImg3]}
      />

      {/* ═══ Services — DARK section with staggered grid ═══ */}
      <section id="services" className="relative pt-8 md:pt-12 pb-24 md:pb-28 overflow-hidden bg-gradient-to-b from-secondary/30 to-secondary/50">
        
        {/* Organic background blobs */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl animate-blob" />
          <div className="absolute -left-20 bottom-10 h-80 w-80 rounded-full bg-primary/5 blur-3xl animate-blob-reverse" />
        </div>
        <div className="container relative z-10">
          <div className="mx-auto mb-8 max-w-2xl text-center">
            
            <div className="inline-block">
              <h2 className="text-4xl font-bold md:text-5xl lg:text-6xl text-foreground">Problems We Solve</h2>
              <div className="mt-3 h-1 w-full rounded-full bg-primary" />
            </div>
            <p className="mt-4 text-muted-foreground text-lg">Every service exists because we've seen what happens when it's done badly.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {problemSolutions.map((pair, i) => {
              const isHovered = hoveredCard === i;
              
              return (
                <motion.div
                  key={pair.solutionTitle}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer group"
                  onMouseEnter={() => setHoveredCard(i)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => setHoveredCard(prev => prev === i ? null : i)}
                >
                  {/* Background problem image */}
                  <img
                    src={pair.image}
                    alt={pair.solutionTitle}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  {/* Dark gradient over image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20" />

                  {/* Pain-point quote (visible by default, hidden on hover) */}
                  <motion.div
                    className="absolute inset-x-0 top-0 p-6 z-10"
                    initial={false}
                    animate={{ opacity: isHovered ? 0 : 1, y: isHovered ? -10 : 0 }}
                    transition={{ duration: 0.35, ease: EASE }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="h-4 w-4 text-yellow-400 shrink-0" />
                      <span className="text-xs font-bold uppercase tracking-[0.12em] text-primary-foreground/70">Pain Point</span>
                    </div>
                    <p className="text-primary-foreground text-sm md:text-base font-medium leading-relaxed italic">
                      "{pair.problem}"
                    </p>
                  </motion.div>

                  {/* Colored solution overlay panel */}
                  <motion.div
                    className="absolute inset-x-0 bottom-0 bg-primary p-6 flex flex-col justify-center z-20"
                    initial={false}
                    animate={{
                      height: isHovered ? '100%' : '30%',
                    }}
                    transition={{ duration: 0.45, ease: EASE }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <CheckCircle2 className="h-4 w-4 text-primary-foreground/80 shrink-0" />
                          <span className="text-xs font-bold uppercase tracking-[0.12em] text-primary-foreground/70">Solution</span>
                        </div>
                        <h3 className="text-lg font-bold text-primary-foreground leading-tight mb-2">{pair.solutionTitle}</h3>
                        <motion.p
                          className="text-primary-foreground/80 text-sm leading-relaxed"
                          initial={false}
                          animate={{ opacity: isHovered ? 1 : 0, height: isHovered ? 'auto' : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {pair.solution}
                        </motion.p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ Floating Glass Stat Band ═══ */}
      <div className="relative z-20 -mt-20 md:-mt-24 mb-4 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE }}
          className="glass-strong mx-auto max-w-5xl rounded-3xl px-8 py-10 md:py-12"
        >
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
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
      <section className="relative py-12 md:py-16 overflow-hidden">
        
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-10 top-20 h-72 w-72 rounded-full bg-primary/4 blur-3xl animate-blob" />
        </div>
        <div className="container relative z-10">
          <div className="mx-auto mb-8 max-w-2xl text-center">
            
            <div className="inline-block">
              <h2 className="text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">How It Works</h2>
              <div className="mt-3 h-1 w-full rounded-full bg-primary" />
            </div>
          </div>
          <div ref={processRef} className="relative mx-auto max-w-5xl">
            {/* Animated connecting SVG wave path */}
            <svg
              className="absolute top-14 left-0 w-full h-20 hidden md:block pointer-events-none z-0"
              viewBox="0 0 1000 80"
              preserveAspectRatio="none"
              fill="none"
            >
              <path
                d="M 50 25 C 175 25, 175 55, 300 55 C 425 55, 425 25, 500 25 C 575 25, 575 55, 700 55 C 825 55, 825 25, 950 25"
                stroke="hsl(207 55% 53% / 0.2)"
                strokeWidth="2"
                strokeDasharray="6 6"
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
      <section className="relative py-12 md:py-16 bg-secondary/30 overflow-hidden">
        
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/3 top-10 h-80 w-80 rounded-full bg-primary/4 blur-3xl animate-blob-reverse" />
        </div>
        <div className="container relative z-10">
          <div className="mx-auto mb-8 max-w-2xl text-center">
            
            <div className="inline-block">
              <h2 className="text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">Why <span className="text-primary">LIN</span><span className="text-accent">EXO</span>?</h2>
              <div className="mt-3 h-1 w-full rounded-full bg-primary" />
            </div>
          </div>
          <div className="mx-auto max-w-3xl space-y-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeLeft}
                className="flex gap-6 items-start"
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
      <section className="relative py-12 md:py-16 overflow-hidden">
        
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 top-1/3 h-96 w-96 rounded-full bg-primary/3 blur-3xl animate-blob" />
          <div className="absolute -right-20 bottom-1/4 h-80 w-80 rounded-full bg-primary/4 blur-3xl animate-blob-reverse" />
        </div>
        <div className="container relative z-10">
          <div className="mx-auto mb-8 max-w-2xl text-center">
            
            <div className="inline-block">
              <h2 className="text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">Sectors We Serve</h2>
              <div className="mt-3 h-1 w-full rounded-full bg-primary" />
            </div>
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
                className={`group relative overflow-hidden rounded-2xl ${s.bg} ${s.text} p-10 shadow-xl transition-shadow duration-500 hover:shadow-2xl min-h-[300px] flex flex-col justify-end`}
                style={{ perspective: "1000px" }}
              >
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

      {/* ═══ Proven Contract Experience Banner ═══ */}
      <section className="py-8 overflow-hidden bg-secondary/30">
        <div className="container">
          <div className="mb-10 flex items-center gap-4">
            <div className="h-px flex-1 bg-border" />
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground font-sans">
              Proven Contract Experience
            </p>
            <div className="h-px flex-1 bg-border" />
          </div>
          <div className="mx-auto max-w-4xl grid gap-5 sm:grid-cols-3">
            {contractCredentials.map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="glass-strong flex items-center justify-center rounded-2xl p-6 text-center text-sm font-semibold text-foreground leading-relaxed min-h-[100px]"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ About Snippet — Asymmetric 40/60 ═══ */}
      <section id="about" className="relative py-12 md:py-16 overflow-hidden">
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
                <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-2xl bg-primary/10 animate-blob-reverse" />
                <div className="glass-strong relative rounded-2xl p-8 shadow-xl md:-mr-8 md:z-10 min-h-[240px]">
                  <Quote className="mb-4 h-10 w-10 text-primary/30" />
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTestimonial}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.5, ease: EASE }}
                    >
                      <p className="text-lg font-medium italic text-foreground leading-relaxed">
                        "{testimonials[activeTestimonial].quote}"
                      </p>
                      <div className="mt-6 flex items-center gap-3">
                        <div className="h-px flex-1 bg-border" />
                        <div className="text-right">
                          {testimonials[activeTestimonial].name && <span className="block text-sm font-semibold text-foreground">{testimonials[activeTestimonial].name}</span>}
                          <span className="text-xs text-muted-foreground">{testimonials[activeTestimonial].role}, {testimonials[activeTestimonial].company}</span>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                  {/* Dots */}
                  <div className="mt-4 flex justify-center gap-2">
                    {testimonials.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveTestimonial(i)}
                        className={`h-2 rounded-full transition-all duration-300 ${i === activeTestimonial ? "w-6 bg-primary" : "w-2 bg-primary/30"}`}
                      />
                    ))}
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
                  hospitality, and industrial sectors. With proven government contract experience — including servicing
                  WACHS at Kalgoorlie Regional Health Campus — we bring the compliance, capacity, and consistency
                  that larger operations demand.
                </p>
                <Button variant="outline" size="lg" onClick={() => scrollTo("services")}>
                  Explore Our Services
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CTA with Inline Contact Form ═══ */}
      <section id="contact" className="relative overflow-hidden">
        {/* Top wave divider */}
        <div className="absolute -top-1 left-0 right-0 overflow-hidden leading-[0] rotate-180 z-10">
          <svg className="relative block w-full h-12 md:h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,60 C200,100 400,20 600,60 C800,100 1000,30 1200,50 L1200,120 L0,120 Z" className="fill-secondary/30" />
          </svg>
        </div>
        <div className="bg-gradient-to-br from-primary via-primary to-primary/90 py-12 md:py-16">
          {/* Floating accent shapes */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -right-20 top-10 h-64 w-64 rounded-full bg-primary-foreground/10 blur-3xl animate-blob" />
            <div className="absolute -left-20 bottom-10 h-80 w-80 rounded-full bg-background/5 blur-3xl animate-blob-reverse" />
          </div>
          <div className="container relative z-10">
            <div className="grid items-start gap-12 lg:grid-cols-5">
              {/* Left column — CTA text + contact details */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeLeft}
                className="lg:col-span-2"
              >
                <h2 className="mb-4 text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl">
                  What If Your Linen Just… Showed Up?
                </h2>
                <p className="mb-8 text-primary-foreground/80 leading-relaxed">
                  Fixed schedules. 24–48 hour turnaround. Express when you need it. Hygiene compliance handled. SLAs in writing. Tell us what you need and we'll put together a plan that actually works for your operation — no lock-in, no runaround.
                </p>
                <div className="space-y-4 text-primary-foreground/90">
                  <p className="flex items-center gap-3"><Phone className="h-5 w-5 text-primary-foreground/60" /> (08) 9000 0000</p>
                  <p className="flex items-center gap-3"><Mail className="h-5 w-5 text-primary-foreground/60" /> info@linexo.com.au</p>
                  <p className="flex items-center gap-3"><MapPin className="h-5 w-5 text-primary-foreground/60" /> Kalgoorlie-Boulder, WA</p>
                </div>
              </motion.div>

              {/* Right column — Glass contact form */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeRight}
                className="lg:col-span-3"
              >
                <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-lg p-6 md:p-8">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSubmitting(true);
                      setTimeout(() => {
                        setSubmitting(false);
                        toast({ title: "Message sent!", description: "We'll be in touch shortly." });
                        (e.target as HTMLFormElement).reset();
                      }, 1000);
                    }}
                    className="space-y-5"
                  >
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="cta-name" className="text-primary-foreground/90">Name</Label>
                        <Input id="cta-name" placeholder="Your name" required className="border-white/20 bg-white/15 text-primary-foreground placeholder:text-primary-foreground/50 focus-visible:ring-white/30" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cta-company" className="text-primary-foreground/90">Company</Label>
                        <Input id="cta-company" placeholder="Your company" className="border-white/20 bg-white/15 text-primary-foreground placeholder:text-primary-foreground/50 focus-visible:ring-white/30" />
                      </div>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="cta-email" className="text-primary-foreground/90">Email</Label>
                        <Input id="cta-email" type="email" placeholder="you@example.com" required className="border-white/20 bg-white/15 text-primary-foreground placeholder:text-primary-foreground/50 focus-visible:ring-white/30" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cta-phone" className="text-primary-foreground/90">Phone</Label>
                        <Input id="cta-phone" type="tel" placeholder="04XX XXX XXX" className="border-white/20 bg-white/15 text-primary-foreground placeholder:text-primary-foreground/50 focus-visible:ring-white/30" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label className="text-primary-foreground/90">Service Required</Label>
                      <Select>
                        <SelectTrigger className="border-white/20 bg-white/15 text-primary-foreground [&>svg]:text-primary-foreground/60">
                          <SelectValue placeholder="Select a service" className="placeholder:text-primary-foreground/50" />
                        </SelectTrigger>
                        <SelectContent>
                          {serviceOptions.map((s) => (
                            <SelectItem key={s} value={s}>{s}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cta-message" className="text-primary-foreground/90">Message</Label>
                      <Textarea id="cta-message" placeholder="Tell us about your requirements…" rows={4} required className="border-white/20 bg-white/15 text-primary-foreground placeholder:text-primary-foreground/50 focus-visible:ring-white/30" />
                    </div>
                    <Button type="submit" size="lg" variant="secondary" disabled={submitting} className="w-full sm:w-auto text-base font-semibold">
                      {submitting ? "Sending…" : "Send Message"}
                    </Button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        {/* Bottom wave divider */}
        <div className="absolute -bottom-1 left-0 right-0 overflow-hidden leading-[0] z-10">
          <svg className="animate-wave-drift-slow relative block w-[calc(100%+50px)] -ml-[25px] h-12 md:h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,60 C200,100 400,20 600,60 C800,100 1000,30 1200,50 L1200,120 L0,120 Z" fill="hsl(207 55% 53%)" opacity="0.15" />
          </svg>
          <svg className="animate-wave-drift absolute -bottom-0 left-0 block w-[calc(100%+50px)] -ml-[25px] h-12 md:h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,40 C150,80 350,0 500,40 C650,80 800,10 1000,50 C1100,70 1150,30 1200,40 L1200,120 L0,120 Z" className="fill-foreground" />
          </svg>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
