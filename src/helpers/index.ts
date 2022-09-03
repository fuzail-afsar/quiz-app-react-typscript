export function getKeyByValue<T>(enu: T, value: string) {
  return Object.entries(enu).find(([_, val]) => val === value)?.[0];
}
