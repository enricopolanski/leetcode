var reverse = function (x: number) {
    const reversed =
        x > 0
            ? +[...String(x)].reverse().join("")
            : -[...String(x).slice(1)].reverse().join("");
    return reversed > (Math.pow(2, 31) - 1) || reversed < Math.pow(-2, 31) ? 0 : reversed
};

// 72 ms, better than 82.5 % solutions