import { useState, useEffect } from 'react';

export const BREAKPOINTS = {
  mobile: 768,
  tablet: 1024,
  desktop: 1440
} as const;

export type Breakpoint = 'mobile' | 'tablet' | 'desktop';

export function useResponsive(): Breakpoint {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>('desktop');
  
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < BREAKPOINTS.mobile) {
        setBreakpoint('mobile');
      } else if (width < BREAKPOINTS.tablet) {
        setBreakpoint('tablet');
      } else {
        setBreakpoint('desktop');
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);
  
  return breakpoint;
}

export interface ResponsiveConfig {
  cameraDistance: number;
  particleCount: number;
  enableShadows: boolean;
  enablePostProcessing: boolean;
  simplifiedModels: boolean;
  iconCount: number;
}

export function getResponsiveConfig(breakpoint: Breakpoint): ResponsiveConfig {
  const configs: Record<Breakpoint, ResponsiveConfig> = {
    mobile: {
      cameraDistance: 30,
      particleCount: 50,
      enableShadows: false,
      enablePostProcessing: false,
      simplifiedModels: true,
      iconCount: 3
    },
    tablet: {
      cameraDistance: 25,
      particleCount: 100,
      enableShadows: false,
      enablePostProcessing: false,
      simplifiedModels: false,
      iconCount: 6
    },
    desktop: {
      cameraDistance: 20,
      particleCount: 200,
      enableShadows: true,
      enablePostProcessing: true,
      simplifiedModels: false,
      iconCount: 9
    }
  };
  
  return configs[breakpoint];
}
