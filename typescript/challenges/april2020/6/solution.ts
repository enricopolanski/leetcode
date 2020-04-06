// Runtime: 132 ms, faster than 57.21% of JavaScript online submissions for Group Anagrams.

var groupAnagrams = function (strs: string[]): string[][] {
    const uniques = {};
    const toSortedStr = (str: string) => str.split('').sort().join('')
    for (let str of strs) {
        const sorted = toSortedStr(str)
        if (sorted in uniques) {
            uniques[sorted].push(str)
        } else {
            uniques[sorted] = [str]
        }
    }
    // any needed because we're targetting es2017 but actually compiling for es2015
    return (Object as any).values(uniques)
};