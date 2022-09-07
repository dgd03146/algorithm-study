var strStr = function (haystack, needle) {
  let str = '';
  let temp;
  if (haystack.length == 0) {
    return 0;
  }

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      for (let j = 0, k = i; j < needle.length; j++, k++) {
        str += haystack[k];
      }
    }

    temp = i;
    if (str === needle) {
      return temp;
    } else {
      str = '';
      temp = -1;
    }
  }
  return temp;
};

console.log(strStr((haystack = 'mississippi'), (needle = 'issip')));

// haystack 안에 needle이 있으면 needle이 시작하는 인덱스 값을 리턴
// 아니면 -1을 리턴, haystack이 비어있으면 0을 리턴
