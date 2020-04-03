// 232 ms. Beats 5.2% of JavaScript submissions.

// TODO: need to check better implementations, this is way too slow

var maxSubArray = function (nums: number[]): number {
    let maxTotal = nums[0];
    for (let i = 0; i < nums.length; ++i) {
        let currentMax = nums[i];
        let currentSum = nums[i]
        for (let j = i + 1; j < nums.length; ++j) {
            currentSum = currentSum + nums[j]
            currentMax = Math.max(currentMax, currentSum);
        }
        if (currentMax > maxTotal) {
            maxTotal = currentMax;
        }
    }
    return maxTotal;
};