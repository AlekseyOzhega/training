'use strik';

let btnNavElements = document.querySelectorAll('.nav-button');
let titleNavElements = document.querySelectorAll('.title-nav');


document.addEventListener('pointerover', (event) => {
    let btnElement = event.target.closest('.nav-button');

    if (btnElement) {
        let btnTitleElement = btnElement.querySelector('.title-nav');
        console.log(btnTitleElement);
        if (btnTitleElement) {
            btnTitleElement.classList.add('title-nav-hov')
        }
    }
})

document.addEventListener('pointerout', (event) => {
    let btnElement = event.target.closest('.nav-button');

    if (btnElement) {
        let btnTitleElement = btnElement.querySelector('.title-nav');
        console.log(btnTitleElement);
        if (btnTitleElement) {
            btnTitleElement.classList.remove('title-nav-hov')
        }
    }
})

