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

// let user = {
//     name: 'John',
//     years: 30
// }

// let {name, years: age, isAdmin = false} = user;

// alert(`name: ${name}, years: ${age}, Admin: ${isAdmin}`);


// let salaries = {
//     "John": 400,
//     "Pete": 300,
//     "Mary": 250
// };

// function topSalary(salaries) {

//     let max = 0;
//     let maxName = null;
  
//     for(const [name, salary] of Object.entries(salaries)) {
//       if (max < salary) {
//         max = salary;
//         maxName = name;
//       }
//     }
  
//     return maxName;
// };

// alert(topSalary(salaries));


//Конструктор, оператор "new"

// function User(name) {
//     this.name = name;
//     this.isAdmin = false;
// };

// let user = new User('Jack');

// showAllAtributesInObject( user );

// function BigUser(name) {
//     this.name = name;
//     this.lvl = 1;

//     return { name: 'Godzilla', lvl: 1};
// }

// let user = new BigUser('Han');

// showAllAtributesInObject( user );


//Задачи

// function User(name) {
//     this.name = name;
//     this.sayHi = function() {
//         alert(`Меня зовут: ${this.name}.`);
//     }
// }

// let john = new User("John");
// john.sayHi();

// function Calculator() {
//     this.read = function () {
//         this.a = +prompt('Укажите первое число.');
//         this.b = +prompt('Укажите второе число.');
//     };

//     this.sum = function () {
//         return this.a + this.b;
//     };

    
//     this.mul = function () {
//         return this.a * this.b;
//     };
// };

// let calculator = new Calculator();

// calculator.read();

// alert(`Сумма чисел равна ${calculator.sum()}.`);
// alert(`Произведение чисел равно ${calculator.mul()}.`);


// function Accumulator(startingValue) {
//     this.value = startingValue;
//     this.read = function() {
//         this.value += +prompt('На сколько увеличить?', 0);
//     };
// }

// let accumulator = new Accumulator(1);

// accumulator.read();
// accumulator.read();

// alert('Итоговое значение: ' + accumulator.value);


// let user = [];

// alert( user.adress?.street );

// let userAdmin = {
//     admin() {
//         alert('Я админ');
//     }
// };
// let userGuest = {};

// userAdmin.admin();
// userGuest.admin?.();

// let key = "firstName";
// let user1 = {
//     firstName: 'John'
// };
// let user2 = null;

// alert( user1?.[key] );
// alert( user2?.[key] );


//Тип данных Символ

// let id1 = Symbol("id");
// let id2 = Symbol("id");

// alert( id1.toString() );
// alert( id1.description );


// let id = Symbol("id");

// let user = {
//     name: "Johny",
//     age: 21,
//     [id]: 123
// };

// for ( let key in user ) {
//     alert('Свойство вызываемое циклом: ' + key );
// }

// alert( 'Напрямую: ' + user[id]);


// let id = Symbol.for("id");

// let idAgain = Symbol.for("id");

// alert( id === idAgain );


// let id = Symbol("id");

// let user = {
//     [id]: 123
// };

// let clone = Object.assign({}, user);

// alert( clone[id] );


// let sym1 = Symbol.for("name");
// let sym2 = Symbol.for("age");

// alert( Symbol.keyFor(sym1) );
// alert( Symbol.keyFor(sym2) );


// let user = {
//     name: "John",
//     age: 28
// };


// let user2 = {
//     name: "Bill",
//     age: 22
// };

// alert( user );

// user2[user] = 123;

// alert( user2[user] );

// let greater = user > user2;

// alert( typeof(greater) );
// alert( greater );

// let user = {
//     name: "John",
//     money: 1000,
//     [Symbol.toPrimitive](hint) {
//         alert(`hint: ${hint}`);
//         return hint == 'string' ? `name: ${this.name}` : this.money;
//     }
// };

// alert( user );
// alert( +user );
// alert( user + ' плюс чаевые' );

// let user = {
//     name: "John",
//     money: 1000,
//     toString() {
//         return `name: ${this.name}`;
//     },
//     valueOf() {
//         return this.money;
//     }
// };

// alert( user );
// alert( +user );
// alert( user + ' баксов' );


// let user = {
//     name: "Unknown",
//     lvl: 1,
//     exp: 0,
//     status: null,

//     [Symbol.toPrimitive](hint) {
//         return hint == 'string' ? 
//         `Персонаж: ${this.name}, ур.: ${this.lvl}` : 
//         this.exp
//     },
// };

// user.name = "John Dow"
// user.exp += 200;

// alert( user );
// alert( user + 222 );
// showAllAtributesInObject(user);


// let obj = {
//     toString() {
//         return "2";
//     }
// };

// alert( obj * 2);
// alert( obj + 2 );

