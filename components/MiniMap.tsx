'use client';

import { MODULES } from '@/lib/modules';
import { useProgressStore } from '@/lib/store';

export function MiniMap() {
  const { completedModules } = useProgressStore();

  const regionColors = {
    starter: '#58A6FF',
    foundation: '#7B42BC',
    advanced: '#FF9900',
    mastery: '#F85149'
  };

  // Normalize positions for mini-map (scale down and center)
  const normalizePosition = (pos: [number, number, number]) => {
    const scale = 2;
    return {
      x: (pos[0] / scale) + 50,
      y: (pos[2] / scale) + 50
    };
  };

  return (
    <div className="fixed bottom-8 right-8 z-40">
      <div className="backdrop-blur-xl bg-gray-900/95 border border-white/20 rounded-xl p-4 shadow-2xl">
        <h3 className="text-white font-bold text-sm mb-3">World Map</h3>
        
        <div className="relative w-48 h-48 bg-gray-800/50 rounded-lg overflow-hidden">
          {/* Grid lines */}
          <svg className="absolute inset-0 w-full h-full opacity-20">
            <defs>
              <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>

          {/* Modules */}
          {MODULES.map((module) => {
            const pos = normalizePosition(module.position);
            const isCompleted = completedModules.includes(module.id);
            const color = isCompleted ? '#3FB950' : regionColors[module.region];
            
            return (
              <div
                key={module.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all"
                style={{
                  left: `${pos.x}%`,
                  top: `${pos.y}%`
                }}
                title={module.name}
              >
                <div
                  className="w-3 h-3 rounded-full border-2 border-white/50"
                  style={{
                    backgroundColor: color,
                    boxShadow: `0 0 8px ${color}`
                  }}
                />
              </div>
            );
          })}

          {/* Region labels */}
          <div className="absolute top-2 left-2 text-xs font-semibold" style={{ color: regionColors.starter }}>
            Starter
          </div>
          <div className="absolute top-1/2 left-2 text-xs font-semibold" style={{ color: regionColors.foundation }}>
            Foundation
          </div>
          <div className="absolute top-1/2 right-2 text-xs font-semibold" style={{ color: regionColors.advanced }}>
            Advanced
          </div>
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-xs font-semibold" style={{ color: regionColors.mastery }}>
            Mastery
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400"></div>
            <span className="text-gray-400">Completed</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-gray-600"></div>
            <span className="text-gray-400">Locked</span>
          </div>
        </div>
      </div>
    </div>
  );
}
