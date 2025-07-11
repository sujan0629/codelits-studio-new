'use client';

import { usePathname } from 'next/navigation';
import { Header } from './Header';
import { Footer } from './Footer';
import { Toaster } from '@/components/ui/toaster';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const isProjectDetailPage = pathname?.startsWith('/portfolio/') && pathname.split('/').length > 2 && pathname !== '/portfolio/client-work';

  return (
    <div className="flex flex-col min-h-screen">
      {!isProjectDetailPage && <Header />}
      <main className="flex-grow">
        {children}
      </main>
<Footer />
      <Toaster />
    </div>
  );
}
