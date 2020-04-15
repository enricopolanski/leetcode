// aggregate left and right products
// TODO: redo
var productExceptSelf = function (nums: number[]): number[] {
  const result = Array(nums.length).fill(1);
  let rMul = 1;
  for (let i = 1; i < nums.length; i++) {
    result[i] = nums[i - 1] * result[i - 1];
  }
  for (let i = nums.length - 2; i >= 0; i--) {
    rMul *= nums[i + 1];
    result[i] *= rMul;
  }

  return result;
};