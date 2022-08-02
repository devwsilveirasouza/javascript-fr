/**
 *    ----------------------   AULA 14   ----------------------------------------------------------------
 * 
 *    ----------------------   EVENTOS   ----------------------------------------------------------------
 */
//const submitButton = document.querySelector('#submit-button');

// const nameInput = document.querySelector('#name');
// const emailInput = document.querySelector('#email');
// const myForm = document.querySelector('#my-form');

// submitButton.addEventListener("click", function (e) {
//     e.preventDefault();

//     const nameValue = nameInput.value;
//     const emailValue = emailInput.value;

//     if (nameValue === "" || emailValue === "") {
//         alert("Please fill out all the required fields");
//     } else {
//         myForm.style.background = "green";
//         console.log("O nome é: " + nameValue + " e o Email é: " + emailValue);
//     }

    
// })

// submitButton.addEventListener('click', function(event) {
//     event.preventDefault();

//     console.log(event);
//     console.log("Clicked!");
// });

const submitButton = document.querySelector('#submit-button');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const myForm = document.querySelector('#my-form');

const items = document.querySelector(".items");
const body = document.querySelector('body');

submitButton.addEventListener("click", function (e) {
    e.preventDefault();

    const nameValue = nameInput.value;
    const emailValue = emailInput.value;

    if (nameValue === "" || emailValue === "") {
        alert("Please fill out all the required fields");
    } else {
        myForm.style.background = "green";
        body.style.background = "yellow";

        items.firstElementChild.textContent = nameValue;
        items.children[1].textContent = nameValue + " - " + emailValue;
        items.lastElementChild.textContent = emailValue;



        console.log("O nome é: " + nameValue + " e o Email é: " + emailValue);
    }

    
})