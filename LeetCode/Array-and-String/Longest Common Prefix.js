var longestCommonPrefix = function (strs) {
  let answer = '';
  if (strs.length < 1) {
    return answer;
  }
  const first = strs[0];
  for (let i = 0; i < first.length; i++) {
    const check = first[i];

    for (let j = 1; j < strs.length; j++) {
      if (check !== strs[j][i]) {
        return answer;
      }
    }
    answer += check;
  }
  return answer;
};

var longestCommonPrefix = function (strs) {
  let key = strs[0];

  for (let word of strs) {
    let goodChars = '';
    for (let i = 0; i < word.length; i++) {
      if (word[i] === key[i]) {
        goodChars += word[i];
      } else {
        break;
      }
    }
    key = goodChars;
  }

  return key;
};
