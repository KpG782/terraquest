'use client';

import { Module } from '@/types';
import { ModuleIcon } from './ModuleIcon';
import { FaClock, FaBook, FaTrophy, FaLock, FaCheckCircle } from 'react-icons/fa';

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
    locked: 'text-gray-500',
    unlocked: 'text-purple-400',
    completed: 'text-green-400'
  };

  const statusLabels = {
    locked: 'Locked',
    unlocked: 'Available',
    completed: 'Completed'
  };

  const regionColors = {
    starter: 'bg-blue-500/20 border-blue-400/30',
    foundation: 'bg-purple-500/20 border-purple-400/30',
    advanced: 'bg-orange-500/20 border-orange-400/30',
    mastery: 'bg-red-500/20 border-red-400/30'
  };

  const totalPoints = module.content.challenges.reduce((sum, c) => sum + c.points, 0);

  return (
    <div
      className="fixed pointer-events-none z-50 transition-opacity duration-300"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -120%)'
      }}
    >
      <div className="backdrop-blur-xl bg-gray-900/90 border border-white/20 rounded-xl p-5 shadow-2xl min-w-[320px] max-w-[380px]">
        {/* Header */}
        <div className="flex items-start gap-4 mb-3">
          <div className="text-4xl mt-1">
            <ModuleIcon iconName={module.icon} size={40} className={statusColors[status]} />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-white font-bold text-lg">{module.name}</h3>
              {status === 'completed' && <FaCheckCircle className="text-green-400" size={16} />}
              {status === 'locked' && <FaLock className="text-gray-500" size={14} />}
            </div>
            <span className={`text-xs font-semibold uppercase tracking-wide ${statusColors[status]}`}>
              {statusLabels[status]}
            </span>
          </div>
        </div>

        {/* Region Badge */}
        <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${regionColors[module.region]}`}>
          {module.region.charAt(0).toUpperCase() + module.region.slice(1)} Region
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm mb-4 leading-relaxed">{module.description}</p>
        
        {/* Stats */}
        {status !== 'locked' && (
          <div className="grid grid-cols-3 gap-3 mb-4">
            <div className="bg-white/5 rounded-lg p-2 text-center">
              <FaClock className="text-blue-400 mx-auto mb-1" size={16} />
              <div className="text-xs text-gray-400">Duration</div>
              <div className="text-sm font-semibold text-white">{module.estimatedTime}</div>
            </div>
            <div className="bg-white/5 rounded-lg p-2 text-center">
              <FaBook className="text-purple-400 mx-auto mb-1" size={16} />
              <div className="text-xs text-gray-400">Lessons</div>
              <div className="text-sm font-semibold text-white">{module.content.lessons.length}</div>
            </div>
            <div className="bg-white/5 rounded-lg p-2 text-center">
              <FaTrophy className="text-yellow-400 mx-auto mb-1" size={16} />
              <div className="text-xs text-gray-400">Points</div>
              <div className="text-sm font-semibold text-white">{totalPoints}</div>
            </div>
          </div>
        )}

        {/* Content Preview */}
        {status !== 'locked' && (
          <div className="space-y-3">
            <div>
              <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Lessons</h4>
              <ul className="space-y-1">
                {module.content.lessons.slice(0, 2).map((lesson) => (
                  <li key={lesson.id} className="text-sm text-gray-300 flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>{lesson.title}</span>
                  </li>
                ))}
                {module.content.lessons.length > 2 && (
                  <li className="text-xs text-gray-500 ml-4">+{module.content.lessons.length - 2} more</li>
                )}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Challenges</h4>
              <ul className="space-y-1">
                {module.content.challenges.slice(0, 2).map((challenge) => (
                  <li key={challenge.id} className="text-sm text-gray-300 flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">★</span>
                    <span>{challenge.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
        
        {/* Locked State */}
        {status === 'locked' && module.prerequisites.length > 0 && (
          <div className="mt-4 pt-4 border-t border-white/10">
            <p className="text-xs text-gray-400 flex items-center gap-2">
              <FaLock size={12} />
              Complete previous modules to unlock
            </p>
          </div>
        )}

        {/* Click to explore */}
        {status !== 'locked' && (
          <div className="mt-4 pt-4 border-t border-white/10">
            <p className="text-xs text-center text-gray-400">
              Click to explore this module
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
