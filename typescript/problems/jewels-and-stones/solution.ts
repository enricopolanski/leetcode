// Runtime: 60 ms, faster than 59.00% of JavaScript online submissions for Jewels and Stones.

var numJewelsInStones = function (J: string, S: string) {
    let jewels = 0;
    for (let j = 0; j < J.length; j++) {
        for (let s = 0; s < S.length; s++) {
            if (J[j] === S[s]) {
                jewels++;
            }
        }
    }
    return jewels;
};