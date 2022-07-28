export function saveItem(key: string, value: string) {
  localStorage.setItem(key, value);
}

export function loadItem(key: string) {
  return localStorage.getItem(key);
}

export function clearItem(key: string) {
  localStorage.removeItem(key);
}
