'use strik';


//Увеличиваем текст кнопки навигации при наведении курсора
document.addEventListener('pointerover', (event) => {
    let btnElement = event.target.closest('.nav-button');

    if (btnElement) {
        let btnTitleElement = btnElement.querySelector('.title-nav');

        if (btnTitleElement) {
            btnTitleElement.classList.add('title-nav-hov')
        }
    }
})


//Уменьшаем текст кнопки навигации при уходе курсора
document.addEventListener('pointerout', (event) => {
    let btnElement = event.target.closest('.nav-button');

    if (btnElement) {
        let btnTitleElement = btnElement.querySelector('.title-nav');

        if (btnTitleElement) {
            btnTitleElement.classList.remove('title-nav-hov')
        }
    }
})


//Задача с тортом

// let edoki = +prompt('Введите количество людей на один торт..', 1)
// console.log(edoki)

// function RazreziTorta(edoki) {
//     let razDiag = 0;
//     let razRad = 0;
//     let kuski = edoki;
//     let chet = edoki % 2;

//     for (let i = edoki; i > 0; i = i - 2) {
//         console.log('==1==')
//         razDiag = razDiag + 1;

//         if (i < 0) {
//             i = 0;
//             razRad++;
//         }

//     }

//     if (chet !== 0) {
//         razDiag--;
//         razRad++;
//     }
    
//     let result = {
//         "razDiagonal": razDiag,
//         "razRadius": razRad,
//     }

//     return result;
// }
// let resu = RazreziTorta(edoki);
// console.log(resu);

// for (let i = edoki; i > 0; i--) {
//     console.log('==1==');
// }


//Повторение DOM

// console.log(document);
// console.dir(document);

// console.log(document.body.header)

// let headerElement = document.querySelector('header');
// console.log(headerElement.children[1]);
// console.log( headerElement.parentNode);

let sliderElement = document.querySelector('.slider');
console.log( sliderElement );