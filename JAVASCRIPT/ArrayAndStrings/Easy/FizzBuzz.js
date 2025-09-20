// Fizz Buzz
var fizzBuzz = function(n) {
    answer = []
    for(let i =1; i<=n;i++){
        if(i%3===0 && i%5===0){
            answer[i-1] = "FizzBuzz"
        }else if(i%3 ===0){
            answer[i-1] = "Fizz"
        }else if(i%5 === 0){
            answer[i-1] = "Buzz"
        }else{
            answer[i-1] = String(i)
        }
    }
    return answer
};
// Example usage:
const n = 15;
console.log(fizzBuzz(n)); // Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]