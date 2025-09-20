// VALID PALINDROME
function validPalindrome(str){
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

str = "Was it a car or a cat I saw?";
console.log(validPalindrome(str)); // Output: true
// Explanation: The string is a palindrome when ignoring spaces and punctuation.    
// Example with a non-palindrome
str2 = "Hello, World!";
console.log(validPalindrome(str2)); // Output: false
// Explanation: The string is not a palindrome, even when ignoring spaces and punctuation.