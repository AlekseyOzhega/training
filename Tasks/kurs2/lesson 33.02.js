'use strict';


let sectionElement = document.querySelectorAll('section');

let animateSection = () => {
    sectionElement.forEach((sectionElement) => {
        sectionElement.classList.add('is-visible')
    })
}


let preloaderElement = document.querySelector('.preloader');

preloaderElement.addEventListener('animationend', (event) => {
    if (event.animationName === 'fade-out') {
        animateSection()
    }
})