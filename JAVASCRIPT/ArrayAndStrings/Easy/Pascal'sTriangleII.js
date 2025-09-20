// Pascal's Triangle II
var getRow = function(rowIndex) {
    let row = [1];

    for (let i = 1; i <= rowIndex; i++) {
        for (let j = i - 1; j > 0; j--) {
            row[j] = row[j] + row[j - 1];
        }
        row.push(1); // Always end with 1
    }

    return row;
};

// Example usage:
const rowIndex = 3;
console.log(getRow(rowIndex)); // Output: [1,3,3,1]