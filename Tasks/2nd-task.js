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

// const N = + prompt('Сколко элементов должнобыть ы массиве?');
// const numbers = [];

// for (let i = 0; i < N; i++) {
//     numbers.push(Math.round(Math.random() * 100));
// }
// alert(numbers);

// let sum = 0;
// let max = -Infinity;

// for (i = 0; i < numbers.length; i ++) {
//     sum += numbers[i];
//     if (max < numbers[i]) {
//         max = numbers[i];
//     }
// }

// alert('Среднеарифметическое число: ' + sum / numbers.length);
// alert('Максимальное число: ' + max);

// const N = + prompt("Количество имён?");
// const names = [];

// for (let i = 0; i < N; i++) {
//     const name = prompt('Введите имя #'+(i+1));
//     names.push(name);
// }

// alert(names);

// let = LongestName = '';
// for (let i = 0; i < N; i++) {
//     if (LongestName.length < names[i].length) {
//         LongestName = names[i];
//     }
// }

// alert('Длинейшее имя - ' + LongestName);

// const human = {
//     age: 58,
//     name: 'Georgio',
//     weight: 73
// };
// alert(human.name);

// const point = {
//     x: 4,
//     y: 55,
//     z: 21,
//     w: 9
// };
// const massiv = [];

// for (let key in point) {
//     let mas = (key + '=' + point[key])
//     massiv.push(mas);
//     alert('Ключ: ' + key + ': ' + point[key]);

// }
// alert(massiv.join(', '));

// const person1 = {
//     name: 'Alex',
//     age: 23,
//     weight: 65,
//     height: Math.round(Math.random() * 50 + 160),
// };

// const person2 = {
//     name: 'Bob',
//     age: 33,
//     weight: 77,
//     height: Math.round(Math.random() * 50 + 160),
// };

// const person3 = {
//     name: 'Stan',
//     age: 66,
//     weight: 70,
//     height: Math.round(Math.random() * 50 + 160),
// };

// console.log(person1);
// console.log(person2);
// console.log(person3);
// console.log((person1.height + person2.height + person3.height) / 3);

// if (person1.height > person2.height) {
//     if (person1.height > person3.height) {
//         console.log(person1.name);
//     } else {
//         console.log(person3.name);
//     }
// } else {
//     if (person2.height > person3.height) {
//         console.log(person2.name);
//     } else {
//         console.log(person3.name);
//     }
// }

// const d4 = new Date(2020, 1, 20, 10, 0, 0, 550);
// console.log('День: ' + (d4.getDate()));

// const d1 = new Date('1994-03-22 16:00:00');
// const d2 = new Date('2044-12-15 13:00:00');

// console.log((d2 - d1) / 1000 / 60 / 60);

// const message = prompt('Введите ваш возраст: ', 55);
// alert('Вам ' + message + '!');

let isBoss = confirm("Ты тут главный?");
alert(isBoss);