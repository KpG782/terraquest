'use client';

import { useRef, useMemo } from 'react';
import { Mesh, BufferGeometry, Float32BufferAttribute } from 'three';
import { Float, Html, Text } from '@react-three/drei';
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

function createIslandGeometry() {
  const geometry = new BufferGeometry();
  const size = 2.5;
  const height = 1.2;
  
  // Create organic island shape with vertices
  const vertices = new Float32Array([
    // Top surface (irregular)
    0, height, 0,
    size * 0.8, height * 0.9, size * 0.3,
    size * 0.5, height * 0.95, size * 0.9,
    -size * 0.4, height * 0.85, size * 0.7,
    -size * 0.9, height * 0.8, size * 0.2,
    -size * 0.7, height * 0.9, -size * 0.5,
    -size * 0.2, height * 0.95, -size * 0.8,
    size * 0.6, height * 0.85, -size * 0.6,
    
    // Bottom surface
    0, 0, 0,
    size * 0.6, 0, size * 0.2,
    size * 0.4, 0, size * 0.7,
    -size * 0.3, 0, size * 0.5,
    -size * 0.7, 0, size * 0.1,
    -size * 0.5, 0, -size * 0.4,
    -size * 0.1, 0, -size * 0.6,
    size * 0.5, 0, -size * 0.5,
  ]);
  
  geometry.setAttribute('position', new Float32BufferAttribute(vertices, 3));
  geometry.computeVertexNormals();
  
  return geometry;
}

function getGeometryByType(type: Module['type']) {
  switch (type) {
    case 'island':
      return { geometry: <boxGeometry args={[3, 1.5, 3]} />, scale: 1 };
    case 'peak':
      return { geometry: <coneGeometry args={[1.5, 3, 6]} />, scale: 1 };
    case 'forest':
      return { geometry: <cylinderGeometry args={[1.3, 1.5, 2.5, 8]} />, scale: 1 };
    case 'valley':
      return { geometry: <boxGeometry args={[2.5, 0.8, 2.5]} />, scale: 1 };
    case 'realm':
      return { geometry: <sphereGeometry args={[1.5, 32, 32]} />, scale: 1 };
    case 'metropolis':
      return { geometry: <cylinderGeometry args={[1.5, 1.5, 2.5, 8]} />, scale: 1 };
    case 'archipelago':
      return { geometry: <boxGeometry args={[2, 1.2, 2]} />, scale: 1 };
    case 'laboratory':
      return { geometry: <boxGeometry args={[2.2, 2.2, 2.2]} />, scale: 1 };
    case 'summit':
      return { geometry: <coneGeometry args={[1.5, 3.5, 6]} />, scale: 1 };
    default:
      return { geometry: <boxGeometry args={[3, 1.5, 3]} />, scale: 1 };
  }
}

function getRegionColor(region: Module['region'], isCompleted: boolean, isLocked: boolean) {
  if (isLocked) return { color: '#1a1d23', emissive: '#000000', intensity: 0 };
  if (isCompleted) return { color: '#3FB950', emissive: '#3FB950', intensity: 0.6 };
  
  switch (region) {
    case 'starter':
      return { color: '#58A6FF', emissive: '#58A6FF', intensity: 0.4 };
    case 'foundation':
      return { color: '#7B42BC', emissive: '#7B42BC', intensity: 0.5 };
    case 'advanced':
      return { color: '#FF9900', emissive: '#FF9900', intensity: 0.5 };
    case 'mastery':
      return { color: '#F85149', emissive: '#F85149', intensity: 0.6 };
    default:
      return { color: '#7B42BC', emissive: '#7B42BC', intensity: 0.5 };
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
  const { geometry, scale } = useMemo(() => getGeometryByType(module.type), [module.type]);
  const colorScheme = useMemo(() => getRegionColor(module.region, isCompleted, isLocked), [module.region, isCompleted, isLocked]);

  const handleClick = () => {
    if (!isLocked) {
      onClick(module.id);
    }
  };

  const handlePointerEnter = () => {
    onHover(module.id);
    document.body.style.cursor = isLocked ? 'not-allowed' : 'pointer';
  };

  const handlePointerLeave = () => {
    onHover(null);
    document.body.style.cursor = 'default';
  };

  const status = isCompleted ? 'completed' : isLocked ? 'locked' : 'unlocked';
  const ariaLabel = getAriaLabel(module, status);

  const meshContent = (
    <group position={module.position}>
      {/* Hidden HTML element for screen readers */}
      <Html position={[0, 0, 0]} style={{ display: 'none' }}>
        <button
          aria-label={ariaLabel}
          onClick={handleClick}
          tabIndex={isFocused ? 0 : -1}
          style={{ opacity: 0, position: 'absolute' }}
        />
      </Html>
      
      {/* Main terrain mesh */}
      <mesh
        ref={meshRef}
        onClick={handleClick}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        castShadow
        receiveShadow
        scale={scale}
      >
        {geometry}
        
        <meshStandardMaterial
          color={colorScheme.color}
          emissive={colorScheme.emissive}
          emissiveIntensity={colorScheme.intensity}
          metalness={isLocked ? 0.1 : 0.4}
          roughness={isLocked ? 0.9 : 0.5}
          transparent={isLocked}
          opacity={isLocked ? 0.3 : 1}
        />
      </mesh>
      
      {/* Base platform for islands */}
      {module.type === 'island' && (
        <mesh position={[0, -1, 0]} receiveShadow>
          <cylinderGeometry args={[2.5, 2, 0.5, 16]} />
          <meshStandardMaterial
            color={isLocked ? '#0d1117' : colorScheme.color}
            emissive={colorScheme.emissive}
            emissiveIntensity={colorScheme.intensity * 0.3}
            metalness={0.2}
            roughness={0.8}
            transparent={isLocked}
            opacity={isLocked ? 0.2 : 0.8}
          />
        </mesh>
      )}
      
      {/* Floating label */}
      {!isLocked && (
        <Text
          position={[0, module.type === 'summit' ? 4 : 3, 0]}
          fontSize={0.4}
          color={isCompleted ? '#3FB950' : '#ffffff'}
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.05}
          outlineColor="#000000"
        >
          {module.name}
        </Text>
      )}
      
      {/* Point light for unlocked regions */}
      {!isLocked && (
        <pointLight
          position={[0, 3, 0]}
          color={colorScheme.color}
          intensity={2}
          distance={8}
          decay={2}
        />
      )}
      
      {/* Progress indicator ring */}
      {isCompleted && (
        <mesh position={[0, 0.1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[2, 2.3, 32]} />
          <meshBasicMaterial color="#3FB950" transparent opacity={0.6} />
        </mesh>
      )}
      
      {/* Lock indicator */}
      {isLocked && (
        <mesh position={[0, 2, 0]}>
          <sphereGeometry args={[0.3, 16, 16]} />
          <meshStandardMaterial color="#30363d" emissive="#30363d" emissiveIntensity={0.2} />
        </mesh>
      )}
      
      {/* Focus indicator */}
      {isFocused && !isLocked && (
        <mesh position={[0, 0.1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[2.5, 2.8, 32]} />
          <meshBasicMaterial color="#7B42BC" transparent opacity={0.8} />
        </mesh>
      )}
    </group>
  );

  // Wrap completed regions in Float component for gentle floating animation
  if (isCompleted) {
    return (
      <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.4}>
        {meshContent}
      </Float>
    );
  }

  return meshContent;
}
