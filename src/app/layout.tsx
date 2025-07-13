import type { Metadata } from 'next';
import './globals.css';
import { Geist, Geist_Mono, Roboto, Orienta } from 'next/font/google';
import Navbar from '@/ui/navbar/Navbar';
import ResponsiveNavbar from '@/ui/navbar/ResponsiveNavbar';
import StoreProvider from './StoreProvider';
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
  weight: '400',
  subsets: ['latin'],
});

const orienta = Orienta({
  variable: '--font-orienta-sans',
  weight: '400',
  subsets: ['latin'],
});
export const metadata: Metadata = {
  title: 'Ciarán Melarkey',
  description: 'Ciarán Melarkey Portfolio',
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
          className={`antialiased overflow-hidden ${geistSans.variable} ${geistMono.variable} ${roboto.variable} ${orienta.variable}`}
        >
          <Navbar />
          <ResponsiveNavbar />
          {children}
        </body>
      </html>
    </StoreProvider>
  );
}