// let str = "Привет";
// alert( str.toUpperCase() );


// let num = 2.43575;
// alert( num.toFixed(3) );


// let str = "Привет";
// str.test = 5;
// alert( str );


// let user = {
//     name: '',
//     lvl: 1,
//     exp: 0,

// };

// function expRise( experence ) {
//     user.exp += experence;
//     if ( user.exp > 99 ) {
//         user.exp = 0;
//         user.lvl++;
//     }
// };

// user.name = prompt('Введите имя.');

// expRise(105);
// expRise(25);
// expRise(50);
// expRise(30);
// expRise(5);
// showAllAtributesInObject( user );


//Числа

// alert( 1.23e6 );

// let a = 0xff;
// let b = 0b11111111;
// let c = 0o377;

// alert( a == b );
// alert( a == c );


// alert( 123456..toString(36) );

// alert( (123456).toString(36) );


// alert('Округление в меньшую сторону. 12.2 => ' + Math.floor(12.2));
// alert('Округление в большую сторону. 2.23 => ' + Math.ceil(2.23));
// alert('Округление до ближайшего целого. 3.1 => ' + Math.round(3.1));
// alert('Удаление дробной части без округления. 4.5 => ' + Math.trunc(4.5));

// let num = 12.304;
// alert( num.toFixed(2) );
// alert( num.toFixed(20) );
// alert( +num.toFixed(1) );


// alert( parseInt("100px"));
// alert( parseFloat("12.5em"));
// alert( parseInt("12.3rem"));
// alert( parseFloat("12.5.4"));
// alert( parseInt("d12"));

// alert( Math.round(Math.random() * 100 ));
// alert( Math.round(Math.random() * 100 ));
// alert( Math.round(Math.random() * 100 ));

//Задачи


// let a = +prompt('Введите первое число.', '');
// let b = +prompt('Введите второе число.', '');

// alert(`Сумма двух чисел равна ${a + b}`);


// function readNumber() {
//     let num = 0;
//     while (true) {
//         num = prompt('Введите число.', '');

//         if ( typeof(num) === 'null') return null;

//         if ( isNaN(num) ) continue;

//         return num;
//     }
// };

// function readNumber() {
//     let num;

//     do {
//         num = prompt('Введите число.', 0);
//     } while( !isFinite(num) );

//     if ( num === null || num === '' ) return null;

//     return +num;
// };

// let res = readNumber();
// alert( res );


// function randomInteger(min, max) {
//     return min + Math.random() * ( max - min );
// };

// let min = +prompt('Введите минимальное число.');
// let max = +prompt('Введите максимальное число.');

// alert(`       Первое случайное число   ${randomInteger( min, max )} 
//        Второе случайное число    ${randomInteger( min, max )}
//        Nретье случайное число    ${randomInteger( min, max )} `);

//Строки


// alert("Гости:\n * Петя\n * Вася\n * Митя");

// let str = 'Hello';
// alert( str.length );
// alert( str[0] );
// alert( str.at(1) );
// alert( str[str.length - 1] );
// alert( str.at(-2) );

// for ( let char of str ) {
//     alert( char );
// };


// alert( 'Interface'.toUpperCase() );
// alert( 'Interface'.toLowerCase() );

// alert( 'Interface'[0].toLowerCase() );

// let str = "Widget with id";

// alert( str.indexOf('id', 2) );

// let target = 'id';
// let pos = -1;

// while(true) {
//     let foundPos = str.indexOf( target, pos );
//     if ( foundPos == -1 ) break;
    
//     alert( `Найдено на позиции: ${foundPos}`);
//     pos = foundPos + 1;
// };

// while ( (pos = str.indexOf( target, pos + 1)) != -1) {
//     alert( pos );
// };


// alert( ~2 );
// alert( ~-1 );

// alert( 'Midget'.includes('id', 3) );

// alert( 'Widget'.startsWith('Wid') );
// alert( 'Widget'.endsWith('et') );

// alert( 'stringifyplace'.slice(-6, -2) );

// alert( 'stringifyplace'.substr(2, 4) );

// alert( 'John'.codePointAt(1) );

// alert( String.fromCodePoint('12219') );


//Задачи

// function ucFirst(str) {
//     if ( !str ) return str;
//     return ( ( str[0].toUpperCase() ) + ( str.slice(1) ) );
// };

// alert( ucFirst(''));
// alert( ucFirst('Лошарик'));
// alert( ucFirst('john'));


function checkSpam(str) {
    
    if ( str.includes('Viagra', 0) ) return true;

    if ( str.includes('xxx', 0) ) return true;

    return false;
};

checkSpam('buy ViAgRA now');
checkSpam('free xxxxx');
checkSpam("innocent rabbit");