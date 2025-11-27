import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { ProgressState } from '@/types';

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      completedModules: [],
      currentModule: null,
      progress: 0,
      achievements: [],
      
      unlockModule: (id: string) => {
        set({ currentModule: id });
      },
      
      completeModule: (id: string) => {
        const currentCompleted = get().completedModules;
        if (currentCompleted.includes(id)) return;
        
        const completed = [...currentCompleted, id];
        const progress = (completed.length / 9) * 100;
        set({ 
          completedModules: completed,
          progress,
          currentModule: null
        });
      },
      
      addAchievement: (id: string) => {
        const currentAchievements = get().achievements;
        if (currentAchievements.includes(id)) return;
        
        set({ achievements: [...currentAchievements, id] });
      },
      
      reset: () => {
        set({
          completedModules: [],
          currentModule: null,
          progress: 0,
          achievements: []
        });
      }
    }),
    {
      name: 'terraquest-progress',
      storage: createJSONStorage(() => {
        if (typeof window === 'undefined') {
          return {
            getItem: () => null,
            setItem: () => {},
            removeItem: () => {}
          };
        }
        
        try {
          const test = '__storage_test__';
          localStorage.setItem(test, test);
          localStorage.removeItem(test);
          return localStorage;
        } catch (error) {
          console.warn('localStorage unavailable, using in-memory storage. Progress will not be saved.');
          // Fallback to in-memory storage
          const memoryStorage = new Map<string, string>();
          return {
            getItem: (key: string) => memoryStorage.get(key) || null,
            setItem: (key: string, value: string) => memoryStorage.set(key, value),
            removeItem: (key: string) => memoryStorage.delete(key)
          };
        }
      })
    }
  )
);
