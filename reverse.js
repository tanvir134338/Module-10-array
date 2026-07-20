/**
 * reverse way no.1
 */

const numbers=[87, 85, 12, 45, 65, 41];

const reversed = numbers.reverse();
// console.log(reversed)
// console.log(reversed)

// -----------------------------------------------------//
/**
 * Reverse way no.2 (not always useable )
 */
const friends = ['abul','babul','chabul','dabul','ebul'];
const afterReverse=[];
for(const name of friends){   
// console.log(name)
afterReverse.unshift(name)
// console.log(afterReverse)
}
// ----------------------------------------------------------//
/**
 * reverse way no.3
 */
const digits = [1,2,3,4,5,6,7,8,9];

for(let i = 0; i< digits.length; i++){
    console.log(i, digits[i]);
}

const reversedDigits = [];
for(let i=digits.length -1; i>=0; i--) {
    console.log(i, digits[i])
    reversedDigits.push(digits[i]);
}