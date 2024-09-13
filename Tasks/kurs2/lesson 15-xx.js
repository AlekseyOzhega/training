'use strict';

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

let arr1 = [1, 2, 3];
let arr2 = [1, 2, 'C'];

// let newArr = [...arr1, ...arr2];

// console.log( newArr );

const areArraysEqual = (arr1, arr2) => {

    if ( arr1.length !== arr2.length ) {
        return false;
    }

    return true;
};

let result = areArraysEqual(arr1, arr2);

console.log( result );