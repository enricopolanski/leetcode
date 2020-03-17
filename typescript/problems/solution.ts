// runtime 56 ms (top 50%), memory 33.3 MB (top 100%)

var defangIPaddr = function (address: string): string {
    let defanged = ''
    for (var i = 0; i < address.length; ++i) {
        if (address[i] === '.') {
            defanged += '[.]'
        } else {
            defanged += address[i]
        }
    }
    return defanged
};

// runtime 33 ms (top 100%). Not my solution

var fastestSolution = function (address: string) {
    return address.split(".").join("[.]")
};