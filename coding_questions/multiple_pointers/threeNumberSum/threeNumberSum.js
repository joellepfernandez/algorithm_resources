function threeNumberSum (array, targetSum) {
    /**
     * threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0)) -> [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]
     * [-8, -6, 1, 2, 3, 5, 6, 12]
     *   ^         ^            ^
     *   C         L            R
     *
     * 1. Create two pointers.
     * 2. Sort the array.
     * 3. Create a results array.
     * 4. If the sum of left, right, and current is equal the targetSum, push left, right, and current into the results array. 
     * Continue throught the array by increasing left by one and decreasing right by one.
     * 5. If the sum of left, right, and current is greater than the targetSum, decrease right by one.
     * 6. If the sum of left, right, and current is less than the targetSum, increase left by one.
     */
     const results = [];
     const sortedArray = array.sort(function(a, b) {return a - b});
     for (let i = 0; i < sortedArray.length-2; i++) {
        let current = i;
        let left = current + 1;
        let right = array.length-1;
        while (left < right) {
            let currentSum = sortedArray[i] + sortedArray[left] + sortedArray[right];
            if (currentSum === targetSum) {
            results.push([sortedArray[i], sortedArray[left], sortedArray[right]]);
            left++;
            right--;
            }
            if (currentSum > targetSum) right--;
            if (currentSum < targetSum) left++;
        }
     }
     return results;
}

module.exports = threeNumberSum;