const averagePair = require('./averagePair');

test('pair equals target average', () => {
  expect(averagePair([1, 2, 3], 2.5)).toBe(true);
});

test('pair equals target average - values include same value', () => {
    expect(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)).toBe(true);
});

test('no pair that equals target average', () => {
    expect(averagePair([-1, 0, 3, 4, 5, 6], 4.1)).toBe(false);
  });

test('no values', () => {
expect(averagePair([], 4)).toBe(false);
});