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

function toasty() {
    alert('Тоасти!');
}

function showMessage(from, text = toasty) {
    alert(from + ': ' + text);
}

showMessage('Anna')