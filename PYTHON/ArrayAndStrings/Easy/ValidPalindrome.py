def validPalindrome(str):
    # Remove non-alphanumeric characters and convert to lowercase
    cleaned_str = ''.join(char.lower() for char in str if char.isalnum())
    # Check if the cleaned string is equal to its reverse
    return cleaned_str == cleaned_str[::-1]

# Example usage
str1 = "Was it a car or a cat I saw?"
str2 = "Hello, World!"
if __name__ == "__main__":
    print("Is the string a valid palindrome?", validPalindrome(str1))  # Output: True
    print("Is the string a valid palindrome?", validPalindrome(str2))  # Output: False