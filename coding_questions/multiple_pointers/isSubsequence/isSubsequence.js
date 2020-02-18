function isSubsequence(string1, string2) {
    // Create pointers.
    var pointer1 = 0;
    var pointer2 = 0;
    /**
     * Check if string1 contains the letter at pointer1 as string2 at pointer2.
     * If it does, increase pointer1 and pointer2. If not, increase pointer2.
     * ['s', 'i', 'n', 'g']
     *        ^
     *
     * ['s', 't', 'i', 'n', 'g']
     *             ^
     * If able to move pointer1 to the length of string1, string1 is a subsequence of string2.
     */
    if (!string1) return true;
    while (pointer2 < string2.length) {
        if (string2[pointer2] === string1[pointer1]) pointer1++;
        if (pointer1 === string1.length) return true;
        pointer2++;
    }
    return false;
}

module.exports = isSubsequence;