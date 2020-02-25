function isPalindrome(string) {
    /**
     * 'aba'
     *  ^ ^
     *  L R
     * 1. Create two pointers.
     * 2. If the left pointer is the same as the right pointer.
     * Increase the left pointer by one and decrease the right pointer by one.
     * 3. If the left pointer is not the same as the right pointer, return false.
     */
    const stringArray = string.split('');
    let left = 0;
    let right = stringArray.length-1;
    while (left < stringArray.length) {
        if (string[left] === string[right]) { left++; right--; }
        else { return false };
    }
    return true;
}

module.exports = isPalindrome;