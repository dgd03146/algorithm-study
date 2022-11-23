var reverseWords = function (s) {
  const res = s
    .split(' ')
    .map((it) => it.split('').reverse().join(''))
    .join(' ');

  return res;
};

const s = "Let's take LeetCode contest";
console.log(reverseWords(s));
