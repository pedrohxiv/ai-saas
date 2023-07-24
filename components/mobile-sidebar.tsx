'use client';

import { Menu } from 'lucide-react';
import { useEffect, useState } from 'react';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Sidebar } from '@/components/sidebar';

interface MobileSidebarProps {
  apiLimitCount: number;
  isPro: boolean;
}

export function MobileSidebar({ apiLimitCount, isPro = false }: MobileSidebarProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Sheet>
      <SheetTrigger>
        <div className="flex items-center justify-center rounded-md transition-colors hover:bg-accent h-10 w-10 md:hidden">
          <Menu />
        </div>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="p-0"
      >
        <Sidebar
          apiLimitCount={apiLimitCount}
          isPro={isPro}
        />
      </SheetContent>
    </Sheet>
  );
}
