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

function checkAge(age) {
    if (age >= 18) {
        return true;
    } else {
        return confirm('А родители разрешили?');
    }
}

// let age = prompt('Сколько вам лет?', 18);
// if (checkAge(age)) {
//     alert('Доступ получен!');
// } else {
//     alert('Доступ закрыт!');
// }

function showMovies(age) {
    if (!checkAge(age)) {
        return;
    }
    alert('Вам показывается кино');
}