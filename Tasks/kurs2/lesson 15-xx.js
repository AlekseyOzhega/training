'use strict';


//Урок 15


// let arr = [
//     'Vasya',
//     33,
//     true,
//     {name: 'John', age: 33},
//     () => alert('Yo!'),
//     [1, 2, 3],
// ];

// let arr = 'Один, два, три, четыре';

// arr[99] = 'rock';

// alert( arr[3]['name'] );
// arr[4]();
// alert( arr[5][1] );

// arr.push('J', 23);
// arr.unshift(true, [1, 2, 3]);

// console.log( arr.join(' + ') );

// arr = arr.split(', ').join(' + ');

// console.log( arr ); 
// console.log( arr.at(-1) ); 

// let arr1 = [1, 2, 3, [1, 2]];
// let arr2 = [1, 2, 3, [1, 2]];

// const areArraysEqual = (arr1, arr2) => {

//     if ( arr1.length !== arr2.length ) {
//         return false;
//     }

//     for (let i = 0; i < arr1.length; i++) {
//         const val1 = arr1[i];
//         const val2 = arr2[i];

//         const areValuesArrays = (
//             Array.isArray(val1) && Array.isArray(val2)
//         );

//         if ( areValuesArrays ) {
//             if ( !( areArraysEqual(val1, val2) ) ) {
//                 return false;
//             } else continue;
//         }

//         if ( val1 !== val2 ) {
//             return false;
//         }
//     }

//     return true;
// };

// let result = areArraysEqual(arr1, arr2);

// console.log( result );


//Урок 16

// let arr = ['John', 33, true];

// let [name, age, medIn] = arr;

// console.log( 'name =', name, ', age = ', age, ' medIn = ', medIn, '.' );


// let arr = ['John', 33, true];

// arr.forEach( (elem, index, array) => {
//     console.log(`Под индексом ${index} находится элемент ${elem} в массиве 
//         ${array}.`);
// })


// let arr = [1, 2, 3, {name: 'John', age: 33}, 4];

// console.log( arr.findIndex( (element, index) => {
//     if ( element.age === 33 ) {
//         console.log( `Нашелся на индексе ${index}.` )
//         return true;
//     }
// }))

// console.log( arr.findIndex( (user) => user.age === 33));


// let num = Math.round(Math.random() * 100);

// num = num.toString(2);

// let arr = [21, 43, 11, 76, 49, 92, 55];
// let num = Math.min(...arr);
// let num2 = Math.max(...arr);

// alert('Минимальное из чисел = ' + num + ' и ' + ' максимальное из чисел = ' + num2 );


// let arr = [
//     {name: "Bill", age:22, city: 'Москва'},
//     {name: "Will", age:26, city: 'Санкт-Питербург'},
//     {name: "John", age:21, city: 'Лондон'},
//     {name: "Steeve", age:23, city: 'Вашингтон'},
//     {name: "John", age:30, city: 'Пекин'},
// ];

// let result = arr.filter( ({city, age}) => {
//     return city === 'Москва' || age > 23;
// });

// let res = arr.map( (user) => {
//     return `${user.name}, ${user.age} лет, живет в г.${user.city}.`;
// })

// console.log( res );



// let arr = [23, 22, 1, 66, 34, 100, -3, 500];

// debugger
// let ageSum = arr.reduce( (sum, {age}) => sum + age, 0);

// console.log( 'Средний возраст = ', ageSum / arr.length );

// arr.reverse();

// console.log( arr );

// arr.sort( (a, b) => (a / 2) - b );

// console.log( arr );


//Урок 17


// let obj = {name: "Bill", age:22, city: 'Москва'};

// let keys = Object.keys( obj );
// let values = Object.values( obj );
// let objEntries = Object.entries( obj );

// objEntries.forEach( ([key, value]) => {
//     console.log(`Под ключом ${key} находится значение ${value}.`)
// })

// console.log( keys );
// console.log( values );


// let obj = {name: "Bill", age:22, city: 'Москва'};
// let objEntries = Object.entries( obj );

// console.log( objEntries );

// let objEntriesFormatted = objEntries.map( ([key, value]) => {
//     return ([key.toUpperCase(), `==> ${value} <==`])
// });

// console.log( objEntriesFormatted );

// let backToStartObject = Object.fromEntries(objEntriesFormatted);

// console.log( backToStartObject );


// let mapColl = new Map([
//     [1, 'Broock'], 
//     ['2', 'Eddy']
// ]);

// mapColl.set(3, 'Jr.');

// for (let key of mapColl.keys()) {
//     console.log('ключ: ', key);
// };

// for (let value of mapColl.values()) {
//     console.log('значение: ', value);
// };

// for ( let entrie of mapColl.entries() ) {
//     console.log( 'энтрие: ', entrie );
// };

// console.log( mapColl );

// console.log( mapColl.entries() );


// let set = new Set([1, 2, 1, 2, 3, 3, 1, 2, 3]);

