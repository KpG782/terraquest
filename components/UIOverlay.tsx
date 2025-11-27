'use client';

import { ReactNode } from 'react';

interface UIOverlayProps {
  children: ReactNode;
}

export function UIOverlay({ children }: UIOverlayProps) {
  return (
    <div className="fixed inset-0 pointer-events-none z-30">
      <div className="relative w-full h-full">
        {children}
      </div>
    </div>
  );
}
