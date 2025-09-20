// Basic Calculator II
var calculate = function(s) {
    let stack =[];
    let num = 0;
    let sign = '+';
    s = s.replace(/\s+/g,"");

    for(let i =0;i<s.length;i++){
        const ch = s[i];
        if(/\d/.test(ch)){
            num = num*10 + parseInt(ch);
        }
        if(/[+\-*/]/.test(ch) || i===s.length -1){
            if(sign ==='+') stack.push(num);
            else if(sign === '-')stack.push(-num);
            else if(sign === '*') stack.push(stack.pop()*num);
            else if(sign === '/')stack.push(Math.trunc(stack.pop()/num));
            sign = ch;
            num =0;
        }
    }
    return stack.reduce((a,b)=>a+b,0);
};
// Example usage:
console.log(calculate("3+2*2")); // Output: 7
console.log(calculate(" 3/2 ")); // Output: 1
console.log(calculate(" 3+5 / 2 ")); // Output: 5
