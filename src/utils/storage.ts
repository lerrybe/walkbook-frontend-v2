export function saveItem(key: string, value: string) {
  sessionStorage.setItem(key, value);
}

export function loadItem(key: string) {
  return sessionStorage.getItem(key);
}

export function clearItem(key: string) {
  sessionStorage.removeItem(key);
}
