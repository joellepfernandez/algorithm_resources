const findLongestSubstring = require('./findLongestSubstring');

test('empty string', () => {
    expect(findLongestSubstring('')).toBe(0);
})

test('mutlitples at the end', () => {
    expect(findLongestSubstring('rithmschool')).toBe(7);
})

test('longest substring at the end', () => {
    expect(findLongestSubstring('thisisawesome')).toBe(6);
})

test('longest substring in the beginning', () => {
    expect(findLongestSubstring('longestsubstring')).toBe(8);
})

test('same letters', () => {
    expect(findLongestSubstring('bbbbbb')).toBe(1);
})