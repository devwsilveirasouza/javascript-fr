/**
 *    ----------------------   AULA 15   ----------------------------------------------------------------
 *
 *    ----------------------   CRIANDO E VALIDANDO FORMULÁRIO   -----------------------------------------
 */
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const submitButton = document.querySelector("#submit-button");

const errorMessage = document.querySelector(".msg");

const myForm = document.querySelector("#my-form");

const items = document.querySelector(".items");

submitButton.addEventListener("click", (validarform) => {
  validarform.preventDefault();

  const nameValue = nameInput.value;
  const emailValue = emailInput.value;

  if (nameValue === "" || emailValue === "") {
    errorMessage.textContent = "Favor preencher os campos vazios!";
    errorMessage.classList = "error";
    myForm.style.background = "yellow";

    //Define o tempo de exibição da mensagem de erro e apaga a mesma da tela
    setTimeout(() => {
      errorMessage.textContent = "";
      errorMessage.classList = "";
      nameInput.value = "";//Apagando dados do input
      emailInput.value = "";
      myForm.style.background = "";//Removendo background
    }, 3000); // Tempo de exibição
    return;
  }
  //Criando elemento dentro da lista
  const li = document.createElement("li");
  li.classList = "item";
  //li.textContent = `Nome: ${nameValue}, Email: ${emailValue}`;
  li.innerHTML = `Nome: ${nameValue}<br />Email: ${emailValue}`;
  //Atribuindo li a lista de items
  items.appendChild(li);

  console.log(li);
  
});
