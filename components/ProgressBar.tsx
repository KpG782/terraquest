'use client';

import { useProgressStore } from '@/lib/store';
import { MODULES } from '@/lib/modules';
import { FaTrophy, FaFire } from 'react-icons/fa';

export function ProgressBar() {
  const { progress, completedModules } = useProgressStore();
  
  const totalPoints = MODULES.reduce((sum, module) => 
    sum + module.content.challenges.reduce((s, c) => s + c.points, 0), 0
  );
  
  const earnedPoints = MODULES
    .filter(m => completedModules.includes(m.id))
    .reduce((sum, module) => 
      sum + module.content.challenges.reduce((s, c) => s + c.points, 0), 0
    );

  const regionProgress = {
    starter: MODULES.filter(m => m.region === 'starter' && completedModules.includes(m.id)).length,
    foundation: MODULES.filter(m => m.region === 'foundation' && completedModules.includes(m.id)).length,
    advanced: MODULES.filter(m => m.region === 'advanced' && completedModules.includes(m.id)).length,
    mastery: MODULES.filter(m => m.region === 'mastery' && completedModules.includes(m.id)).length,
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-bg-darker/95 backdrop-blur-md border-b border-border-subtle shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <img src="/terraform.svg" alt="Terraform" className="w-8 h-8" />
              <h2 className="text-text-primary font-bold text-lg">TerraQuest Journey</h2>
            </div>
            <div className="flex items-center gap-2 text-yellow-400">
              <FaTrophy />
              <span className="font-semibold">{earnedPoints.toLocaleString()}</span>
              <span className="text-text-secondary text-sm">/ {totalPoints.toLocaleString()} pts</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              <span className="text-sm text-text-secondary">Starter {regionProgress.starter}/2</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-purple-500"></div>
              <span className="text-sm text-text-secondary">Foundation {regionProgress.foundation}/2</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-orange-500"></div>
              <span className="text-sm text-text-secondary">Advanced {regionProgress.advanced}/2</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <span className="text-sm text-text-secondary">Mastery {regionProgress.mastery}/3</span>
            </div>
          </div>
          <span className="text-text-secondary text-sm font-medium">
            {completedModules.length} / {MODULES.length} Modules
          </span>
        </div>
        <div className="relative w-full bg-card-dark rounded-full h-4 overflow-hidden shadow-inner">
          <div
            className="h-full bg-gradient-to-r from-blue-500 via-purple-500 via-orange-500 to-red-500 transition-all duration-700 ease-out relative"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
          </div>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center gap-2 text-terraform-purple">
            <FaFire />
            <span className="text-sm font-medium">{Math.round(progress)}% Complete</span>
          </div>
          {progress === 100 && (
            <span className="text-success-green text-sm font-bold animate-pulse">
              🎉 Journey Complete!
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
