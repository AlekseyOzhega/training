'use strict';


// let formElement = document.querySelector('.forma');
// let loginInputElement = document.querySelector('.form__input[name="login"]')
// let passwordInputElement = document.querySelector('.form__input[name="password"]')
// let submitButtonElement = document.querySelector('.form__button')

// console.log(formElement);
// console.log(loginInputElement);
// console.log(passwordInputElement);
// console.log(submitButtonElement);

// formElement.action = '/register';
// console.log('formElement action: ', formElement.action);

// console.dir(formElement);

// console.log('data-js-form: ', formElement.getAttribute('data-js-form'));
// console.log('qwerty:       ', formElement.getAttribute('qwerty'));

// formElement.setAttribute('data-js-form', 'new12345');
// formElement.setAttribute('qwerty', 'newTest');

// console.log('==========================================')

// console.log('data-js-form: ', formElement.getAttribute('data-js-form'));
// console.log('qwerty:       ', formElement.getAttribute('qwerty'));

// formElement.removeAttribute('qwerty');

// console.log('==========================================')

// console.log('data-js-form: ', formElement.getAttribute('data-js-form'));
// console.log('qwerty:       ', formElement.getAttribute('qwerty'));
// console.log('has data-js-form: ', formElement.hasAttribute('data-js-form'));

// formElement.setAttribute('name', 'newTest');

// console.dir(formElement)

// let formFactorElement = document.querySelector('[data-js-formfactor]');
// let getFormFactor = JSON.parse(
//     formFactorElement.getAttribute('data-js-formfactor')
// )

// console.log(getFormFactor);

// getFormFactor.age = 33;

// console.log(getFormFactor);


//Повтор

// function glueArr(arr1, arr2) {
//     let mass = [];

//     for (let key of arr2) {
//         mass.push(key);
//     }

//     for (let key of arr1) {
//         mass.push(key);
//     }

//     return mass;
// }

// let arrA = [23, 32, 33, 22];
// let arrB = ['A', 'B', 'C', 'd'];

// console.log('Первый массив: ', arrA);
// console.log('Второй массив: ', arrB);

// let sumArr = glueArr(arrA, arrB);

// console.log('Сложенные массивы: ', sumArr)



//функия для ввыда данных из массива

// function printArray(arr) {
//     console.log(`Массив состоит из ${arr.length} элементов.`)
//     for (let key of arr) {
//         console.log(`Элемент массива: ${key}`)
//     }
// }

// let mass = [23, 32, 'Fred', true];

// printArray(mass);
// console.table(mass);


//функия для ввыда данных из двумерного массива

// let mart = [[1, 2, 3], 'Book', ['a', 'b', 'c'], [true, false, true]];

// function printMatrix(arr) {
//     for (let key of arr) {
//         if (Array.isArray(key)) {
//             console.log('==================================')
//             for (let keyM of key) {
//                 console.log(`  Элемент: ${keyM}`)
//             }
//             console.log('==================================')
//         } else {
//             console.log(`Элемент: ${key}`)
//         }


//     }
// }

// printMatrix(mart);

// console.table(mart);

//Функция для создания массива

// function inputArray() {
//     let mass = [];

//     while (true) {
//         let add = prompt(`
//             Текущая длина массива ${mass.length}
//             Введите эелемент массива: `);

//         if (add) {
//             mass.push(add);
//         } else {
//             return mass;
//         }
//     }
// }

// console.log(inputArray())

//Функция для создания матрицы массива

// function inputMatrixArray() {
//     let mass = [];

//     let massLength = +prompt('Сколько строк будет в матрице?', 1);

//     for (let i = 0; i < massLength; i++) {
//         let massElem = [];

//         while (true) {
//             let add = prompt(`
//                 Текущая длина строки матрицы ${massElem.length}
//                 Введите эелемент массива: `);

//             if (add) {
//                 massElem.push(add);
//             } else {
//                 mass.push(massElem);
//                 break;
//             }
//         }           
//     }

//     return mass;
// }

// console.log('Матрица: ', inputMatrixArray());

//Book

// class Book {
//     constructor(name, author, year) {
//         this.name = name;
//         this.author = author;
//         this.year = year;
//     }
// }

// function bookInfo(obj) {
//     console.log(`Книга под названием "${obj.name}" за авторством ${obj.author}а ${obj.year} года издания."`)
// }

// let book1 = new Book('Хоббит', 'Толкиен', 1972);
// let book2 = new Book('Стальная крыса', 'Гарри Гаррисон', 1988);

// console.log(book1, book2)

// bookInfo(book1);
// bookInfo(book2);

//Company

// class Company {
//     constructor(obj) {
//         this.adreee = {'city': 1};
//         this.adress[city] = obj.city;
//         // this.adress.street = obj.street;
//     }
// }

