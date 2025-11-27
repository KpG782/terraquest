import { describe, it, expect, beforeEach } from 'vitest';
import { useProgressStore } from '../store';

describe('Progress Store', () => {
  beforeEach(() => {
    const store = useProgressStore.getState();
    store.reset();
  });

  describe('completeModule', () => {
    it('should add module to completed list', () => {
      const { completeModule, completedModules } = useProgressStore.getState();
      completeModule('01-foundation');
      
      const updatedState = useProgressStore.getState();
      expect(updatedState.completedModules).toContain('01-foundation');
    });

    it('should calculate progress correctly', () => {
      const { completeModule } = useProgressStore.getState();
      completeModule('01-foundation');
      
      const updatedState = useProgressStore.getState();
      expect(updatedState.progress).toBeCloseTo(11.11, 1);
    });

    it('should not add duplicate modules', () => {
      const { completeModule } = useProgressStore.getState();
      completeModule('01-foundation');
      completeModule('01-foundation');
      
      const updatedState = useProgressStore.getState();
      expect(updatedState.completedModules).toHaveLength(1);
    });

    it('should calculate 100% progress when all modules complete', () => {
      const { completeModule } = useProgressStore.getState();
      const allModules = [
        '01-foundation', '02-overview', '03-basics', '04-variables',
        '05-features', '06-modules', '07-multi-env', '08-testing', '09-workflow'
      ];
      
      allModules.forEach(id => completeModule(id));
      
      const updatedState = useProgressStore.getState();
      expect(updatedState.progress).toBe(100);
    });
  });

  describe('addAchievement', () => {
    it('should add achievement to list', () => {
      const { addAchievement } = useProgressStore.getState();
      addAchievement('first-module');
      
      const updatedState = useProgressStore.getState();
      expect(updatedState.achievements).toContain('first-module');
    });

    it('should not add duplicate achievements', () => {
      const { addAchievement } = useProgressStore.getState();
      addAchievement('first-module');
      addAchievement('first-module');
      
      const updatedState = useProgressStore.getState();
      expect(updatedState.achievements).toHaveLength(1);
    });
  });

  describe('reset', () => {
    it('should reset all state to initial values', () => {
      const store = useProgressStore.getState();
      store.completeModule('01-foundation');
      store.addAchievement('first-module');
      store.reset();
      
      expect(store.completedModules).toHaveLength(0);
      expect(store.progress).toBe(0);
      expect(store.achievements).toHaveLength(0);
      expect(store.currentModule).toBeNull();
    });
  });
});
