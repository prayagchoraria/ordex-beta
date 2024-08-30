export class InvalidDivisionError extends Error {
  constructor(division: string) {
    super(`Invalid division: "${division}" must be a non-empty string.`);
    this.name = 'InvalidDivisionError';
  }
}
