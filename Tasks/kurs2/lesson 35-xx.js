'use strict'

let h1Element = document.querySelector('h1');
let ghostButtonElement = document.querySelector('.btn-ghost');
let bodyElement = document.body;

ghostButtonElement.addEventListener('click', () => {
    bodyElement.classList.toggle('negativ')
})

