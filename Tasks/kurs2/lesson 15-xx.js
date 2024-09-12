'use strict';

let arr = [
    'Vasya',
    33,
    true,
    {name: 'John', age: 33},
    () => alert('Yo!'),
    [1, 2, 3],
];

arr[99] = 'rock';

// alert( arr[3]['name'] );
// arr[4]();
// alert( arr[5][1] );

console.log( arr ); 
console.log( arr.at(-1) ); 