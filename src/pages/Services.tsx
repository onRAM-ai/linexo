import { motion } from "framer-motion";
import {
  Bed, Shirt, Layers, Bath, HardHat, Wrench, Package, Truck, Zap,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Layout from "@/components/Layout";

const services = [
  { icon: Bed, title: "Hotel & Serviced Apartment Linen Hire", desc: "Premium bed linen, pillowcases, and duvet covers supplied on a hire basis. We maintain, replace, and rotate stock so you never have to worry about linen management." },
  { icon: Shirt, title: "Wash, Dry, Iron, Fold & Pack", desc: "Full-cycle laundering — from receiving soiled linen through to quality-checked, folded, and packed items ready for immediate use." },
  { icon: Layers, title: "Flatwork Finishing", desc: "Industrial ironing and pressing for flat items including sheets, pillowcases, and duvet covers. Delivered crisp, wrinkle-free, and presentation-ready." },
  { icon: Bath, title: "Towels, Bathmats & Hospitality Textiles", desc: "Specialist laundering for towels, bathmats, face washers, and other hospitality textiles, maintaining softness and absorbency." },
  { icon: HardHat, title: "Industrial Workwear & PPE Laundering", desc: "Heavy-duty cleaning for hi-vis, PPE, and industrial workwear. Compliant with safety standards and designed for the mining and resources sector." },
  { icon: Wrench, title: "Overalls & Heavy-Duty Garment Processing", desc: "Specialised laundering for overalls, coveralls, and heavy-duty garments including stain treatment and repairs." },
  { icon: Package, title: "Continuous Heat-Sealed Bag Packaging", desc: "Hygienic heat-sealed packaging for processed linen, ensuring items remain contamination-free during transport and storage." },
  { icon: Truck, title: "Scheduled Pickup & Delivery", desc: "Reliable, scheduled collection and delivery across the Goldfields region. Flexible timetables tailored to your operational needs." },
  { icon: Zap, title: "Emergency & Surge Processing", desc: "Rapid-response capacity for unexpected volume spikes, event support, or emergency linen requirements — available on short notice." },
];

const faqs = [
  { q: "What areas do you service?", a: "We service the entire Goldfields region, including Kalgoorlie-Boulder, Coolgardie, Kambalda, Leonora, Laverton, and surrounding areas." },
  { q: "What is the typical turnaround time?", a: "Standard turnaround is 24–48 hours. We also offer same-day and emergency processing for urgent requirements." },
  { q: "Is there a minimum order quantity?", a: "We work with businesses of all sizes. Contact us to discuss a package that suits your volume." },
  { q: "What hygiene standards do you follow?", a: "We follow AS/NZS 4146:2000 laundry practice standards and maintain strict temperature, chemical, and quality controls throughout our process." },
  { q: "Can you handle seasonal or event-based surges?", a: "Absolutely. Our facility is purpose-built with surge capacity, and we offer flexible scheduling to accommodate peak periods." },
  { q: "Do you supply the linen or just launder it?", a: "Both. We offer full linen hire (supply + launder) as well as launder-only services for clients who own their own stock." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  visible: (i: number) => ({ opacity: 1, y: 0, scale: 1, transition: { delay: i * 0.08, duration: 0.7, ease: "easeOut" as const } }),
};

const Services = () => (
  <Layout>
    {/* Hero */}
    <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary py-24 md:py-32 overflow-hidden">
      
      <div className="container relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary font-sans">What We Offer</p>
          <h1 className="mb-4 text-4xl font-extrabold text-foreground md:text-5xl lg:text-6xl">Our Services</h1>
          <p className="text-lg text-muted-foreground">
            End-to-end linen and laundry solutions — from hire and laundering to finishing, packaging, and delivery.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Services list */}
    <section className="py-24 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-4xl space-y-8">
          {services.map((s, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={s.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                whileHover={{ scale: 1.01, transition: { duration: 0.3 } }}
                className={`group relative flex gap-6 rounded-2xl border border-border/50 bg-card p-8 overflow-hidden transition-all duration-300 hover:shadow-xl ${
                  isEven ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div className={`absolute top-0 h-full w-1 bg-primary scale-y-0 transition-transform duration-300 origin-bottom group-hover:scale-y-100 ${isEven ? "left-0" : "right-0"}`} />
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <s.icon className="h-7 w-7" />
                </div>
                <div className={isEven ? "" : "text-right"}>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section className="section-dark relative py-24 md:py-32 overflow-hidden">
      
      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-center text-sm font-semibold uppercase tracking-[0.2em] text-primary font-sans">Common Questions</p>
          <h2 className="mb-10 text-center text-4xl font-bold md:text-5xl">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="rounded-lg border border-border/20 bg-background/5 px-4 backdrop-blur-sm">
                <AccordionTrigger className="text-left text-background/90 hover:no-underline font-sans">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-background/60">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  </Layout>
);

export default Services;
