import type { Metadata } from 'next';
import TermEffects from './components/TermEffects';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'chittansh.ai — ship the thing, not the deck',
  description:
    'AI build studio. 27 systems shipped to production. Plan Builder live below — describe your workflow, get a tailored plan in 60s.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..800&family=Newsreader:ital,opsz,wght@1,6..72,400..600&family=Inter+Tight:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body className="term">
        {children}
        <Footer />
        <TermEffects />
      </body>
    </html>
  );
}
