const ValidPalindrome = (s) => {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return (
        isSubpalindrome(s, left + 1, right) ||
        isSubpalindrome(s, left, right - 1)
      );
    }
    left++;
    right--;
  }
  return true;
};

const isSubpalindrome = (s, left, right) => {
  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

console.log(ValidPalindrome("abca"));
