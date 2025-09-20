// Pascal's Triangle

var generate = function(numRows) {
    const triangle = [];

    for (let i = 0; i < numRows; i++) {
        const row = Array(i + 1).fill(1);

        for (let j = 1; j < i; j++) {
            row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
        }

        triangle.push(row);
    }

    return triangle;
};

// Example usage:
const numRows = 5;
console.log(generate(numRows)); // Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// const numRows2 = 1;
// console.log(generate(numRows2)); // Output: [[1]]