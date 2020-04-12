// Runtime: 64 ms, faster than 30.91% of JavaScript

// TODO: Try other approaches

type NonEmptyArray<A> = [A, ...A[]]

var lastStoneWeight = function (stones: NonEmptyArray<number>): number {
  const reverseSort = arr => arr.sort((a, b) => b - a) as NonEmptyArray<number>
  let reverseSorted = reverseSort(stones);
  while (reverseSorted.length > 1) {
    const diff = reverseSorted[0] - reverseSorted[1];
    const [first, second, ...rest] = reverseSorted
    reverseSorted = reverseSort([...rest, diff])
  }
  return reverseSorted[0];
};

export default lastStoneWeight