console.log('Preloader.')

let preloaderElement = document.querySelector('.preloader');
let preloaederCloseEvent = 

preloaderElement.addEventListener('animationend', (event) => {
    if (event.animationName === 'fade-out') {
        animateSection()
    }
})