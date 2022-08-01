// Aula 04 // Métodos importantes para utilizar com as listas
// MAP - Filter - Reduce //
// MAP //  
/*const numbers = [1,2,3,4,5,6,7,8,9,10];

const numbersMultipliedByTwo = numbers.map(function (number) {
    return number * 2
})

console.log(numbersMultipliedByTwo);*/

// FILTER //
/*const ages = [8,13,27,30,22,48,51,73,92];

const evenAges = ages.filter(function (age) {
    return age % 2 === 0;
})

console.log(evenAges);*/

// Reduce // 
// Reduzir para apenas uma variável
const ages = [8,13,27,30,22,48,51,73,92];

const sumOfAges = ages.reduce(function (age, accumulator){
    return accumulator + age;
}, 0); 
/**Accumulator igual a zero: É o ponto de partida para o  cálculo,
 *  se fosse 100 comessaria a contagem deste valor em diante) */

console.log(sumOfAges)