// console.log('Animation.')

let sectionElement = document.querySelectorAll('section');
// console.log('sectionElement: ', sectionElement)

let animateSection = () => {
    sectionElement.forEach((sectionElement) => {
        sectionElement.classList.add('is-visible')
    })
}

document.addEventListener('preloaderClose', () => {
    animateSection()
    
})