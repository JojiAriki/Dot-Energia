import { Header } from '@/components/Header';
import { HeroSection } from '@/sections/HeroSection';
import { MarketInfoSection } from '@/sections/MarketInfoSection';
import { BenefitsSection } from '@/sections/BenefitsSection';
import { TestimonialsSection } from '@/sections/TestimonialsSection';
import { SustainabilitySection } from '@/sections/SustainabilitySection';
import { WhyChooseSection } from '@/sections/WhyChooseSection';
import { ContactFormSection } from '@/sections/ContactFormSection';
import { Footer } from '@/sections/Footer';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';
import { SocialSidebar } from '@/components/SocialSidebar';

export default function HomePage() {
  return (
    <>
      <Header />
      <HeroSection />
      <main className="relative z-10 bg-white">
        <MarketInfoSection />
        <BenefitsSection />
        <TestimonialsSection />
        <SustainabilitySection />
        <WhyChooseSection />
        <ContactFormSection />
        <Footer />
      </main>

      {/* Componentes flutuantes */}
      <WhatsAppFloat />
      <SocialSidebar />
    </>
  );
}
