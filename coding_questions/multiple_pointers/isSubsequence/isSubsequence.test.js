const isSubsequence = require('./isSubsequence');

test('string1 is first word in string2', () => {
  expect(isSubsequence('hello', 'hello world')).toBe(true);
});

test('string2 has same sequence of letters as string2 with one extra letter', () => {
    expect(isSubsequence('sing', 'string')).toBe(true);
});

test('string2 has same sequence of letters as string2 with many extra letter', () => {
  expect(isSubsequence('abc', 'abracadabra')).toBe(true);
});

test('string2 has same letters as string1 not in sequence', () => {
  expect(isSubsequence('abc', 'acb')).toBe(false);
});

test('string2 has one letter that string1 also contains', () => {
  expect(isSubsequence('a', 'a')).toBe(true);
});

test('string1 is an empty string', () => {
  expect(isSubsequence(' ', 'a')).toBe(false);
});