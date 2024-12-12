'use strict';

//Повтор

console.log('Начало кода..');

let pElement = document.querySelectorAll('p');



function animationText() {
    pElement.forEach( (pElement) => {
        pElement.classList.add('p-color')
    })
}

document.addEventListener('preloaderClose', () => {
    setTimeout(() => {
        animationText()
    }, 6000);
})

setTimeout(() => {
    try {
        
    }
}, 4000);

