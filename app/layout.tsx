import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import './globals.css';

const inter = Space_Grotesk({ subsets: ['latin'], weight: ['500', '600', '700'] });

export const metadata: Metadata = {
  title: 'Muhammad Ramazan - Full Stack Developer',
  description:
    'Portfolio of Muhammad Ramazan, a passionate full-stack developer specializing in modern web technologies, React, Next.js, and innovative digital solutions.',
  keywords: 'Muhammad Ramazan, Full Stack Developer, React, Next.js, Web Development, Portfolio',
  authors: [{ name: 'Muhammad Ramazan' }],
  openGraph: {
    title: 'Muhammad Ramazan - Full Stack Developer',
    description:
      'Portfolio of Muhammad Ramazan, a passionate full-stack developer specializing in modern web technologies.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <PostHogProvider>
          <ThemeProvider>
            {/* <AnimatedBackground /> */}
            {children}
          </ThemeProvider>
        </PostHogProvider>
      </body>
    </html>
  );
}
