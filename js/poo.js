/**
 *                      Aula 11
 *                      -------
 *             Programação Orientada a Objetos
 *             ------------------------------- 
 *                      Etapas da POO 
 *  1º -> Criar a classe
 *  2º -> Definir e assinalar as propriedades
 *  3º -> Criar métodos
 *  4º -> Instanciar a classe
 *  5º -> Manipular a classe, chamar funções, imprimir...
 */
/*
//Criando uma classe
class Person {
  //Método construtor
  //Parâmetros (propriedades) que a classe deve ter;
  //EX:firstaName,lastName,age
  constructor(firstName, lastName, age) {
    //Assinalar as propriedades a classe
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  //Criando método dinâminco
  // getFullName(){
  //     return `${this.firstName} ${this.lastName}`;
  // }
  getFullName() {
    console.log(`${this.firstName} ${this.lastName}`);
  }
 //Método estático - Não utiliza atributos da classe
  static speak() {
    console.log('Hello World!');
  }
}

//Instanciar a classe
const person = new Person("Wellington", "Souza", 40);

//console.log(person);

//Chamando a função dentro do console
//console.log(person.getFullName());

//chamando a função
Person.speak(); // Estático
person.getFullName(); // Dinâmico */
/**
 *   ------------   HERANÇA   -----------------------
 */
 class Animal {
    constructor(name) {
        this.name = name;
    }
    //Método
    speak() {
        console.log(`${this.name} made some noise!`)
    }
}
//Herança da classe animal
class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    //Sobreescrever método
    speak() { 
        console.log(`${this.name} barked!`);
    }
}
//Instanciando a classe
const animal = new Animal("Simba");
const dog = new Dog("Bob");
//Chamando a função
animal.speak();
dog.speak();
