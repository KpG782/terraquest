'use client';

import { useRef, useEffect } from 'react';
import { OrbitControls as OrbitControlsImpl } from 'three-stdlib';
import { useThree, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

interface BoundedOrbitControlsProps {
  enabled: boolean;
  target: [number, number, number];
  minDistance: number;
  maxDistance: number;
  minPolarAngle: number;
  maxPolarAngle: number;
  enablePan: boolean;
  panSpeed: number;
  enableDamping: boolean;
  dampingFactor: number;
  rotateSpeed: number;
  zoomSpeed: number;
  mouseButtons: {
    LEFT: number;
    MIDDLE: number;
    RIGHT: number;
  };
  touches: {
    ONE: number;
    TWO: number;
  };
  // Panning boundaries
  maxPanX?: number;
  maxPanZ?: number;
  onBoundaryHit?: (direction: 'north' | 'south' | 'east' | 'west') => void;
}

export function BoundedOrbitControls({
  enabled,
  target,
  minDistance,
  maxDistance,
  minPolarAngle,
  maxPolarAngle,
  enablePan,
  panSpeed,
  enableDamping,
  dampingFactor,
  rotateSpeed,
  zoomSpeed,
  mouseButtons,
  touches,
  maxPanX = 35,
  maxPanZ = 35,
  onBoundaryHit,
}: BoundedOrbitControlsProps) {
  const controlsRef = useRef<OrbitControlsImpl>(null);
  const { camera } = useThree();
  const lastBoundaryHit = useRef<string>('');
  const boundaryHitTime = useRef<number>(0);

  // Enforce panning boundaries on each frame
  useFrame(() => {
    if (controlsRef.current && enablePan) {
      const controls = controlsRef.current;
      const targetPos = controls.target;
      const now = Date.now();

      // Clamp X position
      if (targetPos.x > maxPanX) {
        targetPos.x = maxPanX;
        if (onBoundaryHit && now - boundaryHitTime.current > 1000 && lastBoundaryHit.current !== 'east') {
          onBoundaryHit('east');
          lastBoundaryHit.current = 'east';
          boundaryHitTime.current = now;
        }
      } else if (targetPos.x < -maxPanX) {
        targetPos.x = -maxPanX;
        if (onBoundaryHit && now - boundaryHitTime.current > 1000 && lastBoundaryHit.current !== 'west') {
          onBoundaryHit('west');
          lastBoundaryHit.current = 'west';
          boundaryHitTime.current = now;
        }
      }

      // Clamp Z position
      if (targetPos.z > maxPanZ) {
        targetPos.z = maxPanZ;
        if (onBoundaryHit && now - boundaryHitTime.current > 1000 && lastBoundaryHit.current !== 'south') {
          onBoundaryHit('south');
          lastBoundaryHit.current = 'south';
          boundaryHitTime.current = now;
        }
      } else if (targetPos.z < -maxPanZ) {
        targetPos.z = -maxPanZ;
        if (onBoundaryHit && now - boundaryHitTime.current > 1000 && lastBoundaryHit.current !== 'north') {
          onBoundaryHit('north');
          lastBoundaryHit.current = 'north';
          boundaryHitTime.current = now;
        }
      }

      // Clamp Y position (don't let camera go below ground)
      if (targetPos.y < -5) {
        targetPos.y = -5;
      } else if (targetPos.y > 20) {
        targetPos.y = 20;
      }
    }
  });

  return (
    <OrbitControls
      ref={controlsRef}
      enabled={enabled}
      target={target}
      minDistance={minDistance}
      maxDistance={maxDistance}
      minPolarAngle={minPolarAngle}
      maxPolarAngle={maxPolarAngle}
      enablePan={enablePan}
      panSpeed={panSpeed}
      enableDamping={enableDamping}
      dampingFactor={dampingFactor}
      rotateSpeed={rotateSpeed}
      zoomSpeed={zoomSpeed}
      mouseButtons={mouseButtons}
      touches={touches}
    />
  );
}
