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


// todoItemElement.forEach((todoItemElement) => {
//     todoItemElement.addEventListener('click', () => {
//         todoItemElement.classList.toggle('green')
//     })
// })

function addTodoItem() {
    let todoListElement = document.querySelector('.todo-list');
    let newTodoItemElement = `<li class="todo-item">Todo item...</li>`;

    todoListElement.insertAdjacentHTML('beforeend', newTodoItemElement)
}

btnPlusElement.addEventListener('click', addTodoItem);

let onTodoItemClick = (todoItemElement) => {
    todoItemElement.classList.toggle('green')
};

document.addEventListener('click', (event) => {
    if (event.target.classList.contains('todo-item') {
        onTodoItemClick();
    }
})



