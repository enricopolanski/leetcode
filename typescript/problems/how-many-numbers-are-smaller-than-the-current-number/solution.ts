// Runtime: 72 ms, faster than 87.80% of JavaScript online submissions

var smallerNumbersThanCurrent = function (nums: number[]): number[] {
    const sorted = [...nums].sort((a, b) => a - b);
    const foo = [];
    nums.forEach(num => foo.push(sorted.findIndex(n => n == num)));
    return foo;
};