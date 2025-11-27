import { Module } from '@/types';

export function getAriaLabel(
  module: Module,
  status: 'locked' | 'unlocked' | 'completed'
): string {
  const moduleNumber = module.id.split('-')[0];
  const statusText = status === 'locked' ? 'locked' : status === 'completed' ? 'completed' : 'unlocked';
  
  return `Module ${moduleNumber}: ${module.name}, Status: ${statusText}`;
}

export function getContrastRatio(color1: string, color2: string): number {
  const getLuminance = (hex: string) => {
    const rgb = parseInt(hex.slice(1), 16);
    const r = ((rgb >> 16) & 0xff) / 255;
    const g = ((rgb >> 8) & 0xff) / 255;
    const b = (rgb & 0xff) / 255;
    
    const [rs, gs, bs] = [r, g, b].map(c =>
      c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
    );
    
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
  };
  
  const l1 = getLuminance(color1);
  const l2 = getLuminance(color2);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  
  return (lighter + 0.05) / (darker + 0.05);
}

export function meetsWCAG_AA(textColor: string, bgColor: string, isLargeText = false): boolean {
  const ratio = getContrastRatio(textColor, bgColor);
  return isLargeText ? ratio >= 3 : ratio >= 4.5;
}

export function meetsWCAG_AAA(textColor: string, bgColor: string, isLargeText = false): boolean {
  const ratio = getContrastRatio(textColor, bgColor);
  return isLargeText ? ratio >= 4.5 : ratio >= 7;
}
