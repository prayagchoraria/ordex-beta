import { InvalidKeyError } from '../errors/InvalidKeyError';
import { InvalidDivisionError } from '../errors/InvalidDivisionError';

export function validateKey(key: string): void {
  if (typeof key !== 'string' || key.trim() === '') {
    throw new InvalidKeyError(key);
  }
}

export function validateDivision(division: string): void {
  if (typeof division !== 'string' || division.trim() === '') {
    throw new InvalidDivisionError(division);
  }
}
