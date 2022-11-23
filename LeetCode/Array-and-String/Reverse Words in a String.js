var reverseWords = function (s) {
  res = s
    .trim()
    .split(' ')
    .filter((el) => el !== '')
    .reverse()
    .join(' ');

  return res;
};

const s = 'a good   example';
console.log(reverseWords(s));
