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

    return sum;
}



let test = document.querySelector('.block1-btn1');
console.log(test)
// .addEventListener('click', (event) => {
//     console.log('Click')
    // const step1 = newArray();
    // const step2 = sumArray(step1);
    // alert(`Сумма всех чисел в массиве равна ${step2}.`);
// })