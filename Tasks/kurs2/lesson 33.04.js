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
        let { target, x, y } = event
        let isDraggable = target.matches(this.selectors.root)

        if (!isDraggable) {
            return;
        }

        target.classList.add(this.stateClasses.isDragging)
        let {left, top} = target.getBoundingClientRect()

        this.state = {
            offsetX: x - left,
            offsetY: y - top,
        }
    }
    onPoinetMove(event) {}
    onPoinetUp() {}

    bindEvents() {
        document.addEventListener('pointerdown', (event) => this.onPoinetDown(event))
        document.addEventListener('pointermove', (event) => this.onPoinetMove(event))
        document.addEventListener('pointerup', () => this.onPoinetUp())
    }
}