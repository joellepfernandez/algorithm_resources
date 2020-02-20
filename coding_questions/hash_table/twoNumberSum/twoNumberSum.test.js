const twoNumberSum = require('./twoNumberSum');

test('two numbers', () => {
    expect(twoNumberSum([4, 6], 10)).toEqual([4, 6]);
});

test('three numbers', () => {
    expect(twoNumberSum([4, 6, 1], 5)).toEqual([1, 4]);
});

test('three numbers', () => {
    expect(twoNumberSum([4, 6, 1, -3], 3)).toEqual([-3, 6]);
});

test('sorted', () => {
    expect(twoNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9], 17)).toEqual([8, 9]);
});

test('negative and positive numbers not sorted', () => {
    expect(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10)).toEqual([-1, 11]);
});

test('target sum not reached', () => {
    expect(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 15)).toEqual([]);
});