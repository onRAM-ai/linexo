import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";
import SectionDivider from "@/components/SectionDivider";

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
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast({ title: "Message sent!", description: "We'll be in touch shortly." });
      (e.target as HTMLFormElement).reset();
    }, 1000);
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

      <SectionDivider variant="wave" from="fill-background" flip />
      <section className="py-20">
        <div className="container">
          <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-border/50 bg-secondary/20 p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Your name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input id="company" placeholder="Your company" />
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="you@example.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" type="tel" placeholder="04XX XXX XXX" />
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
                    <Textarea id="message" placeholder="Tell us about your requirements…" rows={5} required />
                  </div>
                  <Button type="submit" size="lg" disabled={submitting} className="w-full sm:w-auto">
                    {submitting ? "Sending…" : "Send Message"}
                  </Button>
                </form>
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
