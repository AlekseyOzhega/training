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


//find the array element with the maximum value
function findMax(arr) {
    let max = 0;

    for (let element of arr) {
        if( element > max) max = element;
    }

    return max;
}

//Button No. 2 creates an array and find the array element with the maximum value
document.querySelector('.block1-btn2').addEventListener('click', () => {
    const step1 = newArray();
    const step2 = findMax(step1);
    alert(`Элемент массива с максимальным значение это ${step2}.`);
});


//the function filters the even elements of the array
function filterEven(arr) {
    let evenArray = [];

    for (let element of arr) {
        if( element%2 === 0 ) evenArray.push(element);
    }

    return evenArray;
}

//Button No. 3 creates an array and leaves only the even elements of the array
document.querySelector('.block1-btn3').addEventListener('click', () => {
    const step1 = newArray();
    const step2 = filterEven(step1);
    alert(`Массив с четными элементами [${step2}].`);
});


//Objects
//the class creates a car object
class CarObj {
    isRunning = false

    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;      
    }

    start() {
        this.isRunning = true;
        console.log('Машина завелась.')
    }

    stop() {
        this.isRunning = false;
        console.log('Машина заглохла.')
    }

    getInfo() {
        console.log(`Марка: ${this.brand}, Модель: ${this.model}, Год выпуска: ${this.year}.`)
    }
}

//button N4, enter information about the car
let carObj = new CarObj(0, 0, 0);
document.querySelector('.block1-btn4').addEventListener('click', () => {
    carObj.brand = 0;
    carObj.model = 0;
    carObj.year = 0;
    const carBrend = prompt('Введите бренд вашей машины.');
    carObj.brand = carBrend;
    const carModel = prompt('Введите модель вашей машины.');
    carObj.model = carModel;
    const carYear = prompt('Введите год выпуска вашей машины.');
    carObj.year = carYear;
    alert(`Ваша машина
        Марка: ${carObj.brand}, 
        Модель: ${carObj.model}, 
        Год выпуска: ${carObj.year}`
    )
});


//
class Library {
    books = [];

    addBook(tit, au, ye) {
        const newBook = {
            title: tit,
            author: au,
            year: ye,
            isAvialable: true
        }

        this.books.push(newBook);
    }

    borrowBook(titl) {
        const check = titl;
        this.books.forEach( function(item) {
            if(item.title === check) {
                item.isAvialable = false;
            }
        })
    }
}

let test = new Library;
console.log(test);
test.addBook('titl', 'name', 1001);
test.addBook('Название', 'Автор', 1221);
console.log(test);
