// MOVE ZEROS

function moveZero(arr){
    let nonZero = 0
    for(let i=0;i<arr.length;i++){
        if(arr[i] !== 0){
            arr[nonZero] = arr[i]
            nonZero++;
        }
    }
    for(let i = nonZero; i < arr.length; i++){
        arr[i] = 0;
    }
    return arr;
}


// Example usage:
const arr = [0, 1, 0, 3, 12];
const result = moveZero(arr);
console.log(result); // Output: [1, 3, 12, 0, 0]