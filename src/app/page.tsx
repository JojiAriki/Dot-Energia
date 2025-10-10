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
import { AnchorScrollHandler } from '@/components/client/AnchorScrollHandler';

export default function HomePage() {
  return (
    <>
      <Header />
      <AnchorScrollHandler />
      <HeroSection />
      <main className="relative z-10 bg-white" style={{ marginTop: '100vh' }}>
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
