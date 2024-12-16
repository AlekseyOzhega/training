'use strict';


let liElement = document.querySelectorAll('.list ul li');

function changeLi() {
    liElement.forEach( (liElement) => {
        liElement.classList.toggle('.change-li')
    })
}

changeLi()
console.log('test')