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


// let arr = [
//     {name: "Bill", age:22, city: 'Москва'},
//     {name: "Will", age:26, city: 'Санкт-Питербург'},
//     {name: "John", age:21, city: 'Лондон'},
//     {name: "Steeve", age:23, city: 'Вашингтон'},
//     {name: "John", age:30, city: 'Пекин'},
// ];

// let result = arr.filter( ({city, age}) => {
//     return city === 'Москва' || age > 23;
// });

// let res = arr.map( (user) => {
//     return `${user.name}, ${user.age} лет, живет в г.${user.city}.`;
// })

// console.log( res );



// let arr = [23, 22, 1, 66, 34, 100, -3, 500];

// debugger
// let ageSum = arr.reduce( (sum, {age}) => sum + age, 0);

// console.log( 'Средний возраст = ', ageSum / arr.length );

// arr.reverse();

// console.log( arr );

// arr.sort( (a, b) => (a / 2) - b );

// console.log( arr );


//Урок 17


// let obj = {name: "Bill", age:22, city: 'Москва'};

// let keys = Object.keys( obj );
// let values = Object.values( obj );
// let objEntries = Object.entries( obj );

// objEntries.forEach( ([key, value]) => {
//     console.log(`Под ключом ${key} находится значение ${value}.`)
// })

// console.log( keys );
// console.log( values );


// let obj = {name: "Bill", age:22, city: 'Москва'};
// let objEntries = Object.entries( obj );

// console.log( objEntries );

// let objEntriesFormatted = objEntries.map( ([key, value]) => {
//     return ([key.toUpperCase(), `==> ${value} <==`])
// });

// console.log( objEntriesFormatted );

// let backToStartObject = Object.fromEntries(objEntriesFormatted);

// console.log( backToStartObject );


// let mapColl = new Map([
//     [1, 'Broock'], 
//     ['2', 'Eddy']
// ]);

// mapColl.set(3, 'Jr.');

// for (let key of mapColl.keys()) {
//     console.log('ключ: ', key);
// };

// for (let value of mapColl.values()) {
//     console.log('значение: ', value);
// };

// for ( let entrie of mapColl.entries() ) {
//     console.log( 'энтрие: ', entrie );
// };

// console.log( mapColl );

// console.log( mapColl.entries() );


// let set = new Set([1, 2, 1, 2, 3, 3, 1, 2, 3]);

// set.clear();
// set.add('Book');
// set.delete(1);

// console.log( set );
// console.log( set.has(1) );
// console.log( set.size );


