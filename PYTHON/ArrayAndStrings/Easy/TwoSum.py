def TwoSum(nums,target):
    num_to_index = {}
    for index, num in enumerate(nums):
        compliment = target - num
        if compliment in num_to_index:
            return [num_to_index[compliment], index]
        num_to_index[num] = index
    return None



# Example usage:    
nums = [2, 7, 11, 15]
target = 9
result = TwoSum(nums,target)
if result:
    print(f"Indices of the two numbers that add up to {target} are: {result}")
else:
    print("No two numbers add up to the target.")