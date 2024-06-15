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

// let nick = prompt('Как вас зовут?');
// message = nick ?? 'Аноним';
// if (message === '') {
//     message = 'Аноним';
// };
// if (message === 'Groot' || message === 'groot') {
//     message = "Im Groot";
//     alert(message + '!');
// } else {
//     alert('Здравствуйте ' + message + '!');
// }

// let name3 = prompt('Как вас зовут?');
// if (name3 === '') {
//     name3 = null;
// }
// name3 = name3 ?? 'Анонимус';
// alert('Здравствуйте ' + name3 + '!');

// let getColor = +prompt('Выбирете цвет написав число.');
// let color;
// if (getColor === 1) {
//     color = 'Красный'
// } else if (getColor === 2) {
//     color = 'Синий';
// } else if (getColor === 3) {
//     color = 'Зелёный';
// } else {
//     color = 'Неизвестный цвет'
// };
// alert(color);

// let height = 0;
// alert(height || 100);
// alert(height ?? 100);

// let age = +prompt('Ваш возраст?');
// if (age < 7) {
//     alert('Детский сад.');
// } else if (age > 8 && age < 18) {
//     alert('Школа.');
// } else if (age > 19 && age < 65) {
//     alert('Работа.');
// } else if (age > 66 && age <109) {
//     alert('Пенсия.');
// } else {
//     alert('Ископаемое.')
// }

// alert(undefined ?? NaN ?? null ?? '');

// let num1 = 10,
//     num2 = 20,
//     result;
// result ??= num1 ?? num2;
// alert(result);

// let city = +prompt('Введите номер города:');
// if (city <= 0) city = 'Berlin';
// if (city === 1) city = 'Koln';
// if (city === 2) city = 'Frankfurth';
// if (city === 3) city = 'Dresden';
// if (city > 3) city = 'Неизвестный город!';
// alert(city);

// let i = 0;
// while (i < 3) {
//     alert(i);
//     i++;
// }

// let ex = confirm('Вы здесь впервые?');
// let nameNick;
// if (ex === true) {
//     nameNick = 'Гость';
// } else {
//     nameNick = 'снова';
// };
// alert('Мы рады видеть вас, ' + nameNick + '!');

// let num3 = +prompt('Укажите небольшое число.');
// let i = 0;
// let result = 0;
// while (i < num3) {
//     result = result + (i + num3);
//     i++;
//     alert(result);
// }
// alert('Итого: ' + result);

// let i = 3;
// while (i) {
//     alert(i);
//     i--;
// }

// let i = +prompt('Введите число от 1 до 10:');
// if (i < 11 && i > 0) {
// while (i) alert(i--);
// } else if (i < 0) {
//     alert('Нельзя указывать отрицательное число.')
// } else alert('Число слишком большое.');

// let i = 0;
// do {
//     alert(i);
//     i++;
// } while (i < 3);

// for (let i = 0; i < 3; i++) {
//     alert(i);
// }

// let sum = 0;
// while (true) {
//     let value = +prompt('Введите число, ', '');
//     if (!value) break;
//     sum += value;
// }
// alert('Сумма: ' + sum);

// for (let i = 0; i < 10; i++) {
//     if (i % 2 == 0) continue;
//     alert(i);
// }
// alert('Конец цикла.');

// for (let i = 0; i < 10; i++) {
//     if (i % 2) {
//         alert(i);
//     }
// }

// Самостоятельная работа

// let sum = 0;
// let trig = true;
// alert('Мы сейчас начнет суммирование чисел. Вы будете задавать числа, а я их буду суммировать. Давайте начнём.');
// while (trig) {
//     let numb = +prompt('Введите число: ');
//     if (!numb) break;
//     sum += numb;
//     alert('Текущая сумма: ' + sum);
//     trig = confirm('Вы желаете продолжить суммирование?');
// }
// alert('Итоговая сумма: ' + sum + '.');

//Метки в break/continue

// outer:
// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//         let input = prompt(`Значение на координатах (${i},${j})`, '');
//         if (!input) break outer;
//     }
// }
// alert('Готово!');

//Задачи

// let i = 3;
// while (i) {
//     alert(i--);
// }

// let i = 0;
// while (++i < 5) alert(i);

// let i = 0;
// while (i++ < 5) alert(i);
// alert('Цикл остановился на ' + i);


// for (let i = 1; i < 11; i++) {
//     if (i % 2 == 0) {
//         alert(i);
//     } 
// }
// alert('Конец!');

// let i = 0;
// while (i < 3) {
//     alert(`number ${i}!`);
//     i++;
// }

// for (let numZ = 0; numZ > 100;) {
//     let numZ = 0;
//     numZ = +prompt('Введите число больше 100.')
//     if (numZ <= 100) continue;
//     if (!numZ) break;
// }

// let numZ;
// while(true) {
//     numZ = prompt('Введите число больше 100.');
//     alert(numZ);
//     if (numZ <= 100) continue;
//     if (numZ == null) break;
//     alert('Вы ввели число ' + numZ);
//     if (numZ > 100) break;
// }

// let num;
// do {
//     num = prompt('Введите число больше 100.', 0)
// } while (num <= 100 && num)


// let numB;

// do {
//     numB = +prompt('Введите число большее чем 1.');
// } while (numB > 10 && numB);

// next4:
// for (let i = 2; i <= numB; i++) {

//     for (let j = 2; j < i; j++) {
//         if (i % j == 0) continue next4;
        
//     }
//      alert(i);
// }

// let n;

// do {
//     n = +prompt('Введите число большее чем 1.');
// } while (n > 10 && n);

// nextPrime:
// for (let i = 2; i <= n; i++) { // Для всех i...

//   for (let j = 2; j < i; j++) { // проверить, делится ли число..
//     if (i % j == 0) continue nextPrime; // не подходит, берём следующее
//   }

//   alert( i ); // простое число
// }


// SWITCH

// let age = +prompt('Сколько вам лет?');

// if (age < 7) {
//     age = 7;
// } else if (age >= 8 && age <= 17) {
//     age = 17;
// } else if (age >= 18 && age <= 35) {
//     age = 35;
// } else if (age >= 36 && age <= 60) {
//     age = 60;
// } else {
//     age = 100;
// }

// switch(age) {
//     case 7:
//         alert('Детсадовец.');
//         break;
//     case 17:
//         alert('Школьник.');
//         break;
//     case 35:
//         alert('Молодость.');
//         break;
//     case 60:
//         alert('Зрелость.');
//         break;
//     case 100:
//         alert('Старость.');
//         break;
//     default:
//         alert('Неверные данные.')
// }


// let a = 2 + 3;

// switch (a) {
//   case 3:
//     alert( 'Маловато' );
//     break;
//   case 4:
//     alert( 'В точку!' );
//     break;
//   case 5:
//     alert( 'Перебор' );
//     break;
//   default:
//     alert( "Нет таких значений" );
// }

// Задачи на switch


// let br = prompt('Каким браузером вы пользуетесь?');
// if (br == 'Edge' || br == 'edge') {
//     alert( "You've got the Edge!" );
// } else if (br == 'Chrome' || br == 'chrome' 
//     || br == 'Firefox' || br == 'firefox'
//     || br == 'Safari' || br == 'safari'
//     || br == 'Opera' || br == 'opera') {
//     alert( 'Okay we support these browsers too' );
// } else {
//     alert( 'We hope that this page looks ok!' );
// }

const num = +prompt('Введите число между 0 и 3', '');
switch(num) {
    case 0:
        alert('Вы ввели число 0');
        break;
    case 1:
        alert('Вы ввели число 1');
        break;
    case 2:
    case 3:
        alert('Вы ввели число 2, а может и 3');
        break;
    default:
        alert('Нужно ввести число именно от 0 до 3!');
}