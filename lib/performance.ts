import { useEffect, useState } from 'react';

export function useVisibilityPause() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsVisible(document.visibilityState === 'visible');
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  return isVisible;
}

export function disposeObject(obj: any) {
  if (!obj) return;

  if (obj.geometry) {
    obj.geometry.dispose();
  }

  if (obj.material) {
    if (Array.isArray(obj.material)) {
      obj.material.forEach((material: any) => material.dispose());
    } else {
      obj.material.dispose();
    }
  }

  if (obj.texture) {
    obj.texture.dispose();
  }

  if (obj.children) {
    obj.children.forEach((child: any) => disposeObject(child));
  }
}
