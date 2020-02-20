const canMakePalindrome = require('./canMakePalindrome');

test('can make a palindrome', () => {
    expect(canMakePalindrome('madam')).toBe(true);
});

test('cannot make a palindrome', () => {
    expect(canMakePalindrome('hello')).toBe(false);
});

test('has spaces and can make a palindrome', () => {
    expect(canMakePalindrome('no lemons, no melon')).toBe(true);
});

test('empty string', () => {
    expect(canMakePalindrome('')).toBe(false);
});
