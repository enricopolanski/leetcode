// Runtime: 84 ms, faster than 54.03% of JavaScript online submissions for Decompress Run-Length Encoded List.
var decompressRLElist = function (nums: number[]): number[] {
    const result = [];
    for (var i = 0; i < nums.length; i = i + 2) {
        for (var j = nums[i]; j !== 0; --j) {
            result.push(nums[i + 1])
        }
    }
    return result
};