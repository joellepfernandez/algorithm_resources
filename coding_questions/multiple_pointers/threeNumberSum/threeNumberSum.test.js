const threeNumberSum = require('./threeNumberSum');

test('exact sum to targetSum', () => {
    expect(threeNumberSum([1, 2, 3], 6)).toEqual([[1, 2, 3]]);
});

test('does not equal targetSum', () => {
    expect(threeNumberSum([1, 2, 3], 7)).toEqual([]);
});

test('not enough numbers to sum', () => {
    expect(threeNumberSum([1, 2], 7)).toEqual([]);
});

test('unsorted array of negative and positive numbers', () => {
    expect(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0)).toEqual([[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]);
});