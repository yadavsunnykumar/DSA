// Basic Calculator
var calculate = function(s) {
    let stack = [];
    let result = 0;
    let number = 0;
    let sign =1;
    for(let i =0;i<s.length;i++){
        const ch = s[i];
        if(/\d/.test(ch)){
            number = number*10 +parseInt(ch);
        }else if(ch === '+'){
            result+=sign*number;
            sign =1;
            number =0;
        }else if(ch ==='-'){
            result+=sign*number;
            sign =-1;
            number =0;
        }else if(ch === '('){
            stack.push(result);
            stack.push(sign);
            result =0;
            sign =1;
        }else if(ch === ')'){
            result+=sign*number;
            number =0;
            result*=stack.pop();
            result+=stack.pop();
        }

    }
    if(number !==0){
        result+=sign*number;
    }
    return result;
};
// Example usage:
console.log(calculate("1 + 1")); // Output: 2
console.log(calculate(" 2-1 + 2 ")); // Output: 3
console.log(calculate("(1+(4+5+2)-3)+(6+8)")); // Output: 23