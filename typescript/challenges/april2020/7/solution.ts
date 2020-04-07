// Runtime: 96 ms Memory Usage: 33.8 MB

// Given an integer array arr, count element x such that x + 1 is also in arr.
// If there're duplicates in arr, count them seperately.
// Example 1:
// Input: arr = [1,2,3]
// Output: 2
// Explanation: 1 and 2 are counted cause 2 and 3 are in arr.

var countElements = function (arr: number[]): number {
  let uniques = new Set(arr)
  let count = 0;
  for (let i = 0; i < arr.length; ++i) {
    if (uniques.has(arr[i] + 1)) {
      count++
    }
  }
  return count;
};