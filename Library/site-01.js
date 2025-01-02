'use strik';

let btnNavElements = document.querySelectorAll('.nav-button');
let titleNavElements = document.querySelectorAll('.title-nav');
console.log(titleNavElements);

// document.addEventListener('pointerdown', (event) => {
//     if (event.target.matches('.nav-button')) {
//         console.log('bingo')
//     }

//     console.log('not bingo')
//     console.log('event.target: ', event.target)
// })


let onTodoItemClick = (todoItemElement) => {
    todoItemElement.classList.toggle('green')
};