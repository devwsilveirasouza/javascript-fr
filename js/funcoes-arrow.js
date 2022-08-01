/**
 * AULA 10 
 * 
 * FUNCTIONS
 */

// function sum(a, b) {
//     console.log(a + b);
// }

// const sumValue = sum (2, 2);

// console.log(sumValue);

// function sum(a, b = 20) {
//     console.log(a + b);
// }

// const sumValue2 = sum (2);

// console.log(sumValue2);

/** 
 * ARROW FUNCTIONS
*/
function soma(a, b) {
    return a + b;
}

// const sumArrow = (a, b = 25) => {
//     return a + b;
// }
//Mesma acoisa que acima
const sumArrow = (a, b = 20) => a + b;

const sumValue = sumArrow(2);

console.log(sumValue);