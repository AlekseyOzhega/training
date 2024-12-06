'use strict';

let buttonElem = document.querySelector('.negativ button');
let bodyElem = document.body;


function negative() {
    buttonElem.classList.toggle('negativ-on-button')
    bodyElem.classList.toggle('bg-negative')

}

buttonElem.addEventListener('click', negative)

// console.log(buttonElem)
// console.log(bodyElem)




//Урок 33


let todoItemElement = document.querySelectorAll('.todo-item');
let btnPlusElement = document.querySelector('.btn-plus');

// console.log(btnPlusElement);


todoItemElement.forEach((todoItemElement) => {
    todoItemElement.addEventListener('click', () => {
        todoItemElement.classList.toggle('green')
    })
})

function addTodoItem() {
    
}


btnPlusElement.addEventListener('click', () => {

})