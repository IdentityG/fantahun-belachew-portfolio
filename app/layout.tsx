import type { Metadata, Viewport } from 'next';
import { Archivo, DM_Sans, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import SmoothScroll from '@/components/SmoothScroll';
import ScrollProgress from '@/components/ScrollProgress';
import CinematicMotion from '@/components/CinematicMotion';

const display = Archivo({ subsets: ['latin'], display: 'swap', variable: '--font-display', weight: ['400','500','600','700','800','900'] });
const body = DM_Sans({ subsets: ['latin'], display: 'swap', variable: '--font-body' });
const editorial = Cormorant_Garamond({ subsets: ['latin'], display: 'swap', variable: '--font-editorial', weight: ['400','500','600'], style: ['normal','italic'] });

export const metadata: Metadata = {
  title: { default: 'Fantahun Belachew — Filmmaker & Cinematographer', template: '%s — Fantahun Belachew' },
  description: 'Selected documentaries, films, photographs and visual stories by Fantahun Belachew, filmmaker, cinematographer and storyteller.',
  openGraph: { title: 'Fantahun Belachew — Stories in Motion', description: 'Documentary, commercial and event filmmaking through the eyes of Fantahun Belachew.', images: ['/og-image.jpg'], type: 'website' },
};
export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#101112' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${editorial.variable}`}>
      <body>
        <SmoothScroll />
        <ScrollProgress />
        <CinematicMotion />
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
