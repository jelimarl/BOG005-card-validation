import validator from './validator.js';
let cardNumber = document.getElementById('cardNumber');
const payButton = document.getElementById('payButton');
let showIsValid = document.getElementById('showIsValid');
let account = document.getElementById('account');

function showValidation () {
    let creditCardNumber = cardNumber.value;
    const patternComparison = /\D/.test(creditCardNumber);
    let accountNumber = account.value;

    if (accountNumber == '') {
        return alert('Ingresa la cuenta o ref de pago');
    }
    
    if(patternComparison == true) {
        alert('Ingresa solamente números');
    }
    else {

        if(cardNumber.value == '') {
            alert('Ingresa el número de tarjeta de crédito');
        }
        else {
            let lastFourDigits = validator.maskify(creditCardNumber);
            cardNumber.value = lastFourDigits;
                
            let validation = validator.isValid(creditCardNumber);
            if (validation==true) {
                showIsValid.innerHTML = 'Transacción Aprobada';
            }
            else {
                showIsValid.innerHTML = 'Tarjeta inválida';
            }
        }
    }
}     
payButton.addEventListener("click", showValidation);
