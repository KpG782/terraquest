'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { detectWebGL } from '@/lib/webgl-detection';
import { WebGLFallback } from '@/components/WebGLFallback';
import { Footer } from '@/components/Footer';
import { HelpOverlay } from '@/components/HelpOverlay';

// Dynamically import 3D components to avoid SSR issues
const JourneyMap3D = dynamic(() => import('@/components/JourneyMap3D'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center w-full h-screen bg-bg-dark text-text-primary">
      <div className="text-center">
        <div className="text-xl font-semibold mb-2">Loading Journey Map...</div>
        <div className="text-text-secondary">Preparing your Terraform adventure</div>
      </div>
    </div>
  )
});

export default function Home() {
  const [webglSupported, setWebglSupported] = useState<boolean | null>(null);

  // Check WebGL support on mount
  if (typeof window !== 'undefined' && webglSupported === null) {
    setWebglSupported(detectWebGL());
  }

  if (webglSupported === false) {
    return <WebGLFallback />;
  }

  return (
    <div className="w-full h-screen bg-bg-dark">
      <JourneyMap3D />
      <HelpOverlay />
      <Footer />
    </div>
  );
}
