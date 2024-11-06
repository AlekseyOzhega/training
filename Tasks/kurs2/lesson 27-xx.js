'use strict';


// let formElement = document.querySelector('.forma');
// let loginInputElement = document.querySelector('.form__input[name="login"]')
// let passwordInputElement = document.querySelector('.form__input[name="password"]')
// let submitButtonElement = document.querySelector('.form__button')

// console.log(formElement);
// console.log(loginInputElement);
// console.log(passwordInputElement);
// console.log(submitButtonElement);

// formElement.action = '/register';
// console.log('formElement action: ', formElement.action);

// console.dir(formElement);

// console.log('data-js-form: ', formElement.getAttribute('data-js-form'));
// console.log('qwerty:       ', formElement.getAttribute('qwerty'));

// formElement.setAttribute('data-js-form', 'new12345');
// formElement.setAttribute('qwerty', 'newTest');

// console.log('==========================================')

// console.log('data-js-form: ', formElement.getAttribute('data-js-form'));
// console.log('qwerty:       ', formElement.getAttribute('qwerty'));

// formElement.removeAttribute('qwerty');

// console.log('==========================================')

// console.log('data-js-form: ', formElement.getAttribute('data-js-form'));
// console.log('qwerty:       ', formElement.getAttribute('qwerty'));
// console.log('has data-js-form: ', formElement.hasAttribute('data-js-form'));

// formElement.setAttribute('name', 'newTest');

// console.dir(formElement)

// let formFactorElement = document.querySelector('[data-js-formfactor]');
// let getFormFactor = JSON.parse(
//     formFactorElement.getAttribute('data-js-formfactor')
// )

// console.log(getFormFactor);

// getFormFactor.age = 33;

// console.log(getFormFactor);


//Повтор

function glueArr(arr1, arr2) {
    for (let key of arr1) {
        arr2.push(key);
    }
}

let arrA = [23, 32, 33, 22];
let arrB = ['A', 'B', 'C', 'd'];

