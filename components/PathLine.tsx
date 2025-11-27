'use client';

import { Line } from '@react-three/drei';
import { Module } from '@/types';

interface PathLineProps {
  start: Module;
  end: Module;
}

export function PathLine({ start, end }: PathLineProps) {
  const points = [
    start.position,
    end.position
  ];

  return (
    <Line
      points={points}
      color="#30363d"
      lineWidth={2}
      dashed
      dashSize={0.5}
      gapSize={0.3}
    />
  );
}
