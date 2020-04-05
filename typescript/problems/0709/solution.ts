// Runtime: 52 ms, faster than 64.11% of JavaScript online submissions for To Lower Case.

var toLowerCase = function (str: string): string {
    let lowered = "";
    for (let char of str) {
        const asciiCode = char.charCodeAt(0)
        if (asciiCode > 64 && asciiCode < 91) {
            lowered += String.fromCharCode(asciiCode + 32)
        } else {
            lowered += char
        }
    }
    return lowered
};