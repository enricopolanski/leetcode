var stringShift = function (s: string, shift: number[][]): string {
  let str = s;

  const shiftLeft = (str, amount) => str.slice(amount) + str.slice(0, amount);

  const shiftRight = (str, amount) =>
    str.slice(-amount) + str.slice(0, str.length - amount);

  for (let i = 0; i < shift.length; i++) {
    if (shift[i][0] && shift[i][1]) {
      str = shiftRight(str, shift[i][1]);
    } else {
      str = shiftLeft(str, shift[i][1]);
    }
  }
  return str;
};

export default stringShift