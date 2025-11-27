'use client';

import { useEffect, useRef } from 'react';
import { useThree } from '@react-three/fiber';
import { useRouter } from 'next/navigation';
import { animateCamera } from '@/lib/camera-animations';
import { Module } from '@/types';

interface CameraControllerProps {
  targetModule: Module | null;
  onAnimationStart?: () => void;
  onAnimationComplete?: () => void;
}

export function CameraController({ 
  targetModule, 
  onAnimationStart,
  onAnimationComplete 
}: CameraControllerProps) {
  const { camera } = useThree();
  const router = useRouter();
  const isAnimatingRef = useRef(false);

  useEffect(() => {
    if (!targetModule || isAnimatingRef.current) return;

    isAnimatingRef.current = true;

    // Calculate camera position relative to the module
    const [x, y, z] = targetModule.position;
    const cameraOffset = 5;
    const targetPosition: [number, number, number] = [
      x + cameraOffset,
      y + cameraOffset,
      z + cameraOffset
    ];

    animateCamera({
      camera,
      targetPosition,
      targetLookAt: targetModule.position,
      duration: 1.5,
      onStart: () => {
        if (onAnimationStart) onAnimationStart();
      },
      onComplete: () => {
        isAnimatingRef.current = false;
        if (onAnimationComplete) onAnimationComplete();
        
        // Navigate to module page
        router.push(`/module/${targetModule.id}`);
      }
    });

    return () => {
      isAnimatingRef.current = false;
    };
  }, [targetModule, camera, router, onAnimationStart, onAnimationComplete]);

  return null;
}
