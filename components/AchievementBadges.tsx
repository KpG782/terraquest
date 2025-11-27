'use client';

import { useProgressStore } from '@/lib/store';

const ACHIEVEMENT_DATA: Record<string, { icon: string; title: string; description: string }> = {
  'first-module': {
    icon: '🎯',
    title: 'First Steps',
    description: 'Completed your first module'
  },
  'halfway': {
    icon: '⭐',
    title: 'Halfway There',
    description: 'Completed 5 modules'
  },
  'master': {
    icon: '🏆',
    title: 'Terraform Master',
    description: 'Completed all modules'
  },
  'speed-runner': {
    icon: '⚡',
    title: 'Speed Runner',
    description: 'Completed 3 modules in one session'
  }
};

export function AchievementBadges() {
  const { achievements } = useProgressStore();

  if (achievements.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 max-w-xs">
      <div className="text-text-secondary text-xs font-semibold uppercase tracking-wide mb-1">
        Achievements
      </div>
      {achievements.map((achievementId) => {
        const achievement = ACHIEVEMENT_DATA[achievementId];
        if (!achievement) return null;

        return (
          <div
            key={achievementId}
            className="backdrop-blur-md bg-white/10 border border-white/20 rounded-lg p-3 shadow-lg transition-all duration-300 hover:scale-105 animate-slide-up"
          >
            <div className="flex items-center gap-3">
              <span className="text-3xl">{achievement.icon}</span>
              <div className="flex-1">
                <h4 className="text-text-primary font-semibold text-sm">
                  {achievement.title}
                </h4>
                <p className="text-text-secondary text-xs">
                  {achievement.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
