'use client';

import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import Loading from '@/app/loading';
import { useSidebar } from '@/components/ui/sidebar';

const AppSidebar = dynamic(() => import('@/components/app-sidebar').then(mod => mod.AppSidebar), {
  loading: () => <Loading />,
  ssr: false
});

export function ClientSidebar() {
  const pathname = usePathname();
  const { setOpenMobile, isMobile, setOpen } = useSidebar();

  // Set initial state and handle navigation
  useEffect(() => {
    if (isMobile) {
      setOpenMobile(false);
    } else {
      // Keep sidebar open on desktop
      setOpen(true);
    }
  }, [isMobile, setOpen, setOpenMobile]);

  // Handle mobile navigation
  useEffect(() => {
    if (isMobile) {
      setOpenMobile(false);
    }
  }, [pathname, setOpenMobile, isMobile]);

  return <AppSidebar />;
}
