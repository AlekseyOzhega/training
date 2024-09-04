'use strict';

//Массивы


// let fruits = ['Яблоко', 'Апельсин', 'Груша',];

// fruits[fruits.length] = '1st';
// alert( fruits );
// fruits.push('2nd');
// alert( fruits );

// alert( fruits.pop() );
// alert( fruits );

// fruits.push('Вишня');
// alert( fruits );

// alert( fruits.shift() );
// alert( fruits );

// fruits.unshift('Дыня');
// alert( fruits );

// fruits.push( 'Мандарин', 'Киви' );
// fruits.unshift('Банан', 'Авокадо')
// alert( fruits );

// let arr = fruits;

// arr.push('Final');
// alert( fruits );


//Задачи

// let styles = ['Джаз', 'Блюз'];

// styles.push('Рок-н-ролл');

// styles[ Math.floor( ( styles.length - 1 ) / 2 ) ] = 'Классика';

// alert( styles.shift() );

// styles.unshift('Реп', 'Регги');

// alert( styles );


// let arr = ["a", "b"];

// arr.push(function() {
//   alert( this );
// });

// arr[2]();


// function sumInput() {
//     let arr = [];
//     let sum = 0;
//     while (true) {
//         let arrNew = prompt('Введите значения массива.');

//         if ( arrNew === '' || arrNew === null ) break;

//         arr.push( arrNew );      

//         if ( isNaN(arrNew) ) { arrNew = 0 };  

//         sum += +arrNew;
//     }

//     return sum;
// }

// let arr2 = sumInput();

// alert( arr2 );


// function getMaxSubSum(arr) {
//     let maxSum = 0;
//     let currentSum = 0;

//     for (let item of arr) {
//         currentSum += item;
//         maxSum = Math.max(maxSum, currentSum);
//         if ( currentSum < 0 ) {
//             currentSum = 0;
//         }
//     }

//     return maxSum;
// }

// getMaxSubSum([-1, 2, 3, -9]) == 5 (сумма выделенных элементов)
// getMaxSubSum([2, -1, 2, 3, -9]) == 6
// getMaxSubSum([-1, 2, 3, -9, 11]) == 11
// getMaxSubSum([-2, -1, 1, 2]) == 3
// getMaxSubSum([100, -9, 2, -3, 5]) == 100
// getMaxSubSum([1, 2, 3]) == 6 (берём все)

// alert( getMaxSubSum([-1, 2, 3, -9]) );
// alert( getMaxSubSum([2, -1, 2, 3, -9]) );
// alert( getMaxSubSum([-1, 2, 3, -9, 11]) );
// alert( getMaxSubSum([-2, -1, 1, 2]) );
// alert( getMaxSubSum([100, -9, 2, -3, 5]) );
// alert( getMaxSubSum([1, 2, 3]) );


//Методы массивов

// let arr = [1, 2, 3, 4];

// arr.splice(2, 0, 2.5); 

// alert( arr );

// alert( [1, 2, 3, 4].slice(1, 3) );

// alert( [1, 2, 3].concat({
//     0: 'что-то', 
//     1: 'ещё', 
//     [Symbol.isConcatSpreadable]: true, 
//     length: 2
// } ) );

// let arr = ['Bilbo', 'Gimli', 'Gendolf'];

// arr.forEach((item, index, array) => {
//     alert(`У элемента ${item} индекс ${index} в массиве \"${array} \".`);
// });

// let arr = [1, 2, 3, 4];

// alert( arr.indexOf(2) );
// alert( arr.includes(3) );

// let arr = [NaN];
// alert( arr.indexOf(NaN) );
// alert( arr.includes(NaN) );

// let users = [
//     {id: 1, name: 'Вася'},
//     {id: 2, name: 'Гриша'},
//     {id: 3, name: 'Петя'}
// ];

// let user = users.find( item => item.id == 2 );
// alert( user.name );

// let someUsers = users.filter( item => item.id < 3);

// alert( someUsers.length );

// let arr = ['Bilbo', 'Gimli', 'Gendolf'];

// let lengths = arr.map( item => item.length );

// alert( lengths );


// let arr = [1, 2, 15];

// let arr2 = (arr.sort());

// alert( arr );
// alert( arr2 );

// function compareNumberic(a, b) {
//     alert(`Сравниваются элементы \"${a}\" и \"${b}\"`);
//     if ( a > b ) return 1;
//     if ( a == b ) return 0;
//     if ( a < b ) return -1;
// };

// let arr = [1, 11, 24, 2, 15, 3];

// arr.sort(compareNumberic);

// alert( arr );

// let names = 'Вася, Петя, Гриша, Федя';
// let arr = names.split(', ');
// alert( arr );


// let arr = [1, 2, 3, 4, 5];

// let result = arr.reduce( (sum, current) => sum + current);

// alert( result );

// alert( Array.isArray( arr ));

// let arr = [];

// let result = arr.reduce( (sum, current) => sum + current);

// alert( result );

// let users = [
//     {name: 'John', age: 23},
//     {name: 'Bill', age: 17},
//     {name: 'Dick', age: 43},
//     {name: 'Mett', age: 33},
//     {name: 'Alan', age: 26},
//     {name: 'Alex', age: 19},
// ];

// let army = {
//     minAge: 18,
//     maxAge: 27,
//     canJoin(user) {
//         return user.age >= this.minAge && user.age < this.maxAge;
//     },
// };

// let soldiers = users.filter(user => army.canJoin(user));

// console.log( soldiers );


//Задачи

//Моё решение
// function camelize(str) {
//     str = str.split('-');

//     str = str.map(
//         (item, index) =>
//         index == 0 ? item : item[0].toUpperCase() + item.slice(1)
//     );

//     return str.join('');
// }


// let arr = ['my', 'little', 'array'].map(
//         (item, index) =>
//         index == 0 ? item : item[0].toUpperCase() + item.slice(1)
//     );

// console.log( arr );
// let arr3 = arr.join('');
// console.log( arr3 );


// let arrayZ = ['my', 'little', 'array'];
// let arrayY = arrayZ.map( function(item, index) {
//     if ( index >= 1) {
//         return item[0].toUpperCase() + item.slice(1)
//     } else return item;
// });

// let arrayY = arrayZ.map( 
//     (item, index) =>
//     index == 0 ? item : item[0].toUpperCase() + item.slice(1)
// );

// console.log( arrayY );


//Решение в учебнике
// function camelize(str) {
//     return str
//       .split('-') // разбивает 'my-long-word' на массив ['my', 'long', 'word']
//       .map(
         // Переводит в верхний регистр первые буквы всех элементом массива за исключением первого
         // превращает ['my', 'long', 'word'] в ['my', 'Long', 'Word']
//         (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//       )
//       .join(''); // соединяет ['my', 'Long', 'Word'] в 'myLongWord'
// }

// alert(camelize('background-color'));
// alert(camelize('list-style-image'));
// alert(camelize('-webkit-transition'));


// function filterRange(arr, a, b) {
//     // arr = arr.filter( item => item >= a );
//     // arr = arr.filter( item => item <= b );
//     return arr.filter( item => item >= a && item <= b);
// }

// let arr = [5, 3, 8, 1];

// console.log( filterRange( arr, 1, 4) );


// function filterRangeInPlace(arr, a, b) {

//     for ( let i = 0; i < arr.length; i++ ) {
//         let val = arr[i];

//         if ( val < a || val > b ) {
//             arr.splice(i, 1);
//             i--;
//         }
//     }
// }

// let arr = [5, 3, 8, 1];

// filterRangeInPlace( arr, 1, 4 );

// console.log( arr);

//Моё решение
// let arr = [5, 2, 1, -10, 8, 15, 22];

// function compareNumberic(a, b) {
//     if ( a > b ) return 1;
//     if ( a == b ) return 0;
//     if ( a < b ) return -1;
// }
// arr.sort( compareNumberic ).reverse();
// arr.sort().reverse();

//Решение из учебника
// arr.sort((a, b) => b - a);

// console.log( arr );


// let arr = ["HTML", "JavaScript", "CSS"];

// function copySorted(arr) {
//     return arr.slice().sort();
// }

// let sorted = copySorted(arr);

// console.log(arr);
// console.log(sorted);


// function Calculator() {
    
//     this.methods = {
//         '-': (a, b) => a - b,
//         '+': (a, b) => a + b,
//     };

//     this.calculate = function(str) {

//         let split = str.split(' '),
//             a = +split[0],
//             op = split[1],
//             b = +split[2]

//         if ( !this.methods[op] || isNaN(a) || isNaN(b) ) {
//             return NaN;
//         }

//         return this.methods[op](a, b);
//     }

//     this.addMethod = function(name, func) {
//         this.methods[name] = func;
//     };
// };

// let func = ((a, b) => a * b);
// let result2 = powerCalc.addMethod('*'. func);

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [ vasya, petya, masha ];

// let names = users.map( item => item.name )

// alert( names );

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [ vasya, petya, masha ];

// let usersMapped = users.map( item => ({
//     fullname: item.name + ' ' + item.surname,
//     id: item.id,
// }));

// console.log( usersMapped);


// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let arr = [ vasya, petya, masha ];

// function sortByAge(users) {
//     users.sort( (a, b) => a.age - b.age);
// }

// sortByAge(arr);

// console.log(arr);


function schuffle(arr) {
    arr.sort( () => Math.random() - 0.5 );
}

let arr = [1, 2, 3, 5];

schuffle(arr);
alert( arr);
schuffle(arr);
alert( arr);