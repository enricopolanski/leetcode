// Given a non-empty array of integers, every element appears twice except for one. Find that single one.

// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

// I: [4,2,1,2,1], O: 4

// runtime: 56ms, beats 87% of submissions

var singleNumber = function (nums: number[]): number {
    let dict = {};
    for (let i = 0; i < nums.length; ++i) {
        if (dict[nums[i]]) {
            delete dict[nums[i]];
        } else {
            dict[nums[i]] = 1;
        }
    }
    return Number(Object.keys(dict)[0]);
};

// fastest solution: 32ms (not my solution)

// NOTE: interesting use of XOR operator

var fastestSingleNumber = function (nums: number[]): number {
    let hash = 0;
    nums.forEach((item) => {
        hash ^= item;
    });
    return hash;
};