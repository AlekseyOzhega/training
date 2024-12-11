console.log('Preloader.')

let preloaderElement = document.querySelector('.preloader');
let preloaederCloseEvent = new Event('preloaderClose', {bubbles: true})

preloaderElement.addEventListener('animationend', (event) => {
    console.log('Hi')
})

// preloaderElement.addEventListener('animationend', (event) => {
//     if (event.animationName === 'fade-out') {
//         preloaderElement.dispatchEvent(
//             new Event('preloaderClose', {bubbles: true})
//         )
//     }
// })