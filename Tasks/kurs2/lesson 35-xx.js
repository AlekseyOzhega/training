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

