'use strict';
 
//Повторение

// alert(`Результат = ${3 + 4}`);

// let value = 23;
// alert(typeof(value));
// alert(String(value));
// alert(typeof(String(value)));

// let year = +prompt("Какой сейчас год?", '0000');
// if (year == 2024) {
//     alert('Верно.');
// } else {
//     alert('Не верно!');
// }

// let age = prompt('Сколько вам лет?', 18);

// let accesAllowed = ( age > 18 ) ? true: false;

// alert(accesAllowed);

// let age = prompt('Сколько вам лет?', 18);

// let message = ( age < 3 ) ? 'Здравствуй малыш!':
//     ( age < 18 ) ? 'Привет!':
//     ( age < 100) ? 'Здравствуйте':
//     'Какой необычный возрвст.)';

// alert( message );

// alert( false || false);

// alert( true || false );

// let firstName = prompt('Могу я узнать ваше имя?');
// let lastName = prompt('Могу я узнать вашу фамилию?');
// let nickName = prompt('Могу я узнать ваш никнейм?');

// firstName || lastName || nickName 
//     || alert('Вы ничего не вписали.');


// alert(`Я буду называть вас ${ 
//     firstName || lastName || nickName || 'просто Неизвестный'}.`);

// false || alert('!');

// alert( firstName ?? lastName ?? nickName ?? 'Анонимус' );

// let i = +prompt('Зададайте число');

// while ( i < 3 ) {
//     alert( i );
//     i++;
// }

// for ( let i = 0; i < 3; i++) {
//     alert( i );
// }


// function sum(){

//     let summa = 0;
    
//     while (true) {
//         let value = +prompt('Введите числою');
//         if ( !value ) break;
//         summa += value;
//     };

//     return summa;
// }
    
// alert( sum() );

// let chet = +prompt('Введите число.');

// for ( let i = 0; i < chet; i++) {
//     if ( i % 2 == 0) continue;
//     alert( i );
// };

// function checkAge(age) {
//     if ( age >= 18 ) {
//         return true;
//     } else {
//         return confirm('А родители разрешили?');
//     }
// }

// let age = +prompt('Сколько вам лет?');

// let che = checkAge(age);

// alert( che );

// function ask( questtion, yes, no ) {
//     if ( confirm(questtion)) yes()
//         else no();
// }

// function showOk() {
//     alert('Вы согласны.');
// }

// function showCancel() {
//     alert('Вы отменили выполнение.');
// }

// ask('Вы согласны?', showOk, showCancel);

// let age = prompt("Сколько вам лет?");

// let welcome = ( age < 18) ?
//     () => alert('Привет!'):
//     () => alert('Здравствуйте!');

// welcome();

let user = {
    name: 'John',
    age: 30,
    isAdmin: false,
};

for ( let key in user ) {
    alert( key );
    alert( user[key]);
}