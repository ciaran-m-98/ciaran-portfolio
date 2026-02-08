import type { Metadata } from 'next';
import './globals.css';
import { Orienta, JetBrains_Mono } from 'next/font/google';
import Navbar from '@/ui/navbar/Navbar';
import ResponsiveNavbar from '@/ui/navbar/ResponsiveNavbar';
import StoreProvider from './StoreProvider';
import Footer from '@/ui/footer/Footer';

const jetBrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
});

const orienta = Orienta({
  variable: '--font-orienta-sans',
  weight: '400',
  subsets: ['latin'],
});
export const metadata: Metadata = {
  title: 'Ciarán Melarkey - Portfolio',
  description: 'Ciarán Melarkey - Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body
          className={`antialiased ${orienta.variable} ${jetBrainsMono.variable} m-auto font-[family-name:var(--font-jetbrains-mono)] dark`}
        >
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </StoreProvider>
  );
}
