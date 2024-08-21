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


function sumInput() {
    let arr = [];
    let sum = 0;
    while (true) {
        let arrNew = prompt('Введите значения массива.');

        if ( arrNew === '' || arrNew === null ) {
            break;
        };

        arr.push( arrNew );

        if ( arrNew === NaN ) {
            
        }
        sum += +arrNew;
    }

    return sum;
}

let arr2 = sumInput();

alert( arr2 );

