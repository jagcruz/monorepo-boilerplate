import { isBlank, isEmpty, isObject } from './isBlank';

describe('isEmpty', () => {
  it.each([null, undefined])('should return true for %s', v => {
    expect(isEmpty(v)).toBe(true);
  });

  it.each([
    ['non-empty string', 'Hello'],
    ['non-empty array', [1, 2, 3]],
    ['non-empty object', { key: 'value' }],
    ['number zero', 0],
    ['non-number zero', 123]
  ])('should return false for a %s', (_, v) => {
    expect(isEmpty(v)).toBe(false);
  });
});

describe('isObject', () => {
  it.each([
    ['null', null],
    ['undefined', undefined],
    ['a string', 'Hello'],
    ['a number', 123]
  ])('should return false for %s', (_, v) => {
    expect(isObject(v)).toBe(false);
  });

  it.each([
    ['an array', [1, 2, 3]],
    ['an object', { key: 'value' }]
  ])('should return true for %s', (_, v) => {
    expect(isObject(v)).toBe(true);
  });
});

describe('isBlank', () => {
  it.each([
    ['null', null],
    ['undefined', undefined],
    ['an empty string', ''],
    ['a string with only spaces', '   '],
    ['an empty object', {}],
    ['an empty array', []]
  ])('should return true for %s', (_, v) => {
    expect(isBlank(v)).toBe(true);
  });

  it.each([
    ['non-empty string', 'Hello'],
    ['non-empty array', [1, 2, 3]],
    ['non-empty object', { key: 'value' }],
    ['number zero', 0],
    ['non-number zero', 123]
  ])('should return false for a %s', (_, v) => {
    expect(isBlank(v)).toBe(false);
  });
});
