import type { Metadata } from 'next';
import SiteEffects from './components/SiteEffects';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'Chittansh AI — Get your team into production AI. And keep it there.',
  description:
    'An AI build studio that ships real production systems. Voice agents, RAG cockpits, advisor copilots — built into your workflow in 8 weeks.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="icon" type="image/png" href="/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Newsreader:ital,opsz,wght@1,6..72,400..600&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        {children}
        <Footer />
        <SiteEffects />
      </body>
    </html>
  );
}
