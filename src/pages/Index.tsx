import { useNavigate } from "react-router-dom";
import { Layers, Building2, Clock } from "lucide-react";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import StatBand from "@/components/home/StatBand";
import ProcessSection from "@/components/home/ProcessSection";
import ValuesSection from "@/components/home/ValuesSection";
import SectorsSection from "@/components/home/SectorsSection";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import ClientLogos from "@/components/home/ClientLogos";
import AboutSnippet from "@/components/home/AboutSnippet";
import CTABanner from "@/components/home/CTABanner";
import heroImg1 from "@/assets/hero-laundry-1.jpg";
import heroImg2 from "@/assets/hero-laundry-2.jpg";
import heroImg3 from "@/assets/hero-laundry-3.jpg";

const Index = () => {
  const navigate = useNavigate();

  return (
    <Layout>
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
      <ServicesSection />
      <StatBand />
      <ProcessSection />
      <ValuesSection />
      <SectorsSection />
      <TestimonialsCarousel />
      <ClientLogos />
      <AboutSnippet />
      <CTABanner />
    </Layout>
  );
};

export default Index;
