// Set Matrix Zeroes
var setZeroes = function(matrix) {
    let m = matrix.length;
    let n = matrix[0].length;
    let firstRowHasZero = false;
    let firstColHasZero = false;

    // check first row has zero
    for(let j=0;j<n;j++){
        if(matrix[0][j] === 0){
            firstRowHasZero = true;
            break;
        }
    }
    // check first col has zero
    for(let i=0;i<m;i++){
        if(matrix[i][0] === 0){
            firstColHasZero = true;
            break;
        }
    }

    //use first row and col as marker
    for(let i =1;i<m;i++){
        for(let j=1;j<n;j++){
            if(matrix[i][j] === 0){
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }
    // set zero based on marker
    for(let i =1;i<m;i++){
        for(let j =1; j<n; j++){
            if(matrix[i][0] === 0 || matrix[0][j] === 0){
                matrix[i][j] = 0;
            }
        }
    }
    // zero out first row if needed
    if(firstRowHasZero){
        for(let j =0;j<n;j++){
            matrix[0][j] = 0;
        }
    }
    // zero out if first col needed
    if(firstColHasZero){
        for(let i =0;i<m;i++){
            matrix[i][0] = 0;
        }
    }


};

// Example 1:
let matrix = [[1,1,1],[1,0,1],[1,1,1]];
setZeroes(matrix);
console.log(matrix); // Output: [[1,0,1],[0,0,0],[1,0,1]]
// Example 2:
matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]];
setZeroes(matrix);
console.log(matrix); // Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]