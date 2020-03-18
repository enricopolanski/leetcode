// Given an array nums of integers, return how many of them contain an even number of digits.

// 64 ms, > 30 %.
var findNumbers = function (nums: number[]): number {
    var count = 0;
    for (var i = 0; i < nums.length; ++i) {
        if (("" + nums[i]).length % 2 === 0) {
            count++;
        }
    }
    return count;
};