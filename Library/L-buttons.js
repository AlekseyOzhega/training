'use strict';


let liElement = document.querySelectorAll('.list ul li');
let btnChange = document.querySelector('.title');


// console.log(btnChange)

function changeLi() {
    liElement.forEach( (liElement) => {
        liElement.classList.toggle('change-li')
    })
}

btnChange.addEventListener('click', changeLi)

console.log('test')