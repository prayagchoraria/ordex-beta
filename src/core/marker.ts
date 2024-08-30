import { normalizeKey } from '../utils/normalizeKey';
import { validateKey } from '../utils/validate';

interface MarkerConfig {
  caseSensitive?: boolean;
}

export class Marker<T> {
  private index: Map<string, T>;
  private config: MarkerConfig;

  constructor(config: MarkerConfig = {}) {
    this.index = new Map();
    this.config = { caseSensitive: false, ...config };
  }

  add(key: string, value: T): void;
  add(items: { key: string; value: T }[]): void;
  add(keyOrItems: string | { key: string; value: T }[], value?: T): void {
    if (Array.isArray(keyOrItems)) {
      keyOrItems.forEach(({ key, value }) => {
        validateKey(key);
        this.index.set(normalizeKey(key, this.config.caseSensitive), value);
      });
    } else {
      validateKey(keyOrItems);
      this.index.set(
        normalizeKey(keyOrItems, this.config.caseSensitive),
        value!,
      );
    }
  }

  get(key: string): T | undefined {
    validateKey(key);
    return this.index.get(normalizeKey(key, this.config.caseSensitive));
  }

  remove(key: string): boolean {
    validateKey(key);
    return this.index.delete(normalizeKey(key, this.config.caseSensitive));
  }

  clear(): void {
    this.index.clear();
  }
}
