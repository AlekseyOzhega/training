'use strict';

let buttonElem = document.querySelector('.negativ button');
let bodyElem = document.body;


function negative() {
    buttonElem.classList.toggle('negativ-on-button')
    bodyElem.classList.toggle('bg-negative')

}

buttonElem.addEventListener('click', negative)

console.log(buttonElem)
console.log(bodyElem)




//Урок 33


let todoItemElement = document.querySelector('todo-item');

todoItemElement.foreach

todoItemElement.forEach( (todoItemElement) => {
    todoItemElement.classList.add('green')
})