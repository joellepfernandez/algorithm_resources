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

test('no duplicates with various primitive data types ', () => {
    expect(areThereDuplicates('a', 1, 'c', 2, 'hello', false)).toBe(false);
});

test('duplicates with various primitive data types ', () => {
    expect(areThereDuplicates('a', 1, false, 'c', 2, 'hello', true, false)).toBe(true);
});
