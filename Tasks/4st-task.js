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

// let user = {
//     name: 'John',
//     age: 30,
//     isAdmin: false,
// };

// for ( let key in user ) {
//     alert( key + ': ' + user[key] + '.' );
    
// }

// let number = prompt('Введите число..');
// alert('Сначала у нас есть строка: ' + number );
// number = +number;
// alert('Теперь мы преобразуем в число: ' + number );
// number = String(number);
// alert( 'И в итоге снова преобразуем в строку: ' + number);



//Видео уроки Ламкова А.

// function getAgeType(age) {

//     // if ( typeof age !== 'number') {
//     //     return 'Возраст указан неверно.'
//     // }

//     if ( age < 1 || age > 125 ) {
//         return 'Такого возраста не существует.'
//     }

//     if ( age < 18 ) {
//         return 'Несовершенолетний.'
//     }

//     if ( age > 17 && age < 124) {
//         return 'Взрослый.'
//     }

//     return 'Возраст указан неверно.'
// }

// let yourAge = prompt('Сколько вам лет?');

// alert( getAgeType(yourAge));

// let validate = (hasAccses) => {
//     if (hasAccses) {
//         return () => alert('Доступ разрешен!')
//     }

//     return () => alert('Доступ запрещен!')
// };
// const logMess = validate(false);
// logMess();

// const propName = prompt('Какое имя использовать?');
// const propValue = prompt(`Какое значение будет у ${propName}?`);

// function allAtributesInObject(obj) {
//     for (let key in obj) {
//     alert( 'Значение: ' + key + ': ' + obj[key] );
//     }
// }

// const obj = {
//     [propName]: propValue,
// };

// allAtributesInObject( obj );

const obj1 = {
    name: 'Александр',
    age: 30,
};


const obj2 = {
    name: 'Александр',
    age: 30,
};

const areObjectsEqual = (object1, object2) => {
    const keys1 = Object.keys(object1)
    const keys2 = Object.keys(object2)

    alert('keys1: ' + keys1.length);
    alert('keys2: ' + keys2.length);
};

areObjectsEqual(obj1, obj2);