const TwoSum = (arr, target) =>{
    left = 0;
    right = arr.length -1;
    while(left < right){
        let sum = arr[left] + arr[right];

        if(sum === target){
            return [left + 1, right + 1];
        }
        else if(sum < target){
            left++
        }else{
            right--
        }
    }
    return []
}

let arr1 = [2, 7, 11, 15]
let target = 18

console.log(TwoSum(arr1,target))