'use strict';


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
// obj1.name = 'Alex';
// alert( `Имя в первом объекте ${obj1.name}`);
// alert( `Имя во втором объекте ${obj2.name}`);

