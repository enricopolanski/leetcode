// Runtime: 56 ms, faster than 69.94% of JavaScript online submissions 
// for Split a String in Balanced Strings.

var balancedStringSplit = function (s: string): number {
    var count = 0;
    var currentRs = 0;
    var currentLs = 0;
    for (var i = 0; i < s.length; ++i) {
        if (s[i] === 'R') {
            currentRs++;
        }
        else {
            currentLs++;
        }
        if (currentRs === currentLs) {
            count++;
            currentRs = 0;
            currentLs = 0;
        }
    }
    return count;
};