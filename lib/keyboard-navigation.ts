import { useEffect, useState } from 'react';

export function useKeyboardNavigation(
  itemCount: number,
  onSelect: (index: number) => void,
  enabled: boolean = true
) {
  const [focusedIndex, setFocusedIndex] = useState(0);

  useEffect(() => {
    if (!enabled) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Tab':
          e.preventDefault();
          setFocusedIndex((prev) => {
            const next = e.shiftKey ? prev - 1 : prev + 1;
            if (next < 0) return itemCount - 1;
            if (next >= itemCount) return 0;
            return next;
          });
          break;
        
        case 'Enter':
        case ' ':
          e.preventDefault();
          onSelect(focusedIndex);
          break;
        
        case 'ArrowRight':
        case 'ArrowDown':
          e.preventDefault();
          setFocusedIndex((prev) => (prev + 1) % itemCount);
          break;
        
        case 'ArrowLeft':
        case 'ArrowUp':
          e.preventDefault();
          setFocusedIndex((prev) => (prev - 1 + itemCount) % itemCount);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [enabled, focusedIndex, itemCount, onSelect]);

  return { focusedIndex, setFocusedIndex };
}
