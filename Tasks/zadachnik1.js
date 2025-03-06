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


// const button1Element = document.querySelector('.block1-btn1');
// console.log(button1Element)
// button1Element.addEventListener('click', () => {
//     console.log('click');
// })


const button1Element = document.querySelector('.block1-btn1');
button1Element.addEventListener('click', () => {
    console.log('begin')
    const step1 = newArray();
    console.log('step 1')
    const step2 = sumArray(step1);
    console.log('step 2')
    alert(`Сумма всех чисел в массиве равна ${step2}.`);
})