import '../styles/globals.css';
import LenisProvider from '@/components/LenisProvider';
import Navbar from '@/components/Navbar';

/* ── SEO Metadata (Next.js 14 Metadata API) ── */
export const metadata = {
  title: 'Al Rubayet Turjo | Full Stack Web Developer & AI Automation Specialist',
  description:
    'Premium portfolio of Al Rubayet Turjo (Zero) — Full Stack Web Developer & AI Automation Specialist. Building scalable SaaS platforms, automation systems, and secure web applications for global clients.',
  keywords: [
    'Full Stack Developer',
    'Web Developer',
    'SaaS',
    'AI Automation',
    'Next.js',
    'React',
    'Node.js',
    'Freelance Developer',
    'Bangladesh',
    'Upwork',
  ],
  authors: [{ name: 'Al Rubayet Turjo' }],
  openGraph: {
    title: 'Al Rubayet Turjo | Full Stack Developer',
    description:
      'Building scalable SaaS platforms, automation systems, and secure web applications for global clients.',
    url: 'https://alrubayetturjo.vercel.app',
    siteName: 'Al Rubayet Turjo Portfolio',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Al Rubayet Turjo | Full Stack Developer',
    description:
      'Building scalable SaaS platforms, automation systems, and secure web applications for global clients.',
  },
  robots: 'index, follow',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="overflow-x-hidden">
        <LenisProvider>
          <Navbar />
          <main>{children}</main>
        </LenisProvider>
      </body>
    </html>
  );
}
