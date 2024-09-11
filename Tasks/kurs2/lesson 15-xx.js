'use strict';

let arr = [
    'Vasya',
    33,
    true,
    {name: 'John', age: 33},
    () => alert('Yo!'),
    [1, 2, 3],
];

alert( arr[3]['name'] );
arr[4]();