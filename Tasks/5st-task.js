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

let users = [
    {name: 'John', age: 23},
    {name: 'Bill', age: 17},
    {name: 'Dick', age: 43},
    {name: 'Mett', age: 33},
    {name: 'Alan', age: 26},
    {name: 'Alex', age: 19},
];

let army = {
    minAge: 18,
    maxAge: 27,
    canJoin(user) {
        return user.age >= this.minAge && user.age < this.maxAge;
    },
};

let soldiers = users.filter(army.canJoin, army);

console.log( army );
