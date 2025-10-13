import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';
import CookieConsent from '@/components/CookieConsent';

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://dotenergia.com'),
  title: 'Dot Energia — Soluções Inteligentes em Energia',
  description:
    'Maximize a eficiência e reduza custos com soluções sustentáveis de energia. Migre para o Mercado Livre e economize até 30% na sua conta de luz.',
  keywords: [
    'mercado livre de energia',
    'energia renovável',
    'economia de energia',
    'Dot Energia',
    'sustentabilidade',
  ],
  authors: [{ name: 'Dot Energia' }],
  creator: 'Dot Energia',
  publisher: 'Dot Energia',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Dot Energia — Soluções Inteligentes em Energia',
    description:
      'Energia eficiente, limpa e rentável. Migre para o Mercado Livre e economize até 30%.',
    url: 'https://dotenergia.com',
    siteName: 'Dot Energia',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dot Energia - Soluções Inteligentes em Energia',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dot Energia — Soluções Inteligentes em Energia',
    description:
      'Energia eficiente, limpa e rentável. Migre para o Mercado Livre.',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
