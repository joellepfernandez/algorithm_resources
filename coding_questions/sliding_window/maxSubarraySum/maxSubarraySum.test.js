const maxSubarraySum = require('./maxSubarraySum');

test('sorted array', () => {
  expect(maxSubarraySum([100, 200, 300, 400], 2)).toEqual(700);
});

test('unsorted array', () => {
    expect(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)).toEqual(39);
});

test('unsorted array with negative numbers', () => {
    expect(maxSubarraySum([-3, 4 ,0, -2, 6, -1], 2)).toEqual(5);
});

test('unsorted array with negative and duplicate numbers', () => {
    expect(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)).toEqual(5);
});

test('size of batch larger than amount of numbers', () => {
    expect(maxSubarraySum([2, 3], 3)).toEqual(null);
});
