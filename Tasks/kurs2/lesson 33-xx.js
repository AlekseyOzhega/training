'use strict';

let buttonElem = document.querySelector('.negativ button');
let bodyElem = document.body;
let h1Element = document.querySelector('h1');


function negative() {
    buttonElem.classList.toggle('negativ-on-button')
    bodyElem.classList.toggle('bg-negative')
    h1Element.classList.toggle('another-h1')
}

buttonElem.addEventListener('click', negative)

// console.log(buttonElem)
// console.log(bodyElem)




//Урок 33



// console.log(btnPlusElement);

// todoItemElement.forEach((todoItemElement) => {
//     todoItemElement.addEventListener('click', () => {
//         todoItemElement.classList.toggle('green')
//     })
// })


let todoItemElement = document.querySelectorAll('.todo-item');
let btnPlusElement = document.querySelector('.btn-plus');

function addTodoItem() {
    let todoListElement = document.querySelector('.todo-list');
    let newTodoItemElement = `<li class="todo-item"><span>Todo item...</span></li>`;

    todoListElement.insertAdjacentHTML('beforeend', newTodoItemElement)
}

btnPlusElement.addEventListener('click', addTodoItem);

let onTodoItemClick = (todoItemElement) => {
    todoItemElement.classList.toggle('green')
};

document.addEventListener('click', (event) => {
    let todoItemElement = event.target.closest('.todo-item');

    if (todoItemElement) {
        onTodoItemClick(todoItemElement)
    }
})



//Урок 34

// btnPlusElement.addEventListener('mousemove', () => {
//     console.log('Движение над кнопкой.')
// })

btnPlusElement.addEventListener('mouseover', () => {
    console.log('Курсор зашел в область кнопки.')
})

btnPlusElement.addEventListener('mouseout', () => {
    console.log('Курсор вышел из области кнопки.')
})