function findLongestSubtring(string) {
    /**
     * ['t', 'h', 'i', 's', 'i', 's', 'h', 'o', 'w', 'w', 'e', 'd', 'o', 'i', 't']
     *   |--------------|
     *
     *
     * 1. Split the string.
     * 2. Create a variable to keeo track of the largest substring.
     * 3. Create a character map.
     * 4. Iterate through array and add letter to charMap.
     * 5. If the character exists in the charMap,
     * set start equal to the highest of start or frequency of the character.
     * 6. Set longest equal to the index minus the begins substring and add 1 to account for current.
     * 7. Store the index of the next character to not double count.
     */
    const splitString = string.split('');
    let start = 0;
    let longestSubstring = 0;
    const charMap = {};
    for (let i = start; i < splitString.length; i++) {
        if (charMap[string[i]]) {
            start = Math.max(start, charMap[[string[i]]]);
        }
        longestSubstring = Math.max(longestSubstring, i - start + 1);
        charMap[[string[i]]] = i + 1;
    }
    return longestSubstring;
}

module.exports = findLongestSubtring;