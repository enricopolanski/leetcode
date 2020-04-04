// Runtime: 56 ms, faster than 94.82% of JavaScript online submissions for Move Zeroes.

var moveZeroes = function (nums: number[]): void {
    let perms = 0; // make the length not dynamic
    let i = 0;
    while (i < nums.length) {
        if (nums[i] == 0) {
            nums.splice(i, 1);
            perms++;
        }
        else { i++; }
    }
    while (perms !== 0) {
        nums.push(0);
        perms--;
    }
};