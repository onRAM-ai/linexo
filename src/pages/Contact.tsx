import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Clock, CheckCircle2, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Layout from "@/components/Layout";

const serviceOptions = [
  "Hotel Linen Hire",
  "Flatwork Finishing",
  "Towels & Hospitality Textiles",
  "Industrial Workwear & PPE",
  "Heat-Sealed Packaging",
  "Scheduled Pickup & Delivery",
  "Emergency Processing",
  "Other",
];

const businessHours = [
  { day: "Monday – Friday", hours: "6:00 AM – 6:00 PM" },
  { day: "Saturday", hours: "7:00 AM – 12:00 PM" },
  { day: "Sunday", hours: "Closed" },
];

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary py-24 md:py-32 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-20 top-10 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />
          <div className="absolute -left-20 bottom-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        </div>
        <div className="container relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-extrabold text-foreground md:text-5xl lg:text-6xl">Get In Touch</h1>
            <p className="text-lg text-muted-foreground">
              Ready to streamline your linen supply? Drop us a line and we'll get back to you promptly.
            </p>
            {/* Response time badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-5 py-2 text-sm font-medium text-accent"
            >
              <Zap className="h-4 w-4" />
              We typically respond within 2 hours
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-border/50 bg-secondary/20 p-6 md:p-8">
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center py-16 text-center"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", delay: 0.2 }}
                        className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-accent/15"
                      >
                        <CheckCircle2 className="h-10 w-10 text-accent" />
                      </motion.div>
                      <h3 className="mb-2 text-2xl font-bold text-foreground">Message Sent!</h3>
                      <p className="mb-6 text-muted-foreground">We'll be in touch shortly. Thank you for reaching out.</p>
                      <Button variant="outline" onClick={() => setSubmitted(false)}>
                        Send Another Message
                      </Button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      onSubmit={handleSubmit}
                      className="space-y-6"
                    >
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name</Label>
                          <Input id="name" placeholder="Your name" required className="transition-shadow duration-200 focus:shadow-[0_0_0_3px_hsl(var(--primary)/0.1)]" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="company">Company</Label>
                          <Input id="company" placeholder="Your company" className="transition-shadow duration-200 focus:shadow-[0_0_0_3px_hsl(var(--primary)/0.1)]" />
                        </div>
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" placeholder="you@example.com" required className="transition-shadow duration-200 focus:shadow-[0_0_0_3px_hsl(var(--primary)/0.1)]" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone</Label>
                          <Input id="phone" type="tel" placeholder="04XX XXX XXX" className="transition-shadow duration-200 focus:shadow-[0_0_0_3px_hsl(var(--primary)/0.1)]" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Service Required</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {serviceOptions.map((s) => (
                              <SelectItem key={s} value={s}>{s}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea id="message" placeholder="Tell us about your requirements…" rows={5} required className="transition-shadow duration-200 focus:shadow-[0_0_0_3px_hsl(var(--primary)/0.1)]" />
                      </div>
                      <Button type="submit" size="lg" disabled={submitting} className="w-full sm:w-auto btn-premium">
                        {submitting ? "Sending…" : "Send Message"}
                      </Button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Contact info */}
            <div className="space-y-8 lg:col-span-2">
              <div>
                <h3 className="mb-4 text-lg font-semibold text-foreground">Contact Details</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p className="flex items-center gap-3 transition-colors duration-200 hover:text-foreground"><Phone className="h-5 w-5 text-primary" /> (08) 9000 0000</p>
                  <p className="flex items-center gap-3 transition-colors duration-200 hover:text-foreground"><Mail className="h-5 w-5 text-primary" /> info@linexo.com.au</p>
                  <p className="flex items-center gap-3 transition-colors duration-200 hover:text-foreground"><MapPin className="h-5 w-5 text-primary" /> Kalgoorlie-Boulder, WA</p>
                </div>
              </div>

              {/* Business Hours */}
              <div>
                <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
                  <Clock className="h-5 w-5 text-primary" /> Business Hours
                </h3>
                <div className="space-y-2">
                  {businessHours.map((h) => (
                    <div key={h.day} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{h.day}</span>
                      <span className="font-medium text-foreground">{h.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-4 text-lg font-semibold text-foreground">Service Area</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We service the entire WA Goldfields region including Kalgoorlie-Boulder, Coolgardie,
                  Kambalda, Leonora, Laverton, and surrounding communities. Contact us to confirm coverage
                  for your location.
                </p>
              </div>

              {/* Map Placeholder */}
              <div className="overflow-hidden rounded-xl border border-border/50 bg-secondary/30">
                <div className="flex flex-col items-center justify-center gap-3 py-16 px-6 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-sm font-medium text-foreground">Goldfields Service Area</p>
                  <p className="text-xs text-muted-foreground">Interactive map coming soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
