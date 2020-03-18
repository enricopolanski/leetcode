/*  Runtime: 60 ms, faster than 31.11% of JavaScript online submissions 
    for Subtract the Product and Sum of Digits of an Integer.
*/
var subtractProductAndSum = function (n: number): number {
    const str = String(n);
    let product = 1;
    let sum = 0;
    for (let i = 0; i < str.length; ++i) {
        product *= +str[i];
        console.log(product)
        sum += +str[i];
    }
    return product - sum;
};

// Fastest solution, not mine:
var calculateDigitsSum = function (n: number) {
    if (n < 10) return n;
    return (n % 10) + calculateDigitsSum(Math.floor(n / 10));
}

var calculateDigitsProduct = function (n: number) {
    if (n < 10) return n;
    return (n % 10) * calculateDigitsProduct(Math.floor(n / 10));
}

var fastestSolution = function (n: number) {
    return calculateDigitsProduct(n) - calculateDigitsSum(n);
}