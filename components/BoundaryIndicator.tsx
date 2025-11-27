'use client';

import { useEffect, useState } from 'react';
import { FaCompass } from 'react-icons/fa';

interface BoundaryIndicatorProps {
  direction?: 'north' | 'south' | 'east' | 'west' | null;
}

export function BoundaryIndicator({ direction }: BoundaryIndicatorProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (direction) {
      setIsVisible(true);
      const timer = setTimeout(() => setIsVisible(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [direction]);

  if (!isVisible || !direction) return null;

  const messages = {
    north: 'Reached northern boundary',
    south: 'Reached southern boundary',
    east: 'Reached eastern boundary',
    west: 'Reached western boundary'
  };

  const positions = {
    north: 'top-24 left-1/2 -translate-x-1/2',
    south: 'bottom-24 left-1/2 -translate-x-1/2',
    east: 'right-24 top-1/2 -translate-y-1/2',
    west: 'left-24 top-1/2 -translate-y-1/2'
  };

  return (
    <div className={`fixed ${positions[direction]} z-30 animate-fade-in`}>
      <div className="backdrop-blur-md bg-gray-900/80 border border-white/20 rounded-lg px-4 py-2 shadow-xl flex items-center gap-2">
        <FaCompass className="text-terraform-purple" />
        <span className="text-white text-sm font-medium">{messages[direction]}</span>
      </div>
    </div>
  );
}
