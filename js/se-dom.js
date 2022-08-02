/**
 *    ------------------   Aula 12   -------------------
 * 
 *                  SELECIONANDO ELEMENTOS DO DOM
 *                  -----------------------------
 */
//   ---   Selecionando 'apenas' um elemento id   ---
// const addUserText = document.getElementById("add-user");
//   ---   Altera conteúdo selecionado   ---
// addUserText.innerText = 'Adicionar Usuário:';
//   ---   Logando resultado no console   ---
//console.log(addUserText);
//   ---   Selecionar 'apenas' um elemento: id => # / class => .   ---
//const addUserText = document.querySelector("#add-user");
//   ---   Altera conteúdo selecionado   ---
//addUserText.textContent = 'Adicionar Usuário:';
//   ---   Logar resultado no console   ---
//console.log(addUserText);
//   ---   Selecionar Formulário   ---
//   +++   Retorna apenas um elemento   +++
// const myForm = document.querySelector(".container #my-form");
// console.log(myForm);
//   ***   Retornar multiplos elementos   ***
//   ---   Mais utilizado pela facilidade de acesso aos elementos   ---
// const allItems = document.querySelectorAll(".item");

// console.log(allItems[1]);
// console.log(allItems);

// const allItems = document.querySelectorAll(".items .item");
// console.log(allItems);
// console.log(allItems[1]);

//   ###   Não recomendado   ###
// const allItems = document.getElementsByClassName('item');
// console.log(allItems);

const allItems = document.getElementsByTagName('li');
console.log(allItems);