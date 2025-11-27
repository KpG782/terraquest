'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Billboard, Float } from '@react-three/drei';
import { Mesh, Vector3 } from 'three';

interface FloatingIconProps {
  position: [number, number, number];
  type: 'server' | 'database' | 'network';
}

export function FloatingIcon({ position, type }: FloatingIconProps) {
  const meshRef = useRef<Mesh>(null);

  // Rotation animation for server icons (pauses when tab not visible)
  useFrame(() => {
    if (meshRef.current && type === 'server' && document.visibilityState === 'visible') {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.x += 0.005;
    }
  });

  const renderIcon = () => {
    switch (type) {
      case 'server':
        return (
          <mesh ref={meshRef}>
            <boxGeometry args={[0.3, 0.3, 0.3]} />
            <meshStandardMaterial color="#FF9900" emissive="#FF9900" emissiveIntensity={0.3} />
          </mesh>
        );
      
      case 'database':
        return (
          <Float speed={1.5} rotationIntensity={0} floatIntensity={0.5}>
            <mesh>
              <cylinderGeometry args={[0.2, 0.2, 0.4, 16]} />
              <meshStandardMaterial color="#0078D4" emissive="#0078D4" emissiveIntensity={0.3} />
            </mesh>
          </Float>
        );
      
      case 'network':
        return (
          <group>
            <mesh>
              <sphereGeometry args={[0.15, 16, 16]} />
              <meshStandardMaterial color="#4285F4" emissive="#4285F4" emissiveIntensity={0.3} />
            </mesh>
            {/* Connection lines */}
            <mesh position={[0.3, 0, 0]}>
              <sphereGeometry args={[0.08, 8, 8]} />
              <meshStandardMaterial color="#4285F4" emissive="#4285F4" emissiveIntensity={0.2} />
            </mesh>
            <mesh position={[-0.3, 0, 0]}>
              <sphereGeometry args={[0.08, 8, 8]} />
              <meshStandardMaterial color="#4285F4" emissive="#4285F4" emissiveIntensity={0.2} />
            </mesh>
            <mesh position={[0, 0, 0.3]}>
              <sphereGeometry args={[0.08, 8, 8]} />
              <meshStandardMaterial color="#4285F4" emissive="#4285F4" emissiveIntensity={0.2} />
            </mesh>
          </group>
        );
      
      default:
        return null;
    }
  };

  return (
    <Billboard position={position}>
      {renderIcon()}
    </Billboard>
  );
}
