# Question

Write a function that takes in two strings and checks whether the characters in the first string form a subsequence of the characeters in the second string (check if the characters in the first string appear somewhere in the second string without their order changing).

## Restrictions

Time Complexity | Space Complexity
--- | ---
O(N+M) | O(1)

## Examples

* isSubsequence('hello', 'hello world') -> true
* isSubsequence('sing', 'string') -> true
* isSubsequence('abc', 'abracadabra') -> true
* isSubsequence('abc', 'acb') -> false
