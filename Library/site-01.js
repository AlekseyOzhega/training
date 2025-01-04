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

