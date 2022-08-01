/**
 * AULA 09
 * 
 * Conceito de True e False
 */
//Exemplos de strings 'FALSE' 
const x = '';

console.log(!!x);
if (x) {
    console.log(x);
}

const y = 0;
console.log(!!y);

const a = null;
console.log(!!a);

const b = undefined;
console.log(!!b);

//Exemplo true 
const list = [];
console.log(!!list);

const object = {};
console.log(!!object);
//Inverter o resultado booleano
console.log(!object);