import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Bed, Layers, Bath, HardHat, Package, Truck, ShieldCheck, TrendingUp, MapPin, Building2, Clock,
  ArrowRight, Hotel, UtensilsCrossed, Pickaxe, Quote,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import AnimatedCounter from "@/components/AnimatedCounter";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import heroImg1 from "@/assets/hero-laundry-1.jpg";
import heroImg2 from "@/assets/hero-laundry-2.jpg";
import heroImg3 from "@/assets/hero-laundry-3.jpg";

/* Tier1-inspired: slower, scale-in entrance */
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

const Index = () => {
  const navigate = useNavigate();

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

    {/* Services — DARK color-block section */}
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

    {/* Stat Band */}
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

    {/* How It Works */}
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

    {/* Why LinExo — Timeline */}
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

    {/* Sectors — Color-Blocked Cards (Tier1 style) */}
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

    {/* Testimonials */}
    <TestimonialsCarousel />

    {/* Client Logos Marquee */}
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
              className="glass flex h-20 shrink-0 items-center rounded-xl px-10 text-sm font-semibold text-muted-foreground"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* About Snippet — Two Column */}
    <section className="py-24 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-5xl">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30, scale: 0.97 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="absolute -left-4 -top-4 h-24 w-24 rounded-2xl bg-primary/10" />
              <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-2xl bg-accent/10" />
              <div className="relative rounded-2xl border border-border bg-card p-8 shadow-lg">
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
            <motion.div
              initial={{ opacity: 0, x: 30, scale: 0.97 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
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

    {/* CTA Banner */}
    <section className="relative bg-primary py-20 overflow-hidden">
      <div className="absolute -top-1 left-0 right-0 overflow-hidden leading-[0] rotate-180">
        <svg className="relative block w-full h-10 md:h-14" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,80 C300,40 600,100 900,60 C1050,40 1150,70 1200,60 L1200,120 L0,120 Z" className="fill-background" />
        </svg>
      </div>
      <div className="container text-center relative z-10">
        <h2 className="mb-4 text-4xl font-bold text-primary-foreground md:text-5xl lg:text-6xl">
          Ready to Streamline Your Linen Supply?
        </h2>
        <p className="mb-8 text-lg text-primary-foreground/80">
          Get in touch today for a tailored solution that fits your business.
        </p>
        <Button asChild size="lg" variant="secondary" className="text-base font-semibold">
          <Link to="/contact">Contact Us Today</Link>
        </Button>
      </div>
    </section>
  </Layout>
  );
};

export default Index;
