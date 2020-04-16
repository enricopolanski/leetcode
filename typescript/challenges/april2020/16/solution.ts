var checkValidString = function (s: string): boolean {
  let l = 0;
  let h = 0;

  for (let char of s) {
    if (char === '(') {
      h++;
      l++;
      continue;
    }

    if (char == ')' && h == 0) {
      return false;
    }

    if (char == ')') {
      h--;
      l = Math.max(0, l - 1);
      continue;
    }

    h++;
    l = Math.max(0, l - 1);
  }

  return l === 0;
};