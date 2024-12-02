'use strict';

let buttonElem = document.querySelector('.negativ button');



function negative() {
    buttonElem.classList.toggle('negativ-on-button')
}


buttonElem.addEventListener('click', negative)


console.log(buttonElem)