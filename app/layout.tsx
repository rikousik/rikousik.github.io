import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';

const inter = Space_Grotesk({ subsets: ['latin'], weight: ['500', '600', '700'] });

export const metadata: Metadata = {
  title: 'Rezaul Islam Kousik - Applied AI Engineer',
  description:
    'Portfolio of Rezaul Islam Kousik, a passionate full-stack developer specializing in modern web technologies, React, Next.js, and innovative digital solutions.',
  keywords: 'Rezaul Islam Kousik, Full Stack Developer, React, Next.js, Web Development, Portfolio',
  authors: [{ name: 'Rezaul Islam Kousik' }],
  openGraph: {
    title: 'Rezaul Islam Kousik - Full Stack Developer',
    description:
      'Portfolio of Rezaul Islam Kousik, a passionate full-stack developer specializing in modern web technologies.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
         <ThemeProvider>
            {/* <AnimatedBackground /> */}
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
