// runtime beats 66.35 % of javascript submissions

const isSolution: (n: number) => boolean = n =>
    n === 1 || n === 10 || n === 100 || n === 1000 || n === 10000;

const sumSquares: (nums: number[]) => number = nums => nums.reduce((acc, val) => acc + square(val), 0);
const square: (a: number | string) => number = a => Math.pow(a as number, 2);
const toCharArr: (num: number) => string[] = num => String(num).split("");

// need to cast as any to remove compilation error
const toSumSquaredDigits: (num: number) => number = num => sumSquares((toCharArr(num) as any));

var isHappy = function (n: number): boolean {
    let dict = {};
    let actual = n;
    while (!isSolution(actual)) {
        if (dict[actual]) {
            return false;
        }
        dict[actual] = true;
        actual = toSumSquaredDigits(actual);
    }
    return true;
};