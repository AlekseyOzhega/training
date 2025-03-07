'use strict'


//create array
function newArray() {
    const array = [];

    while(true) {
        const input = prompt('Введите элемент массива (или нажмите "Отмена" для завершения) ');

        if (isNaN(input)) {
            alert('Вводить нужно только числа.');
            continue;
        }

        if(input === null) {
            break;
        }

        array.push(input)
    }

    return array;
};

//sum of numbers in an array
function sumArray(arr) {
    let sum = 0;

    for (let element of arr) {
        sum = sum + +element;
    }

    return sum;
}

//Button No. 1 creates an array and shows the sum of its elements
document.querySelector('.block1-btn1').addEventListener('click', () => {
    const step1 = newArray();
    const step2 = sumArray(step1);
    alert(`Сумма всех чисел в массиве равна ${step2}.`);
});


//
function findMax(arr) {
    let max = 0;

    for (let element of arr) {
        if( element > max) max = element;
    }

    return max;
}

document.querySelector('.block1-btn2').addEventListener('click', () => {
    const step1 = newArray();
    const step2 = findMax(step1);
    alert(`Элемент массива с максимальным значение это - ${step2}.`);
});