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

//sum of numbers in an array
function sumArray(arr) {
    const sum = 0;

    for (const elem of arr) {
        sum = sum + elem;
    }
}



// document.querySelector('block1-btn1').addEventListener('click', () => {
//     const array1 = newArray();    
// } )