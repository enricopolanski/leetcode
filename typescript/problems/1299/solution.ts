// Runtime: 84 ms, faster than 67.42% of JavaScript online submissions for Replace Elements with Greatest Element on Right Side.

var replaceElements = function (arr: number[]): number[] {
  let tempArr: number[] = [];
  let max = arr[arr.length - 1];
  for (let i = arr.length - 2; i > -1; --i) {
    tempArr[i] = max;
    if (arr[i] > max) {
      max = arr[i]
    }
  }
  tempArr[arr.length - 1] = -1
  return tempArr;
};