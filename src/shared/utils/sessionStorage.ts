export function getSessionStorage<T>(key: string, defaultValue: T): T {
  if (typeof window === 'undefined') return defaultValue;
  const stored = window.sessionStorage.getItem(key);
  if (!stored) return defaultValue;
  try {
    return JSON.parse(stored) as T;
  } catch {
    return defaultValue;
  }
}

export function setSessionStorage<T>(key: string, value: T) {
  if (typeof window === 'undefined') return;
  window.sessionStorage.setItem(key, JSON.stringify(value));
}

export function removeSessionStorage(key: string) {
  if (typeof window === 'undefined') return;
  window.sessionStorage.removeItem(key);
}
