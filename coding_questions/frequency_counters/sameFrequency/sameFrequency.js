function sameFrequency(string1, string2) {
    // Accounts for two string of different lengths
    if (string1.length !== string2.length) {
        return false;
    }
    // Counts the frequency of both string1 and string2
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for (let letter of string1.split('')) {
        frequencyCounter1[letter] = (frequencyCounter1[letter] || 0) + 1;
    }
    for (let letter of string2.split('')) {
        frequencyCounter2[letter] = (frequencyCounter2[letter] || 0) + 1;
    }
    // Checks if letter (which is a key) in frequencyCounter1 is in frequencyCounter2
    for (let key in frequencyCounter1) {
        if (!frequencyCounter2[key]) {
            return false;
        }
    }
    return true;
}

module.exports = sameFrequency;
