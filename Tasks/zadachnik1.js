'use strict'


//create array
function newArray() {
    const array = [];

    while(true) {
        const input = +prompt('Введите элемент массива (или нажмите "Отмена" для завершения) ');
        alert(typeof(input));

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
        sum = sum + element;
    }

    return sum;
}



const button1Element = document.querySelector('.block1-btn1');
button1Element.addEventListener('click', () => {
    console.log('begin')
    const step1 = newArray();
    console.log('step 1')
    const step2 = sumArray(step1);
    console.log('step 2')
    alert(`Сумма всех чисел в массиве равна ${step2}.`);
})