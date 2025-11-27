'use client';

import Link from 'next/link';

interface BreadcrumbProps {
  currentRegion?: string;
}

export function Breadcrumb({ currentRegion }: BreadcrumbProps) {
  return (
    <div className="fixed top-24 left-6 z-40 flex items-center gap-2 text-sm">
      <Link 
        href="/" 
        className="text-terraform-purple hover:text-terraform-purple-light transition-colors"
      >
        Home
      </Link>
      {currentRegion && (
        <>
          <span className="text-text-muted">/</span>
          <span className="text-text-primary font-medium">{currentRegion}</span>
        </>
      )}
    </div>
  );
}
