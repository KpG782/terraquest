import { describe, it, expect } from 'vitest';
import { getModuleById, getUnlockedModules, getNextModule, MODULES } from '../modules';

describe('Module Helper Functions', () => {
  describe('getModuleById', () => {
    it('should return module when ID exists', () => {
      const module = getModuleById('01-foundation');
      expect(module).toBeDefined();
      expect(module?.name).toBe('Foundation Island');
    });

    it('should return undefined when ID does not exist', () => {
      const module = getModuleById('non-existent');
      expect(module).toBeUndefined();
    });
  });

  describe('getUnlockedModules', () => {
    it('should return first module when no modules completed', () => {
      const unlocked = getUnlockedModules([]);
      expect(unlocked).toHaveLength(1);
      expect(unlocked[0].id).toBe('01-foundation');
    });

    it('should return modules with met prerequisites', () => {
      const unlocked = getUnlockedModules(['01-foundation']);
      expect(unlocked.length).toBeGreaterThan(1);
      expect(unlocked.some(m => m.id === '02-overview')).toBe(true);
    });

    it('should not return modules with unmet prerequisites', () => {
      const unlocked = getUnlockedModules(['01-foundation']);
      expect(unlocked.some(m => m.id === '03-basics')).toBe(false);
    });
  });

  describe('getNextModule', () => {
    it('should return next module when prerequisites are met', () => {
      const next = getNextModule('01-foundation', ['01-foundation']);
      expect(next).toBeDefined();
      expect(next?.id).toBe('02-overview');
    });

    it('should return null when prerequisites are not met', () => {
      const next = getNextModule('01-foundation', []);
      expect(next).toBeNull();
    });

    it('should return null for last module', () => {
      const next = getNextModule('09-workflow', ['01-foundation', '02-overview', '03-basics', '04-variables', '05-features', '06-modules', '07-multi-env', '08-testing']);
      expect(next).toBeNull();
    });
  });
});
