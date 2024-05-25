// alert('Hello!');
// let x = "2";
// let y = "3";
// alert(+x + +y);

// let x = 1;
// x = -x;
// alert(x);

// let x = 2;
// x = x ** 2;
// alert(x);
// alert(x = x ** 1/2);

// let x = "2", y = "3";
// alert(+x + +y);

// let n = 2;
// n = n + 5;
// n = n * 2;
// alert(n);

// let m = 2;
// m += 5;
// m *= 2;
// alert(m);

// let counter = 1;
// let a = counter++;
// alert(a);
// let count = 1;
// let b = ++count;
// alert(b);

// let a = 1;
// let c = ++a;
// alert(c);
// alert(a);
// let b;
// alert(b = ++a);
// alert(a);
// alert(c);

// let a = +prompt('Введите первое число', 1);
// let b = +prompt('Введите второе число', 2);
// alert('Сумма чисел равна = ' + (a + b));

// alert(null > 0);
// alert(null == 0);
// alert(null >= 0);

// let year = prompt('Какой сейчас год?', '');
// let coun = (year == 2024);
// if (year < 2024) {
//     alert('Рано!')
// } else if (year > 2024) {
//     alert('Поздно!')
// } else {
//   alert('Верно!')
// }

// let year = prompt('Какой сейчас год?', '');
// let accses = (year == 2024) ? true : false;
// if (accses == true) {
//     alert('Верно!')
// } else { 
//     alert('Неверно!')
// };

// let age = prompt('Возраст?');
// let message = (age < 3) ? 'Здравствуй малыш!' :
//     (age <18) ? 'Привет!' :
//     (age < 100) ? 'Здравствуйте!' :
//     'Какой итересный возраст!';
// alert(message);

// let age = prompt('Возраст?');
// let message;
// if (age <3) {
//     message = 'Здравствуй малыш!';
// } else if (age < 18) {
//     message = 'Привет!';
// } else if (age < 100) {
//     message = 'Здравствуйте!';
// } else {
//     message = 'Какой итересный возраст!'
// } 
// alert(message);

// let nameComp = prompt('Какое "официальное" название JavaScript?');
// if (nameComp == 'ECMAScript') {
//     alert('Верно!');
// } else {
//     alert('Вы не знаете? ECMAScript.')
// };

// let value = prompt('Введите любое число:');
// if (value >= 1) {
//     alert('1');
// } else if (value <= -1) {
//     alert('-1');
// } else {
//     alert('0')
// };

// let result;
// let a = +prompt('Введите первое число:');
// let b = +prompt('Введите второе число:');
// result = (a + b < 4) ? 'мало' : 'много';
// alert(result);

// let login = prompt('Введите логин:', '');
// let message = (login == 'сотрудник') ? 'Привет!' :
//     (login == 'директор') ? 'Здравствуйте!' :
//     (login == '') ? 'Нет логина' :
//     'Неверный логин!';
// alert(message);

// let hour = prompt('Который сейчас час?', '');
// let isWeekend = true;
// if (hour < 10 || hour > 18 || isWeekend) {
//     alert('Офис закрыт!');
// }

// let firstName = "";
// let lastName = "";
// let nickName= "Суперкодер";
// alert( firstName || lastName || nickName || "Аноним");

true || alert('не сработает');
false || alert('сработает');