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

// true || alert('не сработает');
// false || alert('сработает');

// let day = prompt('Какой сейчас день недели?');
// let weekend;
// let weekDay = (day == 'понедельник') ? 'рабочий день' :
//     (day == 'вторник') ? 'рабочий день' :
//     (day == 'среда') ? 'рабочий день' :
//     (day == 'четверг') ? 'рабочий день' :
//     (day == 'пятница') ? 'рабочий день' :
//     (day == 'суббота') ? 'выходной' :
//     (day == 'воскресенье') ? 'выходной' :
//     'Неверно написан день недели.';
// if (weekDay == 'рабочий день') {
//     weekend = false
// } else (weekend = true);
// let hour = prompt('Который сейчас час?');
// if (hour < 10 || hour > 18 || weekend) {
//     alert('Офис закрыт!');
// } else {
//     alert('Офис открыт.');
// };

// let manu = '';
// manu ||= 'Unknown';
// alert(manu);

// let hour = 12;
// let minutes = 30;
// if (hour == 12 && minutes == 30) {
//     alert('Время 12:30.');
// }

// alert(1 && 0);
// alert(1 && 5);
// alert(null && 5);
// alert(0 && 'string');

// alert(null || 2 || undefined);

// alert(alert(1) || 2 || alert(3));

// alert(1 && null && 2);

// alert(alert(1) && alert(2));

// alert(null || 3 && 2 || 4);

// let value = NaN;
// value &&= 10;
// value ||= 20;
// value &&= 30;
// value ||= 40;
// alert(value);

// let age = prompt('Возраст?');
// if (age > 13 && age < 91) {
//     alert('Диапазон соответствует.');
// } else {
//     alert('Диапазон не соответствует.')
// };

// let age = prompt('Возраст?');
// if (age < 14 || age > 90) {
//     alert('Диапазон оответствует.');
// } else {
//     alert('Диапазон не ссоответствует.')
// };

// let age = prompt('Возраст?');
// if (!(age > 13 && age < 91)) {
//     alert('Диапазон оответствует.');
// } else {
//     alert('Диапазон не ссоответствует.')
// };

// if (-1 || 0) {
//     alert('first');
// };

// if (-1 && 0) {
//     alert('second');
// };

// if (null || -1 && 1) {
//     alert('third');
// };

// let login = prompt('Ваш логин:');   

// if (login === 'Админ' || login === 'админ') {

//     let pass = prompt('Введите пароль:');

//     if (pass === 'я главный' || pass === 'Я главный') {
//         alert('Здравствуйте!');
//     } else if (pass === '' || pass === null) {
//         alert('Отменено.');
//     } else {
//         alert('Неверный пароль.')
//     }
    
// } else if (login === '' || login === null) {
//     alert('Отменено');
// } else {
//     alert('Я вас не знаю.');
// }

// let login = prompt('Ваш логин:');   

// if (login === 'Админ' || login === 'админ') {

//     let pass = prompt('Введите пароль:');

//     if (pass === 'я главный' || pass === 'Я главный') {
//         alert('Здравствуйте!');
//     } else if (pass === '' || pass === null) {
//         alert('Отменено.');
//     } else {
//         alert('Неверный пароль.')
//     }
    
// } else if (login === '' || login === null) {
//     alert('Отменено');
// } else {
//     // login = login ?? 'Неизвестный'
//     alert(login + ', Я вас не знаю.');
// }

let nick = prompt('Как вас зовут?');
message = nick ?? 'Аноним';
if (message === '') {
    message = 'Аноним';
};
if (message === 'Groot' || message === 'groot') {
    message = "Im Groot";
    alert(message + '!');
} else {
    alert('Здравствуйте ' + message + '!');
}