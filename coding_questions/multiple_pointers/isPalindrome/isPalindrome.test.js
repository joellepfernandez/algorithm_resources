const isPalindrome = require('./isPalindrome');

test('basic palindrome', () => {
    expect(isPalindrome('aba')).toBe(true);
});

test('Longer Palindrome', () => {
    expect(isPalindrome('abababa')).toBe(true);
});

test('Palindrome with more letters', () => {
    expect(isPalindrome('abcdeaedcba')).toBe(true);
});

test('Palindrome with more letters and numbers', () => {
    expect(isPalindrome('a1b2c3d4e5a5e4d3c2b1a')).toBe(true);
});

test('Palindrome with more letters, numbers, and punctuation', () => {
    expect(isPalindrome('a1b2c3d4e5.a.5e4d3c2b1a')).toBe(true);
});