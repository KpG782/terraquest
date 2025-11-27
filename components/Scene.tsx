'use client';

import { Environment, Stars } from '@react-three/drei';
import { RegionLabel } from './RegionLabel';

interface SceneProps {
  particleCount?: number;
}

export function Scene({ particleCount = 5000 }: SceneProps) {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.8} />
      <directionalLight position={[10, 15, 5]} intensity={1.5} />
      <directionalLight position={[-10, 10, -5]} intensity={0.8} />
      <pointLight position={[0, 20, 0]} intensity={1} color="#7B42BC" />
      
      {/* Background */}
      <color attach="background" args={['#0d1117']} />
      <Stars radius={100} depth={50} count={particleCount} factor={4} saturation={0} fade speed={1} />
      
      {/* Test cube to verify rendering */}
      <mesh position={[0, 2, 0]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="#FF0000" />
      </mesh>
      
      {/* Ocean/Ground plane */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial 
          color="#161b22" 
          metalness={0.6} 
          roughness={0.4}
        />
      </mesh>
      
      {/* Region Labels */}
      <RegionLabel 
        position={[-21, 8, 13]} 
        text="Starter Region" 
        color="#58A6FF"
      />
      <RegionLabel 
        position={[-4, 8, -1]} 
        text="Foundation Region" 
        color="#7B42BC"
      />
      <RegionLabel 
        position={[18, 8, -8]} 
        text="Advanced Region" 
        color="#FF9900"
      />
      <RegionLabel 
        position={[-5, 8, -25]} 
        text="Mastery Region" 
        color="#F85149"
      />
      
      {/* Atmospheric fog effect */}
      <fog attach="fog" args={['#0d1117', 50, 120]} />
    </>
  );
}
