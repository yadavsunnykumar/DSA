// MERGE SORTED ARRAYS
function mergeSortedArray(arr1, arr2){
    let mergedArray = [];
    let i =0, j=0;

    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<arr2[j]){
            mergedArray.push(arr1[i]);
            i++;
        }else{
            mergedArray.push(arr2[j]);
            j++;
        }
    }
    while(i<arr1.length){
        mergedArray.push(arr1[i]);
        i++;

    }
    while(j<arr2.length){
        mergedArray.push(arr2[j]);
        j++;
    }
    return mergedArray;
}


// Example usage:
const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];
console.log(mergeSortedArray(arr1, arr2)); // Output: [1, 2, 3, 4, 5, 6]