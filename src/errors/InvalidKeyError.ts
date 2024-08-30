export class InvalidKeyError extends Error {
  constructor(key: string) {
    super(`Invalid key: "${key}" must be a non-empty string.`);
    this.name = 'InvalidKeyError';
  }
}
