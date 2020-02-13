function averagePair(arr, num) {
    // Create pointers.
    let start = 0;
    let end = arr.length-1;
    // Check if the start value and end value are the target average.
    while(start < end){
      let avg = (arr[start]+arr[end]) / 2;
      // If the start and end value are the target average return true.
      if(avg === num) return true;
      /**
       * If the start and end value average are less that target average, move the start pointer to the next value because the values are sorted.
       * For example:
       * 1, 3, 3, 5, 6, 7, 10, 12, 19
       *    s ->
       *                           e
      */
      else if(avg < num) start++;
      /**
       * If the start and end value average are more that target average, move the end pointer one less value because the values are sorted.
       * For example:
       * 1, 3, 3, 5, 6, 7, 10, 12, 19
       *    s
       *                    <- e
      */
      else end--;
    }
    return false;
}

module.exports = averagePair; 