// Runtime beats 80.41 % of javascript submissions.

var maxProfit = function (prices: number[]): number {
    let min = prices[0];
    let max = prices[0];
    let profit = 0;
    for (let i = 1; i < prices.length; ++i) {
        if (prices[i] > max) {
            max = prices[i];
        } else if (prices[i] < max || prices[i] <= min) {
            profit += max - min;
            min = prices[i];
            max = prices[i]
        }
    }
    if (max > min) {
        profit += max - min
    }
    return profit
};