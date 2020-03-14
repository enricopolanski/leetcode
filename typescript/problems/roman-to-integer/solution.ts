// runtime: 132 ms, top 97.1 %

var solution = function (str: string): number {
    var table = {
        I: {
            val: 1,
            complements: {
                V: 3,
                X: 8
            }
        },
        V: {
            val: 5
        },
        X: {
            val: 10,
            complements: {
                L: 30,
                C: 80
            }
        },
        L: { val: 50 },
        C: {
            val: 100,
            complements: {
                D: 300,
                M: 800
            }
        },
        D: { val: 500 },
        M: { val: 1000 }
    };
    var num = 0;
    var len = str.length;
    for (var i = 0; i < len; i++) {
        num += table[str[i]].val;
        if (str[i + 1]) {
            if (table[str[i]].complements && table[str[i]].complements[str[i + 1]]) {
                num += table[str[i]].complements[str[i + 1]];
                i++;
            }
        }
    }
    return num;
}