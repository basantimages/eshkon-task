import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { AuthSessionProvider } from '@/components/AuthSessionProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Eshkon',
  description: 'Created by Basantraj Shakti',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <AuthSessionProvider>{children}</AuthSessionProvider>
      </body>
    </html>
  );
}
