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

function hello(name) {
    let phrase = `Hello, ${name}!`;
    say(phrase);
}

function say(phrase) {
    alert(`** ${phrase} **`);
}

hello('Alex');
say('Su-u-uper!');