'use client';

import { useProgressStore } from '@/lib/store';

export function ProgressBar() {
  const { progress, completedModules } = useProgressStore();

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-bg-darker/80 backdrop-blur-sm border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-text-primary font-semibold">Your Terraform Journey</h2>
          <span className="text-text-secondary text-sm">
            {completedModules.length} / 9 Modules Complete
          </span>
        </div>
        <div className="w-full bg-card-dark rounded-full h-3 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-terraform-purple to-terraform-purple-light transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mt-1 text-right">
          <span className="text-terraform-purple text-sm font-medium">
            {Math.round(progress)}%
          </span>
        </div>
      </div>
    </div>
  );
}
