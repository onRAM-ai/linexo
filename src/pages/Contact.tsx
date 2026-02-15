import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
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

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  company: z.string().optional(),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (_data: ContactForm) => {
    // Simulate network request
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitted(true);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary py-20 md:py-28">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-extrabold text-foreground md:text-5xl">Get In Touch</h1>
            <p className="text-lg text-muted-foreground">
              Ready to streamline your linen supply? Drop us a line and we'll get back to you promptly.
            </p>
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
                      transition={{ duration: 0.5 }}
                      className="flex flex-col items-center justify-center py-16 text-center"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                      >
                        <CheckCircle className="mb-6 h-16 w-16 text-accent" />
                      </motion.div>
                      <h3 className="mb-2 text-2xl font-bold text-foreground">Message Sent!</h3>
                      <p className="mb-6 text-muted-foreground">We'll be in touch within one business day.</p>
                      <Button variant="outline" onClick={() => setSubmitted(false)}>Send Another Message</Button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit(onSubmit)}
                      className="space-y-6"
                    >
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name *</Label>
                          <Input id="name" placeholder="Your name" {...register("name")} />
                          {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="company">Company</Label>
                          <Input id="company" placeholder="Your company" {...register("company")} />
                        </div>
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input id="email" type="email" placeholder="you@example.com" {...register("email")} />
                          {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone</Label>
                          <Input id="phone" type="tel" placeholder="04XX XXX XXX" {...register("phone")} />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Service Required</Label>
                        <Select onValueChange={(val) => setValue("service", val)}>
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
                        <Label htmlFor="message">Message *</Label>
                        <Textarea id="message" placeholder="Tell us about your requirements…" rows={5} {...register("message")} />
                        {errors.message && <p className="text-xs text-destructive">{errors.message.message}</p>}
                      </div>
                      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
                        {isSubmitting ? "Sending…" : "Send Message"}
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
                  <p className="flex items-center gap-3"><Phone className="h-5 w-5 text-primary" /> (08) 9000 0000</p>
                  <p className="flex items-center gap-3"><Mail className="h-5 w-5 text-primary" /> info@linexo.com.au</p>
                  <p className="flex items-center gap-3"><MapPin className="h-5 w-5 text-primary" /> Kalgoorlie-Boulder, WA</p>
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
                  Kambalda, Leonora, Laverton, and surrounding communities.
                </p>
              </div>

              {/* Google Maps Embed */}
              <div className="overflow-hidden rounded-xl border border-border/50">
                <iframe
                  title="LinExo Service Area — Kalgoorlie-Boulder"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109636.2507734725!2d121.41677!3d-30.7461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a4f5c2b20d1f3fb%3A0x504f0b535df4dc0!2sKalgoorlie-Boulder%20WA!5e0!3m2!1sen!2sau!4v1700000000000"
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
