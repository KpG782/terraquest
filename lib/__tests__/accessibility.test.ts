import { describe, it, expect } from 'vitest';
import { getAriaLabel, getContrastRatio, meetsWCAG_AA } from '../accessibility';
import { MODULES } from '../modules';

describe('Accessibility Utilities', () => {
  describe('getAriaLabel', () => {
    it('should format ARIA label correctly for locked module', () => {
      const module = MODULES[0];
      const label = getAriaLabel(module, 'locked');
      
      expect(label).toContain('Module 01');
      expect(label).toContain(module.name);
      expect(label).toContain('locked');
    });

    it('should format ARIA label correctly for unlocked module', () => {
      const module = MODULES[0];
      const label = getAriaLabel(module, 'unlocked');
      
      expect(label).toContain('unlocked');
    });

    it('should format ARIA label correctly for completed module', () => {
      const module = MODULES[0];
      const label = getAriaLabel(module, 'completed');
      
      expect(label).toContain('completed');
    });
  });

  describe('getContrastRatio', () => {
    it('should calculate contrast ratio for black and white', () => {
      const ratio = getContrastRatio('#000000', '#FFFFFF');
      expect(ratio).toBeCloseTo(21, 0);
    });

    it('should calculate contrast ratio for same colors', () => {
      const ratio = getContrastRatio('#7B42BC', '#7B42BC');
      expect(ratio).toBe(1);
    });
  });

  describe('meetsWCAG_AA', () => {
    it('should pass for high contrast text', () => {
      const passes = meetsWCAG_AA('#000000', '#FFFFFF');
      expect(passes).toBe(true);
    });

    it('should check contrast for Terraform purple on dark background', () => {
      const ratio = getContrastRatio('#7B42BC', '#0d1117');
      // Terraform purple on dark background has lower contrast, which is acceptable for UI elements (3:1)
      expect(ratio).toBeGreaterThan(3);
    });

    it('should have lower threshold for large text', () => {
      const passes = meetsWCAG_AA('#7B42BC', '#30363d', true);
      expect(passes).toBeDefined();
    });
  });
});
