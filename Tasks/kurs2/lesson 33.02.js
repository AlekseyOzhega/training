'use strict';


let sectionElement = document.querySelectorAll('section');

let animateSection = () => {
    sectionElement.forEach((sectionElement) => {
        sectionElement.classList.add('is-visible')
    })
}

animateSection()

let preloaderElement = document.querySelector('.preloader');

preloaderElement.addEventListener('animationend', (event) => {
    console.log(event)
})