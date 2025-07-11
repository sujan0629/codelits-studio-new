'use client';

import { usePathname } from 'next/navigation';
import { Header } from './Header';
import { Footer } from './Footer';
import { Toaster } from '@/components/ui/toaster';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const isProjectPage = pathname?.startsWith('/portfolio/');

  return (
    <>
      {!isProjectPage && <Header />}
      <main className="min-h-screen flex flex-col">
        {children}
      </main>
      <Footer />
      <Toaster />
    </>
  );
}
