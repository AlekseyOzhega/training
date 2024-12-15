'use strict';

let addCircleElement = (x, y, isRed, label) => {
    let circleElementMarkup = `
    <div 
        class="circle ${isRed ? 'red' : ''}"
        style="..."
    >
        <span class="circle__label">${label}</span>
    `
}