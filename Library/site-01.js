'use strik';

let btnNavElements = document.querySelectorAll('.nav-button');
let titleNavElements = document.querySelectorAll('.title-nav');
console.log(titleNavElements);

document.addEventListener('click', (event) => {
    let btnElement = event.target.closest('.title-nav');

    if (btnElement) {
        console.log('bingo!!!')
    } else {
        console.log('not bingo')
        console.log('event.target: ', event.target)
    }


})


let onBtnNavElements = (btnNavElements) => {
    btnNavElements.classList.toggle('green')
};