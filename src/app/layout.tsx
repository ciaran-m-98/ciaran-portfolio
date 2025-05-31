import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/ui/navbar/Navbar';
import ResponsiveNavbar from '@/ui/navbar/ResponsiveNavbar';
import StoreProvider from './StoreProvider';

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
        <body className={`antialiased overflow-hidden`}>
          <Navbar />
          <ResponsiveNavbar />
          {children}
        </body>
      </html>
    </StoreProvider>
  );
}
