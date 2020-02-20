function twoNumberSum(array, targetSum) {
    /**
     * twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10) -> [-1, 11]
     * [ -4, -1, 1,  3, 5,  6, 8, 11]
     *        ^                    ^
     *        s                    e
     *
     * 1. Create 2 pointers.
     * 2. Create a results array.
     * 3. Sort the array.
     * 4. If the start and end pointers sum to the targetSum, push the the numbers to results array.
     * 5. If the sum of the two pointers is less than the targetSum, increase the start pointer by 1.
     * 6. If the sum of the two pointers is greater than the targetSum, decrease the end pointer by 1.
     *
     */
    let start = 0;
    let end = array.length-1;
    const sortedArray = array.sort(function(a, b) {return a - b});
    const results = [];
    while (start < end) {
        let sum = sortedArray[start] + sortedArray[end];
        if (sum === targetSum) results.push(sortedArray[start], sortedArray[end]);
        if (sum < targetSum) start++;
        else end--;
    }
    return results;
};

module.exports = twoNumberSum;
