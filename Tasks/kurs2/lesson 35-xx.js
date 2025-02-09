'use strict'

let h1Element = document.querySelector('h1');
let ghostButtonElement = document.querySelector('.btn-ghost');
let ghostElement = document.querySelector('.ghost');
let bodyElement = document.body;
let buttonsAElement = document.querySelectorAll('header a')

function changeAllAButtons() {
    buttonsAElement.forEach((buttonsAElement) => {
        buttonsAElement.classList.toggle('another')
    }) 
}

ghostButtonElement.addEventListener('click', () => {
    bodyElement.classList.toggle('negativ')
    ghostElement.classList.toggle('is-visible')
    h1Element.classList.toggle('red-theme')
    changeAllAButtons()
})

// document.addEventListener('keydown', (event) => {
//     console.log('keydown: ', event);
// })

// document.addEventListener('keyup', (event) => {
//     console.log('keydown: ', event);
// })

// document.addEventListener('keydown', (event) => {
//     const {code} = event;

//     if (
//         code === 'KeyW'
//     ) {
//         event.preventDefault();
//         console.log('Нажатие кнопки W отменено!');
//     }
// })

document.addEventListener('keydown', (event) => {
    if (event.target.matches('.scnd')) {
        let anyDigitRegExp = /\d/

        if (anyDigitRegExp.test(event.key)) {
            event.preventDefault()
            console.log('Отменён ввод цифры: ', event.key)
        }
    }

})


let inputElement = document.querySelector('[data-js-input]');
let nameOutputElement = document.querySelector('.name-output');

inputElement.addEventListener('input', (event) => {
    nameOutputElement.textContent = inputElement.value
})


let input2Element = document.querySelector('[data-js-input2]');
let errorMessageElement = document.querySelector('#error-message');

input2Element.addEventListener('change', () => {
    let isInvalid = input2Element.value.length < 5;
    input2Element.classList.toggle('is-invalid', isInvalid);
    errorMessageElement.textContent = isInvalid
        ? 'Максимальная длина - 5 символов'
        : ''
})


document.addEventListener('cut', (event) => {
    console.log('Событие CUT: ', event)

    navigator.clipboard.readText().then((clipboardText) => {
        console.log('clipboardText: ', clipboardText)
    })
})

document.addEventListener('copy', (event) => {
    console.log('Событие copy: ', event)
    
    navigator.clipboard.readText().then((clipboardText) => {
        console.log('clipboardText: ', clipboardText)
    })
})

document.addEventListener('paste', (event) => {
    console.log('Событие paste: ', event)
    
    navigator.clipboard.readText().then((clipboardText) => {
        console.log('clipboardText: ', clipboardText)
    })
})


let loginInputElement = document.querySelector('#login');
let passwordInputElement = document.querySelector('#password');
let submitButtonElement = document.querySelector('button[type="submit"]');

// console.log(loginInputElement)
// console.log(passwordInputElement)
// console.log(submitButtonElement)