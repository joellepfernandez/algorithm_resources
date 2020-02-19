function maxSubarraySum(arr, size) {
  // Define a temporary sum variable that will adjust as you search for maxSum.
  let tempSum = 0;
  let maxSum = 0;
  // Handle case where the array is less than length for sum.
  if (arr.length < size) return null;
  // Add the first set of numbers together to num.
  for (let i = 0; i < size; i++){
    maxSum += arr[i];
  }
  // Set tempSum equal to maxSum.
  tempSum = maxSum;

  /**
   * maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)
   *                 |---|
   *                   ^
   *                tempSum = 1, maxSum = 1
   *                    |---|
   *                      ^
   *                   tempSum = 5, maxSum = 5
   *                        |---|
   *                          ^
   *                        tempSum = 3, maxSum = 5
   *                            |---|
   *                              ^
   *                           tempSum = -3, maxSum = 5
   *                                |---|
   *                                  ^
   *                              tempSum = 0, maxSum = 5
   *                                   |---|
   *                                     ^
   *                                 tempSum = 3, maxSum = 5
   *                                      |---|
   *                                        ^
   *                                     tempSum = 2, maxSum = 5
   *                                          |---|
   *                                            ^
   *                                        tempSum = -1, maxSum = 5
   */
  // Loop through the array and calculate the sum from left to right, keeping track of the max sum.
  for (let i = size; i < arr.length; i++){
    // Take tempSum and subtract the beginning number and add the next number.
    tempSum += arr[i]- arr[i-size];
    // Take the max of tempSum and maxSum.
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;

}

module.exports = maxSubarraySum;