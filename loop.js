/**
 * -- Aula 07 --
 *  ----- Loops de repetição -----
 * FOR 
 */
//  for (let index = 1; index <= 20; index++){
//     console.log(index);
// }

//const cars = ["Ferrari", "Tesla", "MClaren"];

// for (let i = 0; i < cars.length; i++) {
//     console.log(cars[i]);
// }

// for (let car of cars) {
//     console.log(car);
// }

/** FOREACH 
 * Segundo parametro é opcional
*/
// cars.forEach(function(car, index) {
//     console.log(index, car);
//     console.log(index);
//     console.log(car);
// })

/** WHILE
 * 
 */
// let index = 0;

// while (index < 10) {
//     console.log("Index é menor do que 10!");
//     //Todas as expressões abaixo representam a mesma coisa
//     index = index + 1;
//     index += 1;
//     index++;
// }

/** FOR IN
 * Não é muito utilizado, não performático
*/
const person = {
    name: 'Jane',
    age: 21,
}

for (property in person) {
    console.log(person[property]);
}
