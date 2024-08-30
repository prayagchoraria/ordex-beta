import { normalizeKey } from '../normalizeKey';

describe('normalizeKey', () => {
  test('should normalize key to lowercase when caseSensitive is false', () => {
    expect(normalizeKey('TeStKey')).toBe('testkey');
  });

  test('should return key as is when caseSensitive is true', () => {
    expect(normalizeKey('TeStKey', true)).toBe('TeStKey');
  });
});
