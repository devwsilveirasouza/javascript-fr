/** ------------- Aula 05
 *  Objetos
 */
/*const person = {
    firstName: 'Wellington',
    lastName: 'Souza',
    age: '40',
    hobbies: ['Assistir filmes', 'Leitura', 'Futebol'],
    dog: {
        name: 'Tom',
        age: 4
    }
};

// const firstName = person.firstName;
// const lastName = person.lastName;
// const age = person.age;
// const hobbies = person.hobbies;

//Mesma coisa que acima
const {firstName: primeiroNome, lastName, age, hobbies, 
    dog: { name: dogName }, 
} = person;

// //Acessar um item da lista
const read = person.hobbies[2];

console.log(primeiroNome)
console.log(lastName)
console.log(age)
console.log(hobbies)

//person.dog = "Tom";

console.log(read)

console.log(person.dog.age);
console.log(dogName);*/

const tarefas = [
    { 
        id: 1, 
        description: "Estudar programação",
        isCompleted: false,
    },
    { 
        id: 2, 
        description: "Ler",
        isCompleted: true,
    },
    {
        id: 3, 
        description: "Treinar",
        isCompleted: true,
    },
];

//const id = tarefas.id;
//const description = tarefas.description;
//const isCompleted = tarefas.isCompleted;

const { id, description, isCompleted } = tarefas;

const ler = tarefas[1];
const treinar = tarefas[2].description;
const estudar = tarefas[0];

//console.log(tarefas)

console.log(treinar)
//console.log(ler)
//console.log(estudar)

