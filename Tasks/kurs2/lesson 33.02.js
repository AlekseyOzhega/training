'use strict';

//Повтор

console.log('Начало кода..');

let pElement = document.querySelectorAll('p');
let bodyElement = document.body;


function animationText() {
    pElement.forEach( (pElement) => {
        pElement.classList.add('p-color')
    })
    bodyElement.classList.add('body-bgc')
}

document.addEventListener('preloaderClose', () => {
    setTimeout(() => {
        animationText()
    }, 2000);
})

// setTimeout(() => {
//     try {
        
//     }
// }, 4000);

