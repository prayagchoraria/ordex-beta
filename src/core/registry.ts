import { validateDivision } from '../utils/validate';

export class Registry<T> {
  private divisions: Map<string, T[]>;

  constructor() {
    this.divisions = new Map();
  }

  addToDivision(division: string, item: T): void {
    validateDivision(division);
    const items = this.divisions.get(division) || [];
    items.push(item);
    this.divisions.set(division, items);
  }

  getFromDivision(division: string): T[] | undefined {
    validateDivision(division);
    return this.divisions.get(division);
  }

  removeFromDivision(division: string, item: T): void {
    validateDivision(division);
    const items = this.divisions.get(division);
    if (items) {
      this.divisions.set(
        division,
        items.filter((i) => i !== item),
      );
    }
  }

  clearDivision(division: string): void {
    validateDivision(division);
    this.divisions.delete(division);
  }

  clearAll(): void {
    this.divisions.clear();
  }
}
