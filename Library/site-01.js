'use strik';

let btnNavElements = document.querySelectorAll('.nav-button');
let titleNavElements = document.querySelectorAll('.title-nav');


document.addEventListener('pointerover', (event) => {
    let btnElement = event.target.closest('.nav-button');


    if (btnElement) {
        let btnTitleElement = event.target.querySelector('.title-nav');
        btnTitleElement.classList.toggle('green')
    } else {

    }


})


let onBtnNavElements = (btnNavElements) => {
    btnNavElements.classList.toggle('green')
};