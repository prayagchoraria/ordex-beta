import { validateKey, validateDivision } from '../validate';

describe('validateKey', () => {
  test('should throw an error for an empty string key', () => {
    expect(() => validateKey('')).toThrow(
      'Invalid key: Key must be a non-empty string.',
    );
  });

  test('should throw an error for a non-string key', () => {
    expect(() => validateKey(123 as any)).toThrow(
      'Invalid key: Key must be a non-empty string.',
    );
  });

  test('should not throw an error for a valid string key', () => {
    expect(() => validateKey('validKey')).not.toThrow();
  });
});

describe('validateDivision', () => {
  test('should throw an error for an empty string division', () => {
    expect(() => validateDivision('')).toThrow(
      'Invalid division: Division must be a non-empty string.',
    );
  });

  test('should throw an error for a non-string division', () => {
    expect(() => validateDivision(123 as any)).toThrow(
      'Invalid division: Division must be a non-empty string.',
    );
  });

  test('should not throw an error for a valid string division', () => {
    expect(() => validateDivision('validDivision')).not.toThrow();
  });
});
