// runtime: 56ms, beats 81.69% of JavaScript submissions

var backspaceCompare = function (S: string, T: string): boolean {

  let longest = "";
  let shortest = "";

  const orderedTuple = S.length > T.length ? [S, T] : [T, S];
  const longestOriginal = orderedTuple[0];
  const shortestOriginal = orderedTuple[1];
  const longestLength = longestOriginal.length;
  const shortestLength = shortestOriginal.length;

  for (let i = 0; i < longestLength; ++i) {

    if (longestOriginal[i] == "#") {
      longest = longest.slice(0, -1);
    } else {
      longest = longest + longestOriginal[i];
    }

    if (i < shortestLength) {
      if (shortestOriginal[i] == "#") {
        shortest = shortest.slice(0, -1);
      } else {
        shortest = shortest + shortestOriginal[i]
      }
    }
  }
  return longest == shortest;
};
