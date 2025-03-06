'use strict'


//create array
function newArray() {
    const array = [];

    while(true) {
        const input = prompt('Введите элемент массива (или нажмите "Отмена" для завершения) ');

        if(input === null || input.trim() === "") {
            break;
        }

        array.push(input)
    }

    return array;
};

document.querySelector('block1-btn1').addEventListener('click', )