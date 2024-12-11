console.log('Preloader.')

let preloaderElement = document.querySelector('.preloader');
let preloaederCloseEvent = new Event('preloaderClose', )

preloaderElement.addEventListener('animationend', (event) => {
    if (event.animationName === 'fade-out') {
        animateSection()
    }
})