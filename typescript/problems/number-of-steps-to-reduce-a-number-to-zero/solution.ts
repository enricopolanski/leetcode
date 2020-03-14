// runtime: 56 ms, top 61.5 %
var numberOfSteps = function (num: number): number {
    var steps = 0;
    while (num != 1) {
        num = num % 2 === 0 ? (num / 2) : (num - 1);
        steps++;
    }
    return steps + 1;
};