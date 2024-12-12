// console.log('Preloader.')

let preloaderElement = document.querySelector('.preloader')

// console.log('preloaderElement', preloaderElement)
let preloaederCloseEvent = new Event('preloaderClose', {bubbles: true})

// preloaderElement.addEventListener('animationend', (event) => {
//     console.log('Hi')
// })

preloaderElement.addEventListener('animationend', (event) => {
    if (event.animationName === 'fade-out') {
        preloaderElement.dispatchEvent(
            new CustomEvent('preloaderClose', {
                bubbles: true,
                detail: {
                    closeAnimationName: event.animationName,
                    closeAnimationDuration: event.elapsedTime,
                }
            })
        )
    }
})