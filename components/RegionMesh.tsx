'use client';

import { useRef, useState } from 'react';
import { Mesh } from 'three';
import { Float, Html } from '@react-three/drei';
import { Module } from '@/types';
import { getAriaLabel } from '@/lib/accessibility';

interface RegionMeshProps {
  module: Module;
  isLocked: boolean;
  isCompleted: boolean;
  onClick: (id: string) => void;
  onHover: (id: string | null) => void;
  isFocused?: boolean;
  onFocus?: (id: string) => void;
}

function getGeometryByType(type: Module['type']) {
  switch (type) {
    case 'island':
      return <boxGeometry args={[2, 1, 2]} />;
    case 'peak':
      return <coneGeometry args={[1, 2, 4]} />;
    case 'forest':
      return <cylinderGeometry args={[1, 2, 1, 8]} />;
    case 'valley':
      return <boxGeometry args={[2, 0.5, 2]} />;
    case 'realm':
      return <sphereGeometry args={[1, 16, 16]} />;
    case 'metropolis':
      return <cylinderGeometry args={[1, 1, 2, 6]} />;
    case 'archipelago':
      return <boxGeometry args={[1.5, 0.8, 1.5]} />;
    case 'laboratory':
      return <boxGeometry args={[1.8, 1.8, 1.8]} />;
    case 'summit':
      return <coneGeometry args={[1.2, 2.5, 4]} />;
    default:
      return <boxGeometry args={[2, 1, 2]} />;
  }
}

export function RegionMesh({ 
  module, 
  isLocked, 
  isCompleted, 
  onClick, 
  onHover,
  isFocused = false,
  onFocus
}: RegionMeshProps) {
  const meshRef = useRef<Mesh>(null);

  const handleClick = () => {
    if (!isLocked) {
      onClick(module.id);
    }
  };

  const handlePointerEnter = () => {
    onHover(module.id);
    document.body.style.cursor = 'pointer';
  };

  const handlePointerLeave = () => {
    onHover(null);
    document.body.style.cursor = 'default';
  };

  const status = isCompleted ? 'completed' : isLocked ? 'locked' : 'unlocked';
  const ariaLabel = getAriaLabel(module, status);

  const meshContent = (
    <group>
      {/* Hidden HTML element for screen readers */}
      <Html position={[0, 0, 0]} style={{ display: 'none' }}>
        <button
          aria-label={ariaLabel}
          onClick={handleClick}
          tabIndex={isFocused ? 0 : -1}
          style={{ opacity: 0, position: 'absolute' }}
        />
      </Html>
    <mesh
      ref={meshRef}
      position={module.position}
      onClick={handleClick}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      castShadow
      receiveShadow
    >
      {getGeometryByType(module.type)}
      
      {isLocked ? (
        <meshStandardMaterial
          color="#30363d"
          transparent
          opacity={0.3}
          emissive="#000000"
        />
      ) : (
        <meshStandardMaterial
          color={isCompleted ? "#3FB950" : "#7B42BC"}
          emissive={isCompleted ? "#3FB950" : "#7B42BC"}
          emissiveIntensity={0.5}
          metalness={0.3}
          roughness={0.4}
        />
      )}
      
      {/* Point light for unlocked regions */}
      {!isLocked && (
        <pointLight
          position={[0, 2, 0]}
          color={isCompleted ? "#3FB950" : "#7B42BC"}
          intensity={1}
          distance={5}
        />
      )}
      
      {/* Focus indicator */}
      {isFocused && (
        <lineSegments>
          <edgesGeometry args={[meshRef.current?.geometry]} />
          <lineBasicMaterial color="#7B42BC" linewidth={3} />
        </lineSegments>
      )}
    </mesh>
    </group>
  );

  // Wrap completed regions in Float component for pulsing animation
  if (isCompleted) {
    return (
      <Float speed={2} rotationIntensity={0} floatIntensity={0.3}>
        {meshContent}
      </Float>
    );
  }

  return meshContent;
}
