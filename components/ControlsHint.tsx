'use client';

import { useState, useEffect } from 'react';
import { FaMouse, FaTimes } from 'react-icons/fa';

export function ControlsHint() {
  const [isVisible, setIsVisible] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    // Check if user has seen the hint before
    const seen = localStorage.getItem('controlsHintSeen');
    if (seen) {
      setIsVisible(false);
    }

    // Hide after user interacts
    const handleInteraction = () => {
      if (!hasInteracted) {
        setHasInteracted(true);
        setTimeout(() => {
          setIsVisible(false);
          localStorage.setItem('controlsHintSeen', 'true');
        }, 2000);
      }
    };

    window.addEventListener('mousedown', handleInteraction);
    window.addEventListener('wheel', handleInteraction);
    window.addEventListener('touchstart', handleInteraction);

    return () => {
      window.removeEventListener('mousedown', handleInteraction);
      window.removeEventListener('wheel', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
    };
  }, [hasInteracted]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40 animate-fade-in">
      <div className="backdrop-blur-xl bg-gray-900/95 border border-white/20 rounded-xl p-6 shadow-2xl max-w-md">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <FaMouse className="text-terraform-purple text-2xl" />
            <h3 className="text-white font-bold text-lg">Camera Controls</h3>
          </div>
          <button
            onClick={() => {
              setIsVisible(false);
              localStorage.setItem('controlsHintSeen', 'true');
            }}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaTimes />
          </button>
        </div>
        
        <div className="space-y-3 text-sm">
          <div className="flex items-center gap-3">
            <div className="w-32 text-gray-400">Left Click + Drag</div>
            <div className="text-white">Rotate view</div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-32 text-gray-400">Right Click + Drag</div>
            <div className="text-white">Pan camera</div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-32 text-gray-400">Mouse Wheel</div>
            <div className="text-white">Zoom in/out</div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-32 text-gray-400">Click Module</div>
            <div className="text-white">View details</div>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-white/10">
          <p className="text-xs text-gray-400 text-center">
            Explore the world map to discover all learning regions
          </p>
        </div>
      </div>
    </div>
  );
}
