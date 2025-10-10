import { Header } from '@/components/Header';
import { SocialSidebar } from '@/components/SocialSidebar';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';
import { Footer } from '@/sections/Footer';
import { NotFoundScene } from '@/components/client/NotFoundScene';

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="text-secondary-700">
        <NotFoundScene />
      </main>
      <Footer />
      <WhatsAppFloat />
      <SocialSidebar />
    </>
  );
}
