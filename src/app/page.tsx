import { Header } from '@/components/Header';
import { HeroSection } from '@/sections/HeroSection';
import { MarketInfoSection } from '@/sections/MarketInfoSection';
import { BenefitsSection } from '@/sections/BenefitsSection';
import { TestimonialsSection } from '@/sections/TestimonialsSection';
import { ProcessSection } from '@/sections/ProcessSection';
import { SustainabilitySection } from '@/sections/SustainabilitySection';
import { WhyChooseSection } from '@/sections/WhyChooseSection';
import { ContactFormSection } from '@/sections/ContactFormSection';
import { Footer } from '@/sections/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <MarketInfoSection />
        <BenefitsSection />
        <SustainabilitySection />
        <TestimonialsSection />
        <ProcessSection />
        <WhyChooseSection />
        <ContactFormSection />
        <Footer />
      </main>
    </>
  );
}
