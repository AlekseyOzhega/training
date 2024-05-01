// alert('Hello world!');
// const name = prompt('Введите ваше имя:'); 
// const lastName = prompt('Введите вашу фамилию:');
// const greeting = 'Hello, ' + name + ' ' + lastName + '!';
// alert(greeting);

// const x = 22;
// let q = (x == 22);
// alert(q);
// alert(2 + '3');
// alert(3 - '2');

// const a = Number(prompt('Введите число A'));
// const b = Number(prompt('Введите число B'));
// const c = Number(prompt('Введите число C'));
// alert((a + b + c) / 3);
// alert((a * b * c) ** (1 / 3));

// const x = prompt('Enter N:');
// const num = Number(x);
// if (num % 2 === 1) {
//     alert('Нечётное')
// } else {
//     alert('Чётное')
// }

// const a = Number(prompt('Enter A'));
// const b = Number(prompt('Enter B'));
// const c = Number(prompt('Enter C'));
// if (a > b) {
//     alert(a)
// } else {
//     alert(b)
// }

// const max = (a > b) ? a : b;
// alert(max);

// if ((a >= b) && (a >= c)) {
//     alert(a);
// } else {
//     if ((b >= a) && (b >= c)) {
//         alert(b);
//     } else {
//         alert(c);
//     }
// }

// const MaxAB = (a > b) ? a : b;
// const max = (MaxAB > c) ? MaxAB : c;
// alert(max);

// const items = [1, 2, 3, 4];

// alert(items);

// items.push('X');
// items.unshift('Z');
// alert(items);

// items[100] = 'T';
// alert(items);

// alert(items, length);

// const str = items.join(' и ');
// alert(str);
// alert(items.indexOf(4));
// alert(items.indexOf('X'));
// alert(items.indexOf(7));

const N = + prompt('Enter N');
const numbers = [];

for (let i = 0; i < N; i++) {
    numbers.push(Math.round(Math.random() * 100));
}
alert(numbers);

let sum = 0;
let max = -Infinity;

for (i = 0; i < numbers.length; i ++) {
    sum += numbers[i];
    if (max < numbers[i]) {
        max = numbers[i];
    }
}

alert('Среднеарифметическое число: ' + sum / numbers.length);
alert('Максимальное число: ' + max);