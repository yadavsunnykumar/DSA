// Text Justification
var fullJustify = function(words, maxWidth) {
    const result = [];
     let index = 0;
 
     while (index < words.length) {
         let totalChars = words[index].length;
         let last = index + 1;
 
         while (last < words.length) {
             if (totalChars + 1 + words[last].length > maxWidth) break;
             totalChars += 1 + words[last].length;
             last++;
         }
 
         const line = [];
         let numWords = last - index;
         let numSpaces = maxWidth - totalChars + (numWords - 1);
 
         // Last line or one word in the line
         if (last === words.length || numWords === 1) {
             for (let i = index; i < last; i++) {
                 line.push(words[i]);
                 if (i < last - 1) line.push(' ');
             }
             line.push(' '.repeat(maxWidth - line.join('').length));
         } else {
             let spaces = Math.floor(numSpaces / (numWords - 1));
             let extra = numSpaces % (numWords - 1);
             for (let i = index; i < last; i++) {
                 line.push(words[i]);
                 if (i < last - 1) {
                     let space = spaces + (extra--> 0 ? 1 : 0);
                     line.push(' '.repeat(space));
                 }
             }
         }
 
         result.push(line.join(''));
         index = last;
     }
 
     return result;
 };
// Example usage:
const words = ["This", "is", "an", "example", "of", "text", "justification."];
const maxWidth = 16;
console.log(fullJustify(words, maxWidth));
