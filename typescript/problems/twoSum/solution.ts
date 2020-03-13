import * as assert from 'assert'

/**
 * First solution. Runtime: 80 ms
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums: number[], target: number): number[] {
    let smallerThanTarget = []
    nums.forEach((num, index) => {
        if (target > num) {
            smallerThanTarget.push({ num, index })
        }
    })
    let ref = 'unset';
    let result;
    smallerThanTarget.forEach((val, id) => {

        if (ref === 'unset') {
            ref = val;
            return;
        }

        if ((ref as typeof val).num + val.num === target) {
            result = [(ref as typeof val).index, val.index];
            return
        }

        if (id === length) {
            result = [(ref as typeof val).index, val.index];
            return
        }
    })
    return result
};

assert.deepEqual(1, 1)