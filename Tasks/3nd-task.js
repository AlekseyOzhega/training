'use strict';

// Функции


// function myMessage() {
//     let message = 'Привет!';
//     alert(message);
// }
// myMessage();
// alert(message);

// let userName = prompt('Как к вам обращаться?');

// function myMessage() {
//     userName = 'Вася';
//     alert('Теперь ты ' + userName + '!');
// }
// alert('Привет ' + userName + '!');
// myMessage();
// alert(userName);

// function showMessage(from, text) {
//     from = '*' + from + '*';
//     alert(from + ': ' + text);
// }
// showMessage('Аня', 'Привет!');
// showMessage('Аня', 'Как дела?');

// function showMessage(from, text = 'текст не добавлен') {
//     alert(from + ': ' + text);
// }
// showMessage('Аня');
// showMessage('Аня', 'как дела?');


// function toasty() {
//     alert('Toasty!');
// }

// function showMessage(from, text = toasty()) {
//     alert(from + ': ' + 'Hi');
// }

// showMessage('Anna');

// function showMessage(text) {
//     text = text || 'неизвестно';
//     alert(text);
// }
// showMessage();
// showMessage('Привет!');

// function showCount(count) {
//     alert(count ?? 'неизвестно');
// }
// showCount(0);
// showCount(null);
// showCount();

// function sum(a, b) {
//     return a + b;
// }
// let result = sum(3, 8);
// alert(result);

// function checkAge(age) {
//     if (age >= 18) {
//         return true;
//     } else {
//         return confirm('А родители разрешили?');
//     }
// }

// let age = prompt('Сколько вам лет?', 18);
// if (checkAge(age)) {
//     alert('Доступ получен!');
// } else {
//     alert('Доступ закрыт!');
// }

// function showMovies(age) {
//     if (!checkAge(age)) {
//         return;
//     }
//     alert('Вам показывается кино');
// }

// function doNothing() {}
// alert(doNothing() === undefined);

// function showPrimes(n) {
//     nextPrime: for (let i = 2; i < n; i++) {
//         for (let j = 2; j < i; j++) {
//             if (i % j == 0) continue nextPrime;
//         }
//         alert( i );
//     }
// }

// let n = +prompt('Введите число.');
// showPrimes(n);

//Задачи темы "Функции"

// function checkAge(age) {
//     return (age > 18) ? true : confirm('А родители не против?') 
// }

// function checkAge(age) {
//     return (age > 18) ? true : confirm('Родители разрешили?');
//   }

// function checkAge(age) {
//     return (age > 18) || confirm('Родители разрешили?');
//   }


// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Родители разрешили?');
//     }
    
//   }

// let age = +prompt('Сколько вам лет?');
// let res = checkAge(age);
// alert(res);



// function min(a, b) {
//   if (a < b) {
//     return a;
//   } else {
//     return b;
//   }
// }

// function min(a, b) {
//   return (a < b) ? a: b;
// }

// let res1 = min(2, 5);
// alert(res1);
// let res2 = min(3, -1);
// alert(res2);
// let res3 = min(1, 1);
// alert(res3);

 //== 2
 //== -1
 //== 1

// function pow(x, n) {
//   return x ** n;
// }
// let res1 = pow(3, 2);
// alert(res1);
// let res2 = pow(3, 3);
// alert(res2);
// let res3 = pow(2, 10);
// alert(res3);

// function pow(x, n) {
//   let result = x;

//   for (let i = 1; i < n; i++) {
//     result *= x;
//   }

//   return result;
// }

// let x = prompt("x?", '');
// let n = prompt("n?", '');

// if (n >= 1 && n % 1 == 0) {
//   alert( pow(x, n) );
// } else {
//   alert(`Степень ${n} не поддерживается, используйте натуральное число`);
// }

//Function Expression

// function sayHi() {
//     alert( "Привет" );
//   }
  
//   alert( sayHi ); // выведет код функции

// let sayHi = function() {
//     alert('Привет!');
// };
// let func = sayHi;
// func();
// sayHi();

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

// function showOk() {
//     alert('Вы согласны.');
// }

// function showCancel() {
//     alert('Вы отменили выполнение.');
// }

// ask("Вы согласны?", showOk, showCancel);

// ask(
//     "Вы согласны?",
//     function() { alert("Вы согласились."); },
//     function() { alert('Вы отменили выполнение.'); }
// );

// let age = prompt('Сколько вам лет?');
// let name = prompt('Как вас зовут?');
// let welcome;
// if (age < 18) {
//     welcome = function(x) {
//         alert('Привет ' + x + '.');
//     };
// } else {
//     welcome = function(x) {
//         alert('Здравствуйте ' + x + '.');
//     };
// }
// welcome(name);

// let age = prompt('Сколько вам лет?', 18);
// let welcome = (age < 18) ? 
//     function() {alert('Привет'); } :
//     function() {alert('Здравствуйте');};
// welcome();


//Стрелочные функции

// let a = +prompt('Введите первое число:');
// let b = +prompt('Введите второе число:');
// let sum = (a, b) => a + b;
// let resu = sum(a, b);
// // alert('Сумма чисел равна: ' + resu + '.');
// alert('Сумма чисел равна: ' + sum(a, b) + '.');

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
// };
// ask(
//     'Вы согласны?',
//     () => alert('Вы согласились.'),
//     () => alert('Вы отменили выполнение.')
// );

// let sum = (a, b) => a + b;
// alert(sum(23, 33));

// let double = n => n * 2;
// alert( double(44));

// function hello(name) {
//     let phrase = `Hello, ${name}!`;
//     say(phrase);
// }

// function say(phrase) {
//     alert(`** ${phrase} **`);
// }

// hello('Alex');
// say('Su-u-uper!');
// hello('Mike');

//Простые задачки

// let result = 1;
// for (let i = 1; i <= 9; i++) {
//     result = result * i;
//     alert(result);
// }
// alert('Итого: ' + result);

// let count = 10;
// while(count >= 0) {
//     alert(count);
//     count--;
// }

// function showPrimes(n) {

//     for (let i = 2; i < n; i++) {
//         if (!isPrime(i)) continue;

//         alert(i);
//     }
// }

// function isPrime(n) {
//     for (let i = 2; i < n; i++) {
//         if (n % i == 0) return false;
//     }

//     return true;
// }

// let n = +prompt('Введите число..');
// showPrimes(n);

//Обьекты

// let user1 = {
//     name: 'John',
//     age: 30,
//     wight: 77,
//     medIns: true,
// };


// let user2 = {
//     name: 'Bill',
//     age: 33,
//     wight: 89,
//     medIns: true,
// };


// let user3 = {
//     name: 'Amodeus',
//     age: 25,
//     wight: 56,
//     medIns: false,
// };

// let keyUser = +prompt('О каком пользователе вы хотите узнать подробнее?', '');
// switch (keyUser) {
//     case 1:
//         keyUser = user1;
//         break;
//     case 2:
//         keyUser = user2;
//         break;
//     case 3:
//         keyUser = user3;
//         break;  
//     default:
//         alert('Нужно выбрать 1, 2 или 3.');  
// }

// let keyName = prompt('Что бы вы хотели узнать? (name, age, wight, medIns)',
//      'name');

// alert(keyUser[keyName]);

// let fruit = prompt('Какой фрукт купить?', 'apple');

// let bag = {
//     [fruit]: 5,
// };

// alert( bag.apple );

// let fruit = prompt('Какой фрукт купить?', 'apple');

// let bag = {
//     [fruit + 'Computers']: 5,
// };

// alert( bag.appleComputers );

// function makeUser(name, age) {
//     return {
//         name,
//         age,
//     };
// }

// let user = makeUser('Johny', 33);
// alert(user.age);
// alert(user.name);

// let user = {};
// alert( user.noSuch === undefined);
// alert( user.age );

// let user1 = {
//     name: 'John',
//     age: 30,
//     wight: 77,
//     medIns: true,
// };


// let user2 = {
//     name: 'Bill',
//     age: 33,
//     wight: 89,
//     medIns: true,
// };


// let user3 = {
//     name: 'Amodeus',
//     age: 25,
//     wight: 56,
//     medIns: false,
// };

// alert( age in user2 );

// let nameUser = 
//     +prompt('Выбирете о каком пользователе вы хотите узнать данные (1, 2 или 3).');

// switch (nameUser) {
//     case 1:
//         nameUser = user1;
//         break;
//     case 2:
//         nameUser = user2;
//         break;
//     case 3:
//         nameUser = user3;
//         break;
//     default:
//         alert('Нужно выбрать 1, 2 или 3.'); 
// }

// for (let key in nameUser) {
//     alert( 'Значение: ' + key + ': ' + nameUser[key] );
// }

//Задачи

// let user = {};
// user.name = 'John';

// alert( user.name );

// user.surname = 'Smith';
// user.name = 'Pete';

// alert( user.name );
// alert( user.surname );

// delete user.name;

// alert( user.name );

// let schedule = {};
// let schedule2 = { name: "Vasya", age: 22};

// function isEmpty(schedule) {
//     for ( let key in schedule) {
//         return false;
//     };
//     return true;
// }

// alert('First is empty (yes): ' + isEmpty(schedule));
// alert('Second is empty (no): ' + isEmpty(schedule2));

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   };

// function sum(obj) {
//     let s = 0;
//     for (let key in obj) {
//         s = s + (obj[key]);
//         alert(s);
//     }
//     return s;
// }

// alert('Сумма зарплат равна ' + sum(salaries));

// alert('Начало!');

// let user = {
//     name: 'John',
//     age: 30,
//     wight: 77,
//     medIns: true,
// };

// function multypleNumeric(obj) {
//     for (let key in obj) {
//         if ( typeof(obj[key]) == 'number' ) {
//             obj[key] *= 2;
//         };
//     }
// }

// multypleNumeric(user);

// for (let key in user) {
//     alert( 'Значение: ' + key + ': ' + user[key] );
// }

//Копирование объектов и ссылки

// let user1 = {
//     name: 'John',
//     age: 30,
//     wight: 77,
//     medIns: true,
// };

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   };

// let allUsers = Object.assign( {}, user1, salaries );

// function allAtributesInObject(obj) {
//     for (let key in obj) {
//     alert( 'Значение: ' + key + ': ' + obj[key] );
//     }
// }

// allAtributesInObject(allUsers);

// function itogo(a, b, c) {
//     let ito = (a + b) * c;
//     return ito;
// };

// let first = +prompt('Введите первое число.');
// let second = +prompt('Введите второе число.')
// let thirst = +prompt('Введите третье число.');

// let resu = itogo(first, second, thirst);

// alert( resu );

// Методы объекта "this"

// let user1 = {
//     name: 'John',
//     age: 30,
//     wight: 77,
//     medIns: true,
//     sayHi() {
//         alert('Имя: ' + this.name);
//     }
// };

// let user2 = {
//     name: 'Bill',
//     age: 33,
//     wight: 89,
//     medIns: true,
//     sayHi() {
//         alert('Имя: ' + this.name);
//     }
// };

// user1.sayHi();
// user2.sayHi();

let user = {name: "Johny"};
let admin = {name: "Billy"};

function sayHi() {
    alert( this.name);
}

user.f = sayHi;
admin.f = sayHi;

user.f();
admin.f();
admin['f']();