function twoNumberSum(array, targetSum) {
    /**
     * twoNumberSum([8, 11, 1, -1, 6], 10) -> [-1, 11]
     *                   ^
     *                 current
     * { 8: true, 11: true, 1: true, -1: true, 6: true }
     * difference = 10 - 11
     * difference = -1
     * [-1, 11]
     *
     * 1. Create a hash table.
     * 2. Iterate through the array, keeping track of the current value in the array.
     * 3. Calculate the difference between the target sum and the current value.
     * 4. If the difference is in the hash map, return an array order sorted smallest to largest.
     * 5. If the difference is not in the hash map, add it to the hash map with a value of true.
     * 6. Otherwise return an empty array.
     *
     */
    const seen = {};
    for (let i = 0; i < array.length; i++) {
        let current = array[i];
        let difference = targetSum - current;
        if(difference in seen) return current > difference ? [difference, current] : [current, difference];
        else seen[current] = true;
    }
    return [];
};

module.exports = twoNumberSum;
