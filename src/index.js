import validator from './validator.js';
let cardNumber = document.getElementById('cardNumber');
const payButton = document.getElementById('payButton');
let showIsValid = document.getElementById('showIsValid');

function showValidation () {
    let creditCardNumber = cardNumber.value;

    if (creditCardNumber=='') {
        alert('Escribe tu número de tarjeta de crédito');
    }
    else {
        let lastFourDigits = validator.maskify(creditCardNumber);
        cardNumber.value = lastFourDigits;
        
        let validation = validator.isValid(creditCardNumber);

        if (validation==true) {
            let valid = "Aprobado";
            showIsValid.innerHTML = valid;
        }
        else {
            let invalid = "Tarjeta inválida";
            showIsValid.innerHTML = invalid;
        }
    } 
}

payButton.addEventListener("click", showValidation);
console.log(validator);