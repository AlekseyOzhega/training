// import * as constants from './moduls/index.js'


//Урок 23


// console.log('Hello!')
// console.log(constants.a)
// console.log(constants.b)
// console.log(constants.c)
// constants.smile()


//Повтор

// let mass = ['Kva', 'Mo', 'Do'];
// let mass2 = [23, 33, 43];
// let mass3 = [23, 33, 43];
// let set = new Set([1, 2, 4]);
// set.add('John');
// set.add('Oscar');
// set.add('Billy');
// set.add('Oscar');
// set.add('Pacstone');
// set.add('Billy');
// set.add(mass2);
// set.add(23);
// set.add(mass3);

// console.log(set);

//Среднеарифметическое массива

// function midNum(arr) {
//     let midNumbMass = 0;
 
//     for (let key of arr) {
//         midNumbMass += key;
//     }

//     return midNumbMass / arr.length;
// }

// let massSize = +prompt('Введит число, размер массива..', 1);

// let mass = [];
// let midNumbMass = 0;

// for (let i = 1; i <= massSize; i++) {
//     let rand = Math.round(Math.random() * 10);
//     mass.push(rand);
// }

// for (let key of mass) {
//     midNumbMass += key;
// }

// midNumbMass = midNumbMass / massSize;
// console.log(mass);
// console.log( midNum(mass) );


//Наибольший элемент массива

// let massSize = +prompt('Введит число, размер массива..', 1);

// let mass = [];

// for (let i = 1; i <= massSize; i++) {
//     let rand = Math.round(Math.random() * 100);
//     mass.push(rand);
// }

// function bigestElement(arr) {
//     let maxElem = 0;

//     for (let key of arr) {
//         if (key > maxElem) {
//             maxElem = key;
//         }
//     }

//     return maxElem;
// }

// console.log(mass);
// console.log(bigestElement(mass));


//Наименьший элемент массива

// let massSize = +prompt('Введит число, размер массива..', 1);

// let mass = [];

// for (let i = 1; i <= massSize; i++) {
//     let rand = Math.round(Math.random() * 100);
//     mass.push(rand);
// }

// function smallestElement(arr) {
//     let minElem = arr[0];

//     for (let key of arr) {
//         if (key < minElem) {
//             minElem = key;
//         }
//     }

//     return minElem;
// }

// console.log(mass);
// console.log(smallestElement(mass));

//Поиск элемента в массиве

// let massSize = +prompt('Введит число, размер массива..', 1);

// let mass = [];

// for (let i = 1; i <= massSize; i++) {
//     let rand = Math.round(Math.random() * 100);
//     mass.push(rand);
// }

// function searchElement(elem, arr) {
//     for (let i = 0; i <= arr.length; i++) {
//         if (arr[i] == elem) {
//             return i;
//         }
//     }

//     return -1;
// }


// console.log('Hello!');
// console.log(`
//     Пробелы
//     Пробелы
//     Пробелы
//     Пробелы
//     Пробелы
//     Пробелы`);
// console.log(mass);

// let searchElem = +prompt('Введите искомое число.');

// console.log('Индекс элемента: ', searchElement(searchElem, mass));



//Среднеарефметичепское от суммы массива

// let massSize = +prompt('Введит число, размер массива..', 1);
// let mass = [];

// for (let i = 1; i <= massSize; i++) {
//     let rand = Math.round(Math.random() * 10);
//     mass.push(rand);
// }

// function calculateAverage(arr) {
//     let sum =0;
//     for (let key of arr) {
//         sum += key;
//     }
//     return sum / arr.length;
// }

// console.log(`
//     Пробелы
//     Пробелы
//     Пробелы
//     Пробелы
//     Пробелы
//     Пробелы

// `);
// console.log(mass);
// console.log(calculateAverage(mass));




//Урок 24

// console.log(window);
// console.log(
//     `Мой браузер: `, 
//     window.navigator.userAgent
// );
// console.log(
//     'Высота окна браузера: ',
//     window.screen.height
// )
// console.log(
//     'Длина "истории" текущей сессии браузера: ',
//     window.history.length
// )


// console.log(window.document)


// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);


// console.log('Parents: ', document.body.parentElement);
// console.log('Children: ', document.body.children[2]);


// let divDom = document.body.children[2];

// console.log(divDom);

// console.log('Первый дочерний элемент: ', divDom.firstElementChild);
// console.log('Последний дочерний элемент: ', divDom.lastElementChild);


// let pElements = document.querySelectorAll('.elem');

// console.log('Элемeнты: ', pElements);

// pElements.forEach((elem) => {
//     console.log('Элемент текста: ', elem)
// })