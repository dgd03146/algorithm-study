var reverseString = function (s) {
  let p = 0;
  let q = s.length - 1;
  while (p <= q) {
    let temp = s[q];
    s[q] = s[p];
    s[p] = temp;
    p++;
    q--;
  }
};
