console.log('Preloader.')

let preloaderElement = document.querySelector('.preloader');

preloaderElement.addEventListener('animationend', (event) => {
    if (event.animationName === 'fade-out') {
        animateSection()
    }
})