// Evaluate Reverse Polish Notation
var evalRPN = function(tokens) {
    const stack = [];
    for(let token of tokens){
        if(["+","-","*","/"].includes(token)){
            const b = stack.pop();
            const a = stack.pop();
            let result;
            switch(token){
                case "+":
                    result = a+b;
                    break;
                case "-":
                    result = a-b;
                    break;
                case "*":
                    result = a*b;
                    break;
                case "/":
                    result = Math.trunc(a/b);
                    break;

            }
            stack.push(result);
        }
        else{
            stack.push(parseInt(token));
        }
    }
    return stack.pop();
};
// Example usage:
const tokens = ["2","1","+","3","*"];
console.log(evalRPN(tokens)); // Output: 9
// Explanation: ((2 + 1) * 3) = 9
// Time Complexity: O(n)
// Space Complexity: O(n)