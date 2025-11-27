export function isLocalStorageAvailable(): boolean {
  try {
    const test = '__localStorage_test__';
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch (e) {
    return false;
  }
}

export function createStorageAdapter() {
  if (typeof window === 'undefined') {
    // Server-side: use no-op storage
    return {
      getItem: () => null,
      setItem: () => {},
      removeItem: () => {},
      warning: null
    };
  }

  if (isLocalStorageAvailable()) {
    return {
      getItem: (key: string) => localStorage.getItem(key),
      setItem: (key: string, value: string) => localStorage.setItem(key, value),
      removeItem: (key: string) => localStorage.removeItem(key),
      warning: null
    };
  }
  
  // In-memory fallback
  const memoryStorage = new Map<string, string>();
  return {
    getItem: (key: string) => memoryStorage.get(key) || null,
    setItem: (key: string, value: string) => memoryStorage.set(key, value),
    removeItem: (key: string) => memoryStorage.delete(key),
    warning: 'Progress will not be saved'
  };
}
