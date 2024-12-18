'use strict';

class DragAndDrop {
    selectors = {
        root: [data-js-dnd],
    }

    stateClasses = {
        isDragging: 'is-dragging',
    }

    initialState = {
        offsetX: null,
        offsetY: null,
        isDragging: false,
        currentDraggingElement: null,
    }

    constructor() {
        this.state = { ...this.initialState}
        this.bindEvents()
    }

    onPoinetDown(event) {
        let isDraggable = event.target.matches()
    }
    onPoinetMove(event) {}
    onPoinetUp() {}

    bindEvents() {
        document.addEventListener('pointerdown', (event) => this.onPoinetDown(event))
        document.addEventListener('pointermove', (event) => this.onPoinetMove(event))
        document.addEventListener('pointerup', () => this.onPoinetUp())
    }
}