// Runtime: 56 ms, faster than 86.24% of JavaScript online submissions for Find N Unique Integers Sum up to Zero.

var sumZero = function (n: number): number[] {
    if (n === 1) {
        return [0];
    }
    let arr = [];
    let sum = 0;
    for (let i = 1; i < n; i++) {
        arr.push(i);
        sum += i;
    }
    arr.push(-sum);
    return arr;
};