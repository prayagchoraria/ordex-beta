import { Registry } from '../registry';

describe('Registry', () => {
  test('should add and retrieve items from a division', () => {
    const organizer = new Registry<string>();
    organizer.addToDivision('division1', 'item1');
    organizer.addToDivision('division1', 'item2');
    expect(organizer.getFromDivision('division1')).toEqual(['item1', 'item2']);
  });

  test('should throw an error when adding to an invalid division', () => {
    const organizer = new Registry<string>();
    expect(() => organizer.addToDivision('', 'item1')).toThrow(
      'Invalid division: Division must be a non-empty string.',
    );
  });

  test('should remove an item from a division', () => {
    const organizer = new Registry<string>();
    organizer.addToDivision('division1', 'item1');
    organizer.addToDivision('division1', 'item2');
    organizer.removeFromDivision('division1', 'item1');
    expect(organizer.getFromDivision('division1')).toEqual(['item2']);
  });

  test('should clear a division', () => {
    const organizer = new Registry<string>();
    organizer.addToDivision('division1', 'item1');
    organizer.clearDivision('division1');
    expect(organizer.getFromDivision('division1')).toBeUndefined();
  });

  test('should clear all divisions', () => {
    const organizer = new Registry<string>();
    organizer.addToDivision('division1', 'item1');
    organizer.addToDivision('division2', 'item2');
    organizer.clearAll();
    expect(organizer.getFromDivision('division1')).toBeUndefined();
    expect(organizer.getFromDivision('division2')).toBeUndefined();
  });
});
