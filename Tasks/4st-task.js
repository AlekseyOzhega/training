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

function showAllAtributesInObject(obj) {
    for (let key in obj) {
    alert( 'Значение: ' + key + ': ' + obj[key] );
    }
}

// const obj = {
//     [propName]: propValue,
// };

// allAtributesInObject( obj );

// const obj1 = {
//     name: 'Александр',
//     age: 30,
//     adres: {
//         city: 'Москва',
//         zipcode: 123456,
//     }
// };

// const obj2 = {
//     name: 'Александр',
//     age: 30,
//     adres: {
//         city: 'Москва',
//         zipcode: 123456,
//     }
// };


// const areObjectsEqual = (object1, object2) => {
//     const keys1 = Object.keys(object1)
//     const keys2 = Object.keys(object2)

//     if ( keys1.length !== keys2.length ) {
//         return false
//     }

//     for (const key in object1) {
//         const value1 = object1[key];
//         const value2 = object2[key];
//         const areValuesObjects = 
//             typeof value1 === 'object' && typeof value2 === 'object'
        
//         if ( areValuesObjects ) {
//             return areObjectsEqual( value1, value2 )
//         }

//         if ( value1 !== value2 ) {
//             return false
//         }
//     }

//     return true
// };

// let message = areObjectsEqual(obj1, obj2);
// alert( 'Равны ли объекты: ' + message );


// const obj1 = {
//     name: 'Александр',
// };

// const obj2 = {
//     age: 30,
// };

// const obj3 = {
//     name: 'Максим',
//     isAdmin: false,
//     };

// const objN = { ...obj1, ...obj2, ...obj3 };

// console.log('Итоговый ообъект.', objN );


// const guest1 = {
//     name: 'Василий',
//     age: 33,
//     orderInfo: {
//         roomType: 2,
//         stayDates: {
//             from: '14.04.2024',
//             to: '21.04.2024'
//         }
//     },
// }

// const guest2 = {
//     name: 'Екатерина',
//     age: 27,
// }

// const logGuestInfo = ( guest ) => {
//     console.log(`
//         Имя: ${guest.name}
//         Возраст: ${guest.age}
//         Дата выезда: ${guest.orderInfo?.stayDates?.to ?? 'Не указана'},
//         `)
// }

// logGuestInfo(guest1);
// logGuestInfo(guest2);


// const user = {
//     name: 'Екатерина',
//     age: 27,
//     isAdmin: true,
// }

// const { name, age } = user;

// console.log( 'name: ', name);
// console.log( 'age: ', age);

// const logAdress = ({ 
//     city, 
//     street, 
//     houseNumber, 
//     apartmenNumber 
// }) => {

//     console.log(`
//         Адрес:
//         г. ${city}, ул. ${street},
//         д. ${houseNumber}, кв. ${apartmenNumber}
//         `)
// };

// logAdress( {
//     city: 'Питер',
//     street: 'Лермонтова',
//     houseNumber: '90',
//     apartmenNumber: '13',
//     zipnumber: '123456',
// } );

// const user = {
//     name: 'Екатерина',
//     age: 27,
//     isAdmin: true,
// }

// let {name, ...rest} = user;

// alert(`Сначала name.`);
// alert(name);

// alert(`Теперь объект rest.`);
// showAllAtributesInObject(rest);

// let userInfo1 = {
//     name: 'Карл',
//     age: 22,
//     width: 55,
//     height: 170,
//     married: false
// }

// let userInfo2 = {
//     name: 'Виктор',
//     age: 44,
//     width: 95,
//     height: 165,
// }

// let userInfo3 = {
//     name: 'Джозефина',
//     height: 155,
//     married: true
// }

// function showMessage({ 
//     name = 'Аноним', 
//     age = 'неизветсно каком',
//     width = 'неизветсно сколько',
//     height = 'неизветсно сколько',
//     married,
// } = {}) {
//     if ( married === undefined ) {
//         married = 'неизвестно в браке или нет';
//     } else if ( married === true ) {
//         married = 'находящийся в браке'
//     } else {
//         married = 'не находящийся в браке'
//     }
//     alert(`Наш сотрудник по имени ${name}, в данный момент ${married}, при росте в ${height} см имеет вес ${width} кг.`);
// };

// let mess = +prompt('Укажите информацию о каком сотруднике вы хотите узнать (1,2 или3).')

// switch (mess) {
//     case 1:
//         mess = userInfo1;
//         break;
//     case 2:
//         mess = userInfo2;
//         break;
//     case 3:
//         mess = userInfo3;
//         break;
//     default:
//         alert('Ничего не указали.');
//         break;
// }

// showMessage(mess);