// let object1 = {'city': 'London', 'street': 'Bayker'}

// // let testCo = new Company({'city': 'London', 'street': 'Bayker'});

// let testCo2 = new Company(object1)

// console.log(testCo2)





//Урок 28

// let firstRadioElement = document.getElementById('rb');
// let secondRadioElement = document.getElementById('rb2');
// let statusE = firstRadioElement.checked;

// if (statusE = true) {
//     buttonElement.style.cssText += `
//     background-color: red;
//     `;
// }

//не работает


// buttonElement.style.cssText += `
// background-color: red;
// `;

// console.log(buttonElement);
// console.log(firstRadioElement);
// console.log(secondRadioElement);


// let buttonElement = document.querySelector('.form__button');
// console.log(buttonElement.style)
// buttonElement.style.backgroundColor = 'red'

// buttonElement.style.cssText += `
// border: 2px solid blue;
// `;

// let formElement = document.querySelector('.forma');

// formElement.classList.add('red');
// formElement.classList.remove('forma');
// formElement.classList.toggle('forma');
// formElement.classList.toggle('door');

// console.log(formElement.className);

// console.log(formElement);

// let formElement = document.querySelector('.forma');

// let inntervalColor = setInterval( () => {
//     formElement.classList.toggle('orange');
// }, 14000);


//Урок 29

// let boxElement = document.querySelector('.box');

// console.log('Ширина: ', boxElement.offsetWidth);
// console.log('Высота: ', boxElement.offsetHeight);

// console.log('Ширина левой рамки: ', boxElement.clientLeft);
// console.log('Ширина верхней рамки: ', boxElement.clientTop);

// console.log('Ширина без учета рамки и скролла: ', boxElement.clientWidth);
// console.log('Высота без учета рамки и скролла: ', boxElement.clientHeight);

// console.log('Полный размер элемента по ширине : ', boxElement.scrollWidth);
// console.log('Полный размер элемента по высоте : ', boxElement.scrollHeight);

// boxElement.scrollLeft = 10;
// boxElement.scrollTop = 50;

// boxElement.scroll(10, 50);

// console.log('Ширина невидимой, уже прокрученной области: ', boxElement.scrollLeft);
// console.log('Высота невидимой, уже прокрученной области: ', boxElement.scrollTop);


// let boxElement = document.querySelector('.box');
// let boxElementParams = boxElement.getBoundingClientRect();

// console.log(boxElementParams);

// console.log('Координаты по осям X и Y: ', boxElementParams.x, boxElementParams.y);

// console.log('Координаты правого нижнего угла элемента: ', 
//     boxElementParams.right, 
//     boxElementParams.bottom
// );

// console.log('Координаты правого верхнего угла элемента: ', 
//     boxElementParams.right, 
//     boxElementParams.top
// );

// console.log('Координаты левого нижнего угла элемента: ', 
//     boxElementParams.left, 
//     boxElementParams.bottom
// );

// console.log('window.scrollX: ', window.scrollX)
// console.log('window.scrollY: ', window.scrollY)


//урок 30

// let htmlElement = document.documentElement;
// let bodyElement = document.body;

// console.log('Ширина: ', htmlElement.clientWidth);
// console.log('Высота: ', htmlElement.clientHeight);

// console.log('Ширина окна через window: ', window.innerWidth);
// console.log('Высота окна через window: ', window.innerHeight);

// console.log('Ширина страницы: ', htmlElement.scrollWidth);

// console.log('Высота страницы: ', htmlElement.scrollHeight);

// console.log('Наверняка корректная высота страницы: ',
//     Math.max(
//         htmlElement.clientHeight, htmlElement.scrollHeight, htmlElement.offsetHeight,
//         bodyElement.clientHeight, bodyElement.scrollHeight, bodyElement.offsetHeight
//     )
// );


// window.scroll({
//     top: 200,
//     behavior: 'smooth',
// })

// setTimeout( () => {
//     window.scroll({
//         top: 50,
//         behavior: 'smooth',
//     })
// }, 3000)

// setTimeout( () => {
//     window.scroll({
//         top: 150,
//         behavior: 'smooth',
//     })
// }, 6000)


// let preendElement = document.querySelector('.preend');



// setTimeout(() => {
//     preendElement.scrollIntoView({
//         behavior: 'smooth',
//         block: 'center'
//     })
// }, 300);


//Урок 31

let boxElement = document.querySelector('.box');
boxElement.textContent += 'Новый текст'
console.log('Содержимое элемента: ', boxElement.textContent);

console.log('Содержимое эелемента вместе с тэгами: ', boxElement.innerHTML);

boxElement.innerHTML = '<p>Element</p>'

console.log('Содержимое эелемента вместе с тэгами: ', boxElement.innerHTML);