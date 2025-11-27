'use client';

import { Environment, Stars } from '@react-three/drei';

interface SceneProps {
  particleCount?: number;
}

export function Scene({ particleCount = 5000 }: SceneProps) {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} />
      
      {/* Environment */}
      <Environment preset="city" />
      
      {/* Background */}
      <Stars radius={100} depth={50} count={particleCount} factor={4} saturation={0} fade speed={1} />
    </>
  );
}
