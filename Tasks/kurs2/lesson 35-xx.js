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

// document.addEventListener('keydown', (event) => {
//     if (event.target.matches('.scnd')) {
//         let anyDigitRegExp = /\d/

//         if (anyDigitRegExp.test(event.key)) {
//             event.preventDefault()
//             console.log('Отменён ввод цифры: ', event.key)
//         }
//     }

// })


let inputElement = document.querySelector('[data-js-input]');
let nameOutputElement = document.querySelector('.name-output');

inputElement.addEventListener('input', (event) => {
    nameOutputElement.textContent = inputElement.value
})

