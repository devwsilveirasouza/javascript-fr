// Aula 03 //

// Listas
const names = ['Wellington', 'Pedro', 'Maria'];
//Acessar indice da lista
const pedro = names[1];
//Remove o primeiro registro da lista
//names.shift();
//Adiciona valor no inicio da lista
names.unshift('Mariana')
//Remove o ultimo valor da lista
names.pop()
//Adiciona valor ao final da lista
names.push('Julia')
//Reassinalar registro da lista
names[2] = "Laura";
//Organiza a lista em ordem alfabética
const indexOfWellington = names.indexOf("Wellington");
const sortedNames = names.sort();

//Verificar se uma determinada variável é uma lista
const namesIsArray = Array.isArray(names);

//Retorna a quantidade de items na lista
console.log(names.length);

console.log(names);
console.log(sortedNames);
console.log(namesIsArray)