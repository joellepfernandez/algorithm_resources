const sameFrequency = require('./sameFrequency');

test('same frequency', () => {
  expect(sameFrequency('ten', 'net')).toBe(true);
});

test('same frequency with an additional letter', () => {
    expect(sameFrequency('tent', 'net')).toBe(false);
});

test('not the same frequency', () => {
    expect(sameFrequency('two', 'five')).toBe(false);
});

test('same length different frequency', () => {
  expect(sameFrequency('seven', 'eight')).toBe(false);
});