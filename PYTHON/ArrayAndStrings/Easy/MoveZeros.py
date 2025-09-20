def moveZeros(arr):
    non_zero_index = 0
    for i in range(len(arr)):
        if arr[i] != 0:
            arr[non_zero_index] = arr[i]
            non_zero_index += 1
    for i in range(non_zero_index, len(arr)):
        arr[i] = 0
    return arr

# Example usage:
if __name__ == "__main__":
    arr = [0, 1, 0, 3, 12]
    print("Original array:", arr)
    result = moveZeros(arr)
    print("Array after moving zeros:", result)