// runtime: 108ms, beats 92.24 % of JavaScript solutions

var findMaxLength = function (nums: number[]): number {
  const map = new Map();
  map.set(0, -1);
  let count = 0, maxLength = 0;
  for (let i = 0; i < nums.length; i++) {
    nums[i] === 0 ? count-- : count++;
    if (map.has(count)) {
      maxLength = Math.max(maxLength, i - map.get(count));
    } else {
      map.set(count, i);
    }
    if (!map.has(count)) {
      map.set(count, i);
    }
  }
  return maxLength;
};