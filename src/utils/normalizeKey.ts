export function normalizeKey(
  key: string,
  caseSensitive: boolean = false,
): string {
  return caseSensitive ? key : key.toLowerCase();
}
