// Word Search
var exist = function(board, word) {
    const rows = board.length;
    const cols = board[0].length;

    function dfs(r,c,i){
        if(i === word.length) return true;
        if(r<0||c<0||r>=rows||c>=cols||board[r][c]!==word[i]) return false;

        const temp = board[r][c];
        board[r][c] = '#';
        const found = dfs(r+1,c,i+1) || dfs(r-1,c,i+1) || dfs(r,c+1,i+1) || dfs(r,c-1,i+1);
        board[r][c] = temp;
        return found;

    }

    for(let r=0;r<rows;r++){
        for(let c=0;c<cols;c++){
            if(dfs(r,c,0)) return true;
        }
    }
    return false;
};
// Example 1:
let board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]];
let word = "ABCCED";
console.log(exist(board, word)); // Output: true
// Example 2:
board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]];
word = "SEE";
console.log(exist(board, word)); // Output: true