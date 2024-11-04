'use strict';


let formElement = document.querySelector('.forma');
let loginInputElement = document.querySelector('.form__input[name="login"]')
let passwordInputElement = document.querySelector('.form__input[name="password"]')
let submitButtonElement = document.querySelector('.form__button')

// console.log(formElement);
// console.log(loginInputElement);
// console.log(passwordInputElement);
// console.log(submitButtonElement);

// formElement.action = '/register';
// console.log('formElement action: ', formElement.action);

console.dir(formElement);

console.log('data-js-form: ', formElement.getAttribute('data-js-form'));
console.log('qwerty:       ', formElement.getAttribute('qwerty'));

formElement.setAttribute('data-js-form', 'new12345');
formElement.setAttribute('qwerty', 'newTest');

console.log('==========================================')

console.log('data-js-form: ', formElement.getAttribute('data-js-form'));
console.log('qwerty:       ', formElement.getAttribute('qwerty'));
