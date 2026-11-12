const ValidPalindrome = (s) => {
  let cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  left = 0;
  right = cleaned.length - 1;

  while (left < right) {
    if (cleaned[left] !== cleaned[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

let strings = "A man, a plan, a canal: Panama";

console.log(ValidPalindrome(strings));
