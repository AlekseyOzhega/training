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
    }

    bindEvents() {
        
    }
}