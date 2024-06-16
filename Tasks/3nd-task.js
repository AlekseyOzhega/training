'use strict';

// Функции


// function myMessage() {
//     let message = 'Привет!';
//     alert(message);
// }
// myMessage();
// alert(message);

let userName = prompt('Как к вам обращаться?');

function myMessage() {
    userName = 'Вася';
    alert('Привет ' + userName + '!');
}
alert(userName);
myMessage();
alert(userName);