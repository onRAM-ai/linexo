import { motion } from "framer-motion";
import { ShieldCheck, Layers, TrendingUp, MapPin, Zap, Users } from "lucide-react";
import Layout from "@/components/Layout";

const values = [
  { icon: ShieldCheck, title: "Reliability", desc: "On-time, every time. We understand that your operations depend on consistent linen supply." },
  { icon: Layers, title: "Hygiene", desc: "Commercial-grade laundering processes that meet the highest health and safety benchmarks." },
  { icon: TrendingUp, title: "Scalability", desc: "Purpose-built facility designed to handle volume surges without compromising quality." },
  { icon: MapPin, title: "Local Ownership", desc: "Goldfields-owned and operated — we're invested in the success of our community." },
];

const serviceAreas = [
  "Kalgoorlie-Boulder", "Coolgardie", "Kambalda", "Leonora", "Laverton", "Surrounding communities",
];

const timeline = [
  { year: "Foundation", title: "Born in the Goldfields", desc: "LinExo was established to fill a critical gap — bringing capital-city laundry standards to regional WA without the long lead times." },
  { year: "Growth", title: "Purpose-Built Facility", desc: "We invested in a state-of-the-art commercial laundry facility in the heart of the Goldfields, capable of processing thousands of items daily." },
  { year: "Today", title: "50+ Clients & Growing", desc: "Serving accommodation, hospitality, and mining sectors across the entire Goldfields region with reliability and scale." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: (i: number) => ({ opacity: 1, y: 0, scale: 1, transition: { delay: i * 0.1, duration: 0.7, ease: "easeOut" as const } }),
};

const About = () => (
  <Layout>
    {/* Hero */}
    <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary py-28 md:py-36 overflow-hidden">
      <span className="watermark-text left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">ABOUT</span>
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-20 top-10 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute -left-20 bottom-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      </div>
      <div className="container relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary font-sans">Who We Are</p>
          <h1 className="mb-4 text-4xl font-extrabold text-foreground md:text-5xl lg:text-6xl">About <span className="text-primary">LIN</span><span className="text-accent">EXO</span></h1>
          <p className="text-lg text-muted-foreground">
            Proudly Goldfields-owned, purpose-built to deliver premium linen and laundry services across Western Australia's resource and hospitality heartland.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Timeline Story */}
    <section className="py-24 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary font-sans">Our Story</p>
          <h2 className="mb-12 text-4xl font-bold text-foreground md:text-5xl">Born in the Goldfields</h2>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent md:left-1/2 md:-translate-x-px" />
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className={`relative mb-12 last:mb-0 flex flex-col gap-4 pl-16 md:w-1/2 ${
                  i % 2 === 0
                    ? "md:pr-12 md:pl-0 md:text-right"
                    : "md:ml-auto md:pl-12"
                }`}
              >
                {/* Dot */}
                <div className={`absolute top-1 left-4 h-5 w-5 rounded-full border-4 border-primary bg-background md:left-auto ${
                  i % 2 === 0 ? "md:-right-[10px]" : "md:-left-[10px]"
                }`} />
                <span className="text-sm font-bold uppercase tracking-wider text-primary">{item.year}</span>
                <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Capacity Callout */}
    <section className="section-dark relative py-24 md:py-32 overflow-hidden">
      <span className="watermark-text left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">CAPACITY</span>
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <Zap className="mx-auto mb-6 h-12 w-12 text-primary" />
          <h3 className="mb-4 text-4xl font-bold md:text-5xl">Built for Surge Capacity</h3>
          <p className="text-lg leading-relaxed opacity-70">
            Our facility is engineered to process <span className="font-bold opacity-100">5,000+ pieces daily</span>, with the flexibility to scale during peak periods like roster changeovers, seasonal surges, and emergency processing requests — without compromising quality or turnaround time.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Team placeholder */}
    <section className="py-24 md:py-32 bg-secondary/20">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary font-sans">Our Team</p>
          <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">The People Behind LinExo</h2>
          <p className="mb-10 text-muted-foreground">A dedicated team of professionals committed to quality and reliability.</p>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { name: "Founder & Director", role: "Operations & Strategy" },
              { name: "Operations Manager", role: "Facility & Logistics" },
              { name: "Quality Lead", role: "Standards & Compliance" },
            ].map((member, i) => (
              <motion.div
                key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-base font-semibold text-foreground">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Service Area */}
    <section className="py-24 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 flex items-center justify-center gap-2 text-primary">
            <MapPin className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-[0.2em] font-sans">Service Area</span>
          </div>
          <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">Covering the Goldfields Region</h2>
          <p className="mb-8 text-muted-foreground">
            We service the entire Western Australian Goldfields, with scheduled pickup and delivery across the region.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {serviceAreas.map((area, i) => (
              <motion.span
                key={area} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="rounded-full border border-border bg-background px-5 py-2 text-sm font-medium text-foreground shadow-sm transition-all duration-200 hover:border-primary/30 hover:shadow-md"
              >
                {area}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="relative bg-primary py-24 md:py-32 overflow-hidden">
      <span className="watermark-text left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" style={{ color: 'hsla(0,0%,100%,0.05)' }}>VALUES</span>
      <div className="container relative z-10">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground/60 font-sans">Our Promise</p>
          <h2 className="mb-4 text-4xl font-bold text-primary-foreground md:text-5xl">Our Values</h2>
          <p className="text-primary-foreground/70">The principles that guide every linen we press and every delivery we make.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <motion.div
              key={v.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              whileHover={{ scale: 1.02, y: -4, transition: { duration: 0.3 } }}
              className="group rounded-2xl bg-primary-foreground/10 p-6 text-center backdrop-blur-sm transition-colors duration-300 hover:bg-primary-foreground/15"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-foreground/15 text-primary-foreground transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]">
                <v.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-primary-foreground">{v.title}</h3>
              <p className="text-sm text-primary-foreground/70">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Mission */}
    <section className="py-24 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary font-sans">Our Mission</p>
          <h2 className="mb-6 text-4xl font-bold text-foreground md:text-5xl">What Drives Us</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            To be the Goldfields' most trusted linen and laundry partner — delivering consistent quality,
            reliability, and hygiene to every accommodation, hospitality, and industrial client we serve.
            We exist to make one less thing for our clients to worry about.
          </p>
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
