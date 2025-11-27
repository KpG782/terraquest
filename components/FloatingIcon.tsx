'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Billboard, Float } from '@react-three/drei';
import { Mesh } from 'three';

interface FloatingIconProps {
  position: [number, number, number];
  type: 'cloud' | 'code' | 'infrastructure' | 'security';
}

export function FloatingIcon({ position, type }: FloatingIconProps) {
  const meshRef = useRef<Mesh>(null);

  // Gentle rotation animation
  useFrame(() => {
    if (meshRef.current && document.visibilityState === 'visible') {
      meshRef.current.rotation.y += 0.008;
    }
  });

  const renderIcon = () => {
    switch (type) {
      case 'cloud':
        return (
          <Float speed={1.2} rotationIntensity={0} floatIntensity={0.6}>
            <group>
              {/* Cloud shape */}
              <mesh position={[0, 0, 0]}>
                <sphereGeometry args={[0.25, 16, 16]} />
                <meshStandardMaterial color="#58A6FF" emissive="#58A6FF" emissiveIntensity={0.4} />
              </mesh>
              <mesh position={[0.2, 0.1, 0]}>
                <sphereGeometry args={[0.18, 16, 16]} />
                <meshStandardMaterial color="#58A6FF" emissive="#58A6FF" emissiveIntensity={0.4} />
              </mesh>
              <mesh position={[-0.15, 0.05, 0]}>
                <sphereGeometry args={[0.15, 16, 16]} />
                <meshStandardMaterial color="#58A6FF" emissive="#58A6FF" emissiveIntensity={0.4} />
              </mesh>
            </group>
          </Float>
        );
      
      case 'code':
        return (
          <mesh ref={meshRef}>
            <boxGeometry args={[0.4, 0.4, 0.1]} />
            <meshStandardMaterial color="#7B42BC" emissive="#7B42BC" emissiveIntensity={0.5} />
          </mesh>
        );
      
      case 'infrastructure':
        return (
          <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.4}>
            <group>
              {/* Server rack representation */}
              <mesh>
                <boxGeometry args={[0.3, 0.5, 0.2]} />
                <meshStandardMaterial color="#FF9900" emissive="#FF9900" emissiveIntensity={0.4} />
              </mesh>
              <mesh position={[0, 0.15, 0.11]}>
                <boxGeometry args={[0.25, 0.08, 0.02]} />
                <meshStandardMaterial color="#FFB84D" emissive="#FFB84D" emissiveIntensity={0.3} />
              </mesh>
              <mesh position={[0, 0, 0.11]}>
                <boxGeometry args={[0.25, 0.08, 0.02]} />
                <meshStandardMaterial color="#FFB84D" emissive="#FFB84D" emissiveIntensity={0.3} />
              </mesh>
              <mesh position={[0, -0.15, 0.11]}>
                <boxGeometry args={[0.25, 0.08, 0.02]} />
                <meshStandardMaterial color="#FFB84D" emissive="#FFB84D" emissiveIntensity={0.3} />
              </mesh>
            </group>
          </Float>
        );
      
      case 'security':
        return (
          <Float speed={1} rotationIntensity={0} floatIntensity={0.3}>
            <group>
              {/* Shield shape */}
              <mesh>
                <coneGeometry args={[0.25, 0.5, 4]} />
                <meshStandardMaterial color="#3FB950" emissive="#3FB950" emissiveIntensity={0.5} />
              </mesh>
              <mesh position={[0, 0, 0]}>
                <sphereGeometry args={[0.12, 16, 16]} />
                <meshStandardMaterial color="#56D364" emissive="#56D364" emissiveIntensity={0.4} />
              </mesh>
            </group>
          </Float>
        );
      
      default:
        return null;
    }
  };

  return (
    <Billboard position={position}>
      {renderIcon()}
      <pointLight color={type === 'cloud' ? '#58A6FF' : type === 'code' ? '#7B42BC' : type === 'infrastructure' ? '#FF9900' : '#3FB950'} intensity={0.5} distance={3} />
    </Billboard>
  );
}
