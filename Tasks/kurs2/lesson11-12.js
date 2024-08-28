'use strict';

function showAllAtributesInObject(obj) {
    for (let key in obj) {
    alert( 'Значение: ' + key + ': ' + obj[key] );
    }
}

//Урок 11


// let obj1 = {
//     name: 'John',
//     age: 30,
//     adress: {
//         city: 'Big city',
//         index: 123456,
//     }
// };


// let obj2 = {
//     name: 'John',
//     age: 30,
//     adress: {
//         city: 'Big city',
//         index: 123456,
//     }
// };

// let areObjectsEqual = (object1, object2) => {
//     let keys1 = Object.keys(object1);
//     let keys2 = Object.keys(object2);

//     if (keys1.length !== keys2.length) {
//         return false;
//     }

//     for (let key in object1) {
//         let value1 = object1[key];
//         let value2 = object2[key];
//         let areValuesObject = 
//             typeof value1 === 'object' && typeof value2 === 'object';
        
//         if ( areValuesObject ) {
//             return areObjectsEqual(value1, value2);
//         }
//         if ( object1[key] !== object2[key] ) {
//             return false;
//         }
//     }

//     return true;
// };

// alert('Равны ли объекты obj1 и obj2: ' + areObjectsEqual(obj1, obj2));

// let obj1 = {name: 'Max'};
// let obj2 = { ...obj1};
// obj2.name = 'Alex';
// alert( `Имя в первом объекте ${obj1.name}`);
// alert( `Имя во втором объекте ${obj2.name}`);

// let obj1 = {name: 'Max'};
// let obj2 = {age: 22};
// let obj3 = { ...obj1, ...obj2 };
// showAllAtributesInObject(obj3);

// let logAdress = ({
//     city, 
//     street, 
//     houseNumber, 
//     apartmentNumber
// }) => {
//     alert(`Адрес: 
//         г. ${city}, 
//         ул. ${street},
//         д. ${houseNumber}, кв. ${apartmentNumber}`);
// };

// let userAdress = {
//     city: 'Иркутск-Сортировочный',
//     street: 'Берёзовая',
//     houseNumber: 17,
//     apartmentNumber: 21,
// };

// logAdress( userAdress );

// let user = {
//     name: 'John',
//     age: 24,
//     logThis() {
//         console.log('this в теле метода объекта user: ', this);
//     },
// };

// user.logThis();

let user1 = {name: 'Миша'};
let user2 = {name: 'Вася'};

function logInfo() {
    console.log('this: ', this)
    console.log('this.name: ', this?.name)
};

logInfo();

user1.logName = logInfo;
user2.logName = logInfo;

user1.logName();
user2.logName();