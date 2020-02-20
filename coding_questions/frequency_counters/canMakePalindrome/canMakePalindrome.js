function canMakePalindrome(string) {
    /**
     * 'madam'
     * {
     *  m: 2,
     *  a: 2,
     *  d: 1
     * }
     * 'repaper'
     * {
     *  r: 2,
     *  e: 2,
     *  p: 2,
     *  a: 1
     * }
     * 'no lemons, no melon'
     * {
     *  n: 4,
     *  o: 4,
     *  l: 2,
     *  e: 2,
     *  m: 2,
     *  s: 1
     * }
     */
    // Put every letter in map and count frequency.
    const frequencyCounter = {};
    let numberOfOddFrequencies = 0;
    const cleanString = string.replace(/\W/g, '');
    if (!string) return false;
    for (let letter of cleanString) {
        frequencyCounter[letter] = (frequencyCounter[letter] || 0) + 1;
    }
    // Checks if all frequencies are even except for one key.
    for (let letter in frequencyCounter) {
        if (frequencyCounter[letter] % 2 !== 0) numberOfOddFrequencies += 1;
    }
    if (numberOfOddFrequencies === 1) return true;
    return false;
}

module.exports = canMakePalindrome;
