'use client';

import { Module } from '@/types';

interface GlassmorphismCardProps {
  module: Module;
  position: { x: number; y: number };
  isVisible: boolean;
  status: 'locked' | 'unlocked' | 'completed';
}

export function GlassmorphismCard({ 
  module, 
  position, 
  isVisible,
  status 
}: GlassmorphismCardProps) {
  if (!isVisible) return null;

  const statusColors = {
    locked: 'text-text-muted',
    unlocked: 'text-terraform-purple',
    completed: 'text-success-green'
  };

  const statusLabels = {
    locked: 'Locked',
    unlocked: 'Available',
    completed: 'Completed'
  };

  return (
    <div
      className="fixed pointer-events-none z-50 transition-opacity duration-300"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -120%)'
      }}
    >
      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-lg p-4 shadow-xl min-w-[250px] max-w-[300px]">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-3xl">{module.icon}</span>
          <div className="flex-1">
            <h3 className="text-text-primary font-semibold text-lg">{module.name}</h3>
            <span className={`text-sm ${statusColors[status]}`}>
              {statusLabels[status]}
            </span>
          </div>
        </div>
        <p className="text-text-secondary text-sm">{module.description}</p>
        
        {status === 'locked' && module.prerequisites.length > 0 && (
          <div className="mt-3 pt-3 border-t border-white/10">
            <p className="text-xs text-text-muted">
              Complete previous modules to unlock
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
