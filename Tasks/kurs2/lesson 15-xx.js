'use strict';


//Урок 15


// let arr = [
//     'Vasya',
//     33,
//     true,
//     {name: 'John', age: 33},
//     () => alert('Yo!'),
//     [1, 2, 3],
// ];

// let arr = 'Один, два, три, четыре';

// arr[99] = 'rock';

// alert( arr[3]['name'] );
// arr[4]();
// alert( arr[5][1] );

// arr.push('J', 23);
// arr.unshift(true, [1, 2, 3]);

// console.log( arr.join(' + ') );

// arr = arr.split(', ').join(' + ');

// console.log( arr ); 
// console.log( arr.at(-1) ); 

// let arr1 = [1, 2, 3, [1, 2]];
// let arr2 = [1, 2, 3, [1, 2]];

// const areArraysEqual = (arr1, arr2) => {

//     if ( arr1.length !== arr2.length ) {
//         return false;
//     }

//     for (let i = 0; i < arr1.length; i++) {
//         const val1 = arr1[i];
//         const val2 = arr2[i];

//         const areValuesArrays = (
//             Array.isArray(val1) && Array.isArray(val2)
//         );

//         if ( areValuesArrays ) {
//             if ( !( areArraysEqual(val1, val2) ) ) {
//                 return false;
//             } else continue;
//         }

//         if ( val1 !== val2 ) {
//             return false;
//         }
//     }

//     return true;
// };

// let result = areArraysEqual(arr1, arr2);

// console.log( result );


//Урок 16

// let arr = ['John', 33, true];

// let [name, age, medIn] = arr;

// console.log( 'name =', name, ', age = ', age, ' medIn = ', medIn, '.' );


// let arr = ['John', 33, true];

// arr.forEach( (elem, index, array) => {
//     console.log(`Под индексом ${index} находится элемент ${elem} в массиве 
//         ${array}.`);
// })


// let arr = [1, 2, 3, {name: 'John', age: 33}, 4];

// console.log( arr.findIndex( (element, index) => {
//     if ( element.age === 33 ) {
//         console.log( `Нашелся на индексе ${index}.` )
//         return true;
//     }
// }))

// console.log( arr.findIndex( (user) => user.age === 33));


// let num = Math.round(Math.random() * 100);

// num = num.toString(2);

// let arr = [21, 43, 11, 76, 49, 92, 55];
// let num = Math.min(...arr);
// let num2 = Math.max(...arr);

// alert('Минимальное из чисел = ' + num + ' и ' + ' максимальное из чисел = ' + num2 );


let arr = [
    {name: "Bill", age:22, city: 'Москва'},
    {name: "Will", age:26, city: 'Санкт-Питербург'},
    {name: "John", age:21, city: 'Лондон'},
    {name: "Steeve", age:23, city: 'Вашингтон'},
    {name: "John", age:30, city: 'Пекин'},
];

// let result = arr.filter( ({city, age}) => {
//     return city === 'Москва' || age > 23;
// });

let res = arr.map( (user) => {
    return `${user.name}, ${user.age} лет, живет в г.${user.city}.`;
})

console.log( result );