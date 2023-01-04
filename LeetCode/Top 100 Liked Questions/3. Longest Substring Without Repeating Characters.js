var lengthOfLongestSubstring = function (s) {
  let current = '';
  let longest = 0;

  for (let i = 0; i < s.length; i++) {
    current = current.substring(current.indexOf(s[i]) + 1);
    current += s[i];

    if (current.length > longest) {
      longest = current.length;
    }
  }
  return longest;
};

const s = 'abcabcbb';
const s1 = 'bbbbb';
const s2 = 'pwwkew';
console.log(lengthOfLongestSubstring(s));
