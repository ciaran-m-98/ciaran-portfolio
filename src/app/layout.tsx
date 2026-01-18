import type { Metadata } from 'next';
import './globals.css';
import { Geist, Geist_Mono, Roboto, Orienta } from 'next/font/google';
import Navbar from '@/ui/navbar/Navbar';
import ResponsiveNavbar from '@/ui/navbar/ResponsiveNavbar';
import StoreProvider from './StoreProvider';
import Footer from '@/ui/footer/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const roboto = Roboto({
  variable: '--font-roboto-sans',
  weight: ['200', '400'],
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
          className={`antialiased ${geistSans.variable} ${geistMono.variable} ${roboto.variable} ${orienta.variable} background`}
        >
          <Navbar />
          <ResponsiveNavbar />
          {children}
          <Footer />
        </body>
      </html>
    </StoreProvider>
  );
}