// set.clear();
// set.add('Book');
// set.delete(1);

// console.log( set );
// console.log( set.has(1) );
// console.log( set.size );


// let user = {
//     name: 'John',
//     age: 32,
//     languages: ['Russian', 'English'],
//     medIn: true,
//     adress: {
//         countrie: "Russia",
//         city: "Sankt-Piterburg",
//         street: 'Rayonnaya',
//         housNumber: 22,
//         appartmentNumber: 313
//     },
//     phoneNumber: '8 (925) 123-45-67'
// };

// let userToString = JSON.stringify(user, null, 4);

// console.log( userToString );

// let userParse = JSON.parse(userToString);

// console.log( userParse );


// let user = {
//     name: 'John',
//     age: 32,
//     languages: ['Russian', 'English'],
//     medIn: true,
//     adress: {
//         countrie: "Russia",
//         city: "Sankt-Piterburg",
//         street: 'Rayonnaya',
//         housNumber: 22,
//         appartmentNumber: 313
//     },
//     phoneNumber: '8 (925) 123-45-67',
//     // toJSON() {
//     //     return 'User is a cool guy!';
//     // }
// };

// console.log( user );

// let userToJSON = JSON.stringify(user, null, 2);

// console.log('JSON объекта: ', userToJSON );


// let user = {
//     name: 'John',
//     age: 25,
//     keys: [22, 85, 19]
// }

// let json = JSON.stringify(user, null, 2);

// console.log(json);

// let back = JSON.parse(json, 2);

// console.log( back );


// let str = '{"title":"Conference","date":"2017-11-29T12:00:00.000Z"}';

// let meetup = JSON.parse( str, function(key, value) {
//     if (key == 'date') return new Date(value);
//     return value;
// });

// console.log( meetup );


// let room = {
//     number: 23
//   };
  
//   let meetup = {
//     title: "Совещание",
//     occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
//     place: room
//   };

//   console.log( JSON.stringify(meetup, (key, value) => {
//     return (key == 'place') ? undefined: value;
//   }, 2));


// class Student {
//     city = 'Ducksburg';
//     kurse = 1;
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     logAge() {
//         console.log( this.age );
//     }
// }

// function midleAge(obj1, obj2, obj3) {
//     return Math.round(( obj1.age + obj2.age + obj3.age) / 3);
// }

// let firstStudent = new Student('Billy', 19);
// let secondStudent = new Student('Willy', 18);
// let therstStudent = new Student('Dilly', 18);

// console.log( firstStudent );
// console.log( secondStudent );
// console.log( therstStudent );

// secondStudent.logAge();

// console.log('Средний возраст: ' ,  midleAge( 
//     firstStudent, 
//     secondStudent, 
//     therstStudent 
// ) );


// class File {

//     constructor(name) {
//         this.name = name
//         this.info = prompt('Введите данные: ', 0)
//     }

//     readFile() {
//         alert(this.info);
//     }

//     editingFile() {
//         this.info = prompt('Введите новые данные.');
//     }

//     length() {
//         let length = this.info;
//         console.log(length.length)
//     }

// }

// let file1 = new File('Приветствие');

// console.log(file1);



// class Student {
    
//     static kurse = 1;
//     static count = 0;

//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//         this.count += 1;
//     }

//     static sayHi() {
//         alert(`Привет!`)
//     }

//     static showNumberOfStudents() {
//         console.log('Количество студентов: ' , Student.count);
//     }

//     logAge() {
//         console.log( this.age );
//     }

//     set city(value) {
//         let firstLetter = value[0].toUpperCase();
//         let fromSecondLetter = value.slice(1).toLowerCase();
//         this._city = `${firstLetter}${fromSecondLetter}`;
//     }

//     get city() {
//         return `г. ${this._city}`
//     }
// }

// let firstStudent = new Student('Billy', 16);
// firstStudent.city = 'ducksBurg';

// console.log(firstStudent);

// console.log('Изначальнный курс: ' , Student.kurse);
// console.log(Student.sayHi());

// Student.kurse += 1;

// console.log('Измененный курс: ' , Student.kurse);

// console.log(Student.showNumberOfStudents());
// console.log(firstStudent.city);


// class Person {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }

//     eat() {
//         console.log('Ем...')
//     }

//     sleep() {
//         console.log('Сплю...')
//     }
// }

// class Developer extends Person {
//     constructor(name, age, developer) {
//         super(name, age)
//         this.developer = developer
//     }
    

//     writeCode() {
//         console.log('Пишу код...')
//     }

//     sleep() {
//         console.log('Лучше еще попишу код...')
//         this.writeCode()
//         console.log('Закончим на сегодня...')
//         super.sleep()
//     }
// }

// let Cook = new Person('Миша', 25);
// let Broock = new Developer('Гриша', 33, true);

// console.log(Cook);
// console.log(Broock);

// console.log('Cпать отправится Кук...')
// Cook.sleep();
// console.log('А теперь спать отправится Брук...')
// Broock.sleep();


//Урок 20

// function logMessage(name, age, profession) {
//     if (age < 18) {
//     alert(`Здравствуйте, меня зовут ${name}, мне ${age} лет.`)
//     } else {
//         alert(`Здравствуйте, меня зовут ${name}, мне ${age} лет и я ${profession}.`)
//     }

// }

// let firstMessage = setTimeout(logMessage, 3000, 'Dilly', 30, 'юрист')

// let secondMessage = setTimeout(logMessage, 6000, 'Willy', 14)

// clearTimeout(firstMessage)


// let interval = setInterval( () => {
//     console.log('Привет!')
// }, 1000)

// setTimeout( () => {
//     clearInterval(interval)
// }, 7000)


//Урок 21

// console.log('Начало кода...');

// try {
//     let userData = undefined;

//     names.forEach( (name) => {
//         console.log('Name: ', name)
//     })
// } catch (error) {
//     console.log('Возникла ошибка: ', error)
// }


// setTimeout( () => {
//     try {
//         let names = undefined

//         names.forEach( (name) => {
//             console.log('Name: ', name)
//         })

        

//     } catch(error) {
//         console.log('Возникла ошибка: ', error)
//     } finally {
//         console.log('Последняя часть обработки ошибки...')
//     }
    
//     console.log('Конец кода...');
// }, 3000)


// console.log('Начало кода...');

// try {
//     let userJSON = `{
//     "age": 24
//     }`

//     let user = JSON.parse(userJSON)
//     let {name, age} = user

//     let errorMessage = 'Имя не указано';

//     if (!name) {
//         throw new Error(errorMessage)
//     }

//     console.log(`
//         Привет ${name}!
//         Твой возраст ${age}?`
//     );

// } catch(error) {
//     console.log('Возникла ошибка: ', error)
//     console.log('А далее подробнее...')
//     console.log('Name: ', error.name)
//     console.log('Message: ', error.message)
//     console.log('Stack: ', error.stack)
// }

// console.log('Конец кода...');


//Урок 22


// let wait = (ms, callback) => {
    // let now = new Date().getTime()

    // while (new Date().getTime() < now + ms) {

    // }

    // callback()

//     setTimeout(callback, ms)
// }

// console.log(1)
// wait(5000, () => console.log(2))
// console.log(3)


// Повторение

// let map = new Map([
//     ['name', 'Johny',],
//     ['age', 32],
//     ['medIn', true]
// ]);

// map.set('devoloper', true);

// console.log( map );
// console.log( 'isAdmin: ', map.has("isAdmin") );
// console.log( 'Name: ' , map.get('name'));
// console.log('Size: ', map.size );
// map.delete('age');
// console.log('Size: ', map.size );
// map.clear();
// console.log('Size: ', map.size );


// let promise = new Promise( (fulfill, reject) => {
//     console.log('Начало, состояние panding...')

//     setTimeout(() => {
//         if (Math.random() > 0.5) {
//             fulfill('Ура, состояние fulfilled :-)')
//         } else {
//             reject('Увы, состояние rejected :-(')
//         }
//     }, 3000);
// })

// promise
//     .then( (succesData) => {
//         console.log('Успех! Получены данные: ', succesData)
//     })
//     .catch( (errorData) => {
//         console.log('Ошибка. Получены данные: ', errorData)
//     })
//     .finally( () => {
//         console.log('Код выполняющийся в самом конце, независимо от результата.')
//     })


//Повтор

// let testSet = new Set([21, 34, 21, 45, 'jr',21]);

// testSet.add(33, 21, 45);

// testSet.delete(33);

// console.log(testSet);
// console.log('Есть ли элемент 21: ' , testSet.has(21));
// console.log('Размер объекта: ', testSet.size);

// console.log(testSet.entries());


// let items = ['Вентилятор', 'Лампа настольная', 'Чайник', 'Фонарик'];
// let sellerStatus = "legal";
// let balance = 12000;
// let violations = 'none';

// let sellerZ = new Map([
//     ['sellerStatus', 'legal'],
//     ['balance', 12000],
//     ['violatations', 'none'],
//     ['sellerItems', items]
//     ]);

// console.log( sellerZ );


// async function getSomething() {
//     return new Promise( (fulfill) => {
//         setTimeout(() => {
//             fulfill ('Привет!')
//         }, 3000);
//     })    
// }

// console.log('Начало...');

// let something = getSomething();

// console.log(something);

// console.log('Конец...');


//Повтор

// let num = Math.round(Math.random() * 100);
// let newNum = Math.pow(num, 2);
// let sqNum = Math.sqrt(newNum);

// console.log('Number: ', num );
// console.log('New number: ', newNum );
// console.log('Sqrt number: ', sqNum );


//Thenable

class Thenable {
    constructor(num) {
        this.num = num;
    }

    then(resolve, reject) {
        
    }
}


//Урок 23


