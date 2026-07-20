const numbers = [98, 96, 56, 68, 45, 58];
const numbers2 = [2, 4, 6, 8];

const hasItem = numbers.includes(455);
const hasItem = numbers.includes(45);
console.log(hasItem)

if(numbers.includes(88)){
    console.log('Taile thik ase')
}
else{
    console.log('taile thik nai')
}


/**
 * concat diye onno array aksathe kora jay
 */
const allNumbers= numbers.concat(numbers2)
console.log(allNumbers)

/**
 * join diye array te thaka number gula ke pasha pashi bosano soho jekono kisu diye pasha pashi bosano jay jamon +,-.x, issa moto.
 */
const numbs = [1,3,5,7,9]
const  joined = numbs.join('<')
console.log(joined)

/**
 * array te thaka kono element er position ber kora jay 'indexOf(element name)' diye.eta index er number onujayi dekhabe 0 theke suru .ar jodi na thake taile dibe (-1)
. */

const numb = [1,3,5,7,9]
const position = numb.indexOf(7);
console.log(position)

/**
 * kono akta jinis array kina bujhte hole amader 'Array.isArray(array name); korte hbe . Ans amra boolean e pabo.
 *  */

console.log(Array.isArray(numbs))

/**
 * slice()- eita korte console.log({array er name.slice(start, end)}) korte hobe
 */

const number=[2, 3, 4, 5, 6, 7, 8, 9]
console.log(number.slice(1, 5))