'use client';

import { useMemo } from 'react';
import { Line } from '@react-three/drei';
import { Module } from '@/types';
import { Vector3 } from 'three';

interface PathLineProps {
  start: Module;
  end: Module;
  isUnlocked?: boolean;
}

export function PathLine({ start, end, isUnlocked = false }: PathLineProps) {
  // Create curved path between modules
  const points = useMemo(() => {
    const startVec = new Vector3(...start.position);
    const endVec = new Vector3(...end.position);
    const midPoint = new Vector3().lerpVectors(startVec, endVec, 0.5);
    
    // Add height to create arc
    midPoint.y += 2;
    
    // Generate smooth curve points
    const curvePoints: Vector3[] = [];
    const segments = 20;
    
    for (let i = 0; i <= segments; i++) {
      const t = i / segments;
      const t2 = t * t;
      const t3 = t2 * t;
      const mt = 1 - t;
      const mt2 = mt * mt;
      const mt3 = mt2 * mt;
      
      // Quadratic bezier curve
      const point = new Vector3(
        mt2 * startVec.x + 2 * mt * t * midPoint.x + t2 * endVec.x,
        mt2 * startVec.y + 2 * mt * t * midPoint.y + t2 * endVec.y,
        mt2 * startVec.z + 2 * mt * t * midPoint.z + t2 * endVec.z
      );
      
      curvePoints.push(point);
    }
    
    return curvePoints;
  }, [start.position, end.position]);

  const regionColors = {
    starter: '#58A6FF',
    foundation: '#7B42BC',
    advanced: '#FF9900',
    mastery: '#F85149'
  };

  const color = isUnlocked ? regionColors[start.region] : '#30363d';

  return (
    <>
      <Line
        points={points}
        color={color}
        lineWidth={isUnlocked ? 3 : 2}
        transparent
        opacity={isUnlocked ? 0.6 : 0.3}
      />
      {/* Add glow effect for unlocked paths */}
      {isUnlocked && (
        <Line
          points={points}
          color={color}
          lineWidth={6}
          transparent
          opacity={0.2}
        />
      )}
    </>
  );
}
