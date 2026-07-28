import type { Metadata } from 'next';
import './globals.css';
import './page-shell.css';

export const metadata: Metadata = {
  title: 'Bajrang Hospital | Quality Healthcare in Agra',
  description: 'Bajrang Hospital in Agra provides compassionate, comprehensive healthcare, surgery, maternity, ICU, NICU, pathology, diagnostics and 24-hour ambulance services.',
  keywords: ['Bajrang Hospital', 'hospital in Agra', 'Gwalior Road Agra hospital', 'ICU NICU Agra', 'laparoscopic surgery Agra'],
  metadataBase: new URL('https://bajranghospital.com'),
  openGraph: {
    title: 'Bajrang Hospital',
    description: 'Hopeful, compassionate healthcare for every family in Agra.',
    type: 'website',
    locale: 'en_IN',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
