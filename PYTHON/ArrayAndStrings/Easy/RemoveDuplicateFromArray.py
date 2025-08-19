def removeDuplicateFromArray(arr):
    set_arr = set()
    for item in arr:
        set_arr.add(item)
    return list(set_arr)


# Example usage
if __name__ == "__main__":
    arr = [1, 2, 3, 4, 5, 1, 2, 3]
    print("Original array:", arr)
    result = removeDuplicateFromArray(arr)
    print("Array after removing duplicates:", result)