/**
    My solutions:
 */

// runtime: 208 ms, beats 46.1 %
var solutionOne = function (x: number) {
    var strArr;
    return x < 0
        ? false
        : (strArr = [...String(x)], strArr).join() === strArr.reverse().join();
};

// runtime: 196 ms, beats 63.6%

var solutionTwo = function (x: number) {
    const str = x + ''
    const len = str.length
    for (var i = 0; i < len; i++) {
        if (str[i] !== str[len - i - 1]) {
            return false
        }
    }
    return true
};

/**
    Fastest commentary (140 ms) (not my solution)
    Given a number what he does is:
    add the latest digit to 'y' by taking the remainder of 10 division.
    E.g: 143 % 10 === 3
    Then he removes the last digit from a temporal variable by subtracting the same modulo:
    143 - (143 % 10) = 140
    and then divides by 10 returning 14.

    At this point he divides by 10 and stars again.
    y becomes 3 * 10 + the new remainder (4), thus y is 34.
    xx becomes 1 by removing the modulo and dividing by 10.
 */

var isPalindrome = function (x: number) {
    if (x < 0) return false;
    if (x < 10) return true;
    let xx = x, y = 0;
    while (xx > 0) {
        y = y * 10 + xx % 10;
        xx = (xx - xx % 10) / 10;
    }
    return x === y;
};