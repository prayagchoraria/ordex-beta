import { Marker } from '../marker';

describe('Marker', () => {
  test('should add and retrieve an item with case-insensitive keys', () => {
    const marker = new Marker<string>();
    marker.add('Key1', 'value1');
    expect(marker.get('key1')).toBe('value1');
    expect(marker.get('KEY1')).toBe('value1');
  });

  test('should handle case sensitivity based on config', () => {
    const marker = new Marker<string>({ caseSensitive: true });
    marker.add('Key1', 'value1');
    expect(marker.get('key1')).toBeUndefined();
    expect(marker.get('Key1')).toBe('value1');
  });

  test('should throw an error when adding an invalid key', () => {
    const marker = new Marker<string>();
    expect(() => marker.add('', 'value1')).toThrow(
      'Invalid key: Key must be a non-empty string.',
    );
  });

  test('should remove an item', () => {
    const marker = new Marker<string>();
    marker.add('key1', 'value1');
    marker.remove('key1');
    expect(marker.get('key1')).toBeUndefined();
  });

  test('should clear all items', () => {
    const marker = new Marker<string>();
    marker.add('key1', 'value1');
    marker.add('key2', 'value2');
    marker.clear();
    expect(marker.get('key1')).toBeUndefined();
    expect(marker.get('key2')).toBeUndefined();
  });

  test('should add multiple items at once', () => {
    const marker = new Marker<string>();
    marker.add([
      { key: 'key1', value: 'value1' },
      { key: 'key2', value: 'value2' },
    ]);
    expect(marker.get('key1')).toBe('value1');
    expect(marker.get('key2')).toBe('value2');
  });
});
