// Runtime: 44 ms, faster than 98.63% of JavaScript online submissions for Maximum 69 Number.

var maximum69Number = function (num: number): number {
    const stringifiedNumArr = [...String(num)];
    let i = 0;
    while (i < stringifiedNumArr.length) {
        if (stringifiedNumArr[i] === "6") {
            let tempArr = [...stringifiedNumArr];
            tempArr[i] = "9";
            return Number(tempArr.join(""));
        }
        ++i;
    }
    return num;
};