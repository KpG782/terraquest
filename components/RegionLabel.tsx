'use client';

import { Text } from '@react-three/drei';

interface RegionLabelProps {
  position: [number, number, number];
  text: string;
  color: string;
}

export function RegionLabel({ position, text, color }: RegionLabelProps) {
  return (
    <Text
      position={position}
      fontSize={0.8}
      color={color}
      anchorX="center"
      anchorY="middle"
      outlineWidth={0.08}
      outlineColor="#000000"
      letterSpacing={0.05}
    >
      {text.toUpperCase()}
    </Text>
  );
}
