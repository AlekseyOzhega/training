// 'use strict';

// class DragAndDrop {
//     selectors = {
//         root: '[data-js-dnd]',
//     }

//     stateClasses = {
//         isDragging: 'is-dragging',
//     }

//     initialState = {
//         offsetX: null,
//         offsetY: null,
//         isDragging: false,
//         currentDraggingElement: null,
//     }

//     constructor() {
//         this.state = { ...this.initialState}
//         this.bindEvents()
//     }

//     onPoinetDown(event) {
//         let { target, x, y } = event
//         let isDraggable = target.matches(this.selectors.root)
//         console.log(isDraggable)

//         if (!isDraggable) {
//             console.log('onPoinetDown off.')
//             return
//         }

//         target.classList.add(this.stateClasses.isDragging)
//         let {left, top} = target.getBoundingClientRect()

//         this.state = {
//             offsetX: x - left,
//             offsetY: y - top,
//             isDragging: true,
//             currentDraggingElement: target,
//         }
//     }
//     onPoinetMove(event) {
//         if (!this.state.isDragging) {
//             return
//         }

//         let x = event.pageX - this.offsetX
//         let y = event.pageY - this.offsetY

//         this.state.currentDraggingElement.style.left = '${x}px'
//         this.state.currentDraggingElement.style.top = '${y}px'
//     }

//     onPoinetUp() {
//         if (!this.state.isDragging) {
//             return;
//         }

//         this.state.currentDraggingElement.classList.remove(this.stateClasses.isDragging)
//         this.state = { ...this.initialState}
//     }

//     bindEvents() {
//         document.addEventListener('pointerdown', (event) => this.onPoinetDown(event))
//         document.addEventListener('pointermove', (event) => this.onPoinetMove(event))
//         document.addEventListener('pointerup', () => this.onPoinetUp())
//     }
// }

// let test = new DragAndDrop();
// console.log(test);








class DragAndDrop {
    selectors = {
      root: '[data-js-dnd]',
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
      this.state = { ...this.initialState }
      this.bindEvents()
    }
  
    resetState() {
      this.state = { ...this.initialState }
    }
  
    onPointerDown(event) {
      const { target, x, y } = event
      const isDraggable = target.matches(this.selectors.root)

      console.log('Нажатие ф1.')
      console.log(target)
  
      if (!isDraggable) {
        return
      }
      target.classList.add(this.stateClasses.isDragging)
  
      const { left, top } = target.getBoundingClientRect()
      
      console.log('Нажатие ф2.')

      this.state = {
        offsetX: x - left,
        offsetY: y - top,
        isDragging: true,
        currentDraggingElement: target,
      }

      console.log('Нажатие ф3.')
    }
  
    onPointerMove(event) {
      if (!this.state.isDragging) {
        return
      }
  
      const x = event.pageX - this.state.offsetX
      const y = event.pageY - this.state.offsetY
  
      this.state.currentDraggingElement.style.left = `${x}px`
      this.state.currentDraggingElement.style.top = `${y}px`
    }
  
    onPointerUp() {
      if (!this.state.isDragging) {
        return
      }
  
      this.state.currentDraggingElement.classList.remove(this.stateClasses.isDragging)
      this.resetState()
    }
  
    bindEvents() {
      document.addEventListener('pointerdown', (event) => this.onPointerDown(event))
      document.addEventListener('pointermove', (event) => this.onPointerMove(event))
      document.addEventListener('pointerup', () => this.onPointerUp())
    }
  }
  
  new DragAndDrop()