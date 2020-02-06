const areThereDuplicates = require('./areThereDuplicates');

test('no duplicates', () => {
    expect(areThereDuplicates(1, 2, 3)).toBe(false);
});

test('duplicate number', () => {
    expect(areThereDuplicates(1, 2, 2)).toBe(true);
});

test('duplicate string', () => {
    expect(areThereDuplicates('a', 'b', 'c', 'a')).toBe(true);
});