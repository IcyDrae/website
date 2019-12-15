export default class CustomCursor {
    constructor(cursorDiv, x, y) {
        this.initiate = this.initiate.bind(this)
        this.movemouse = this.movemouse.bind(this)
        this.cursorDiv = cursorDiv
        this.x = x
        this.y = y
    }

    movemouse(e) {
        this.x = e.clientX
        this.y = e.clientY
        // get cursor element div
        this.cursorDiv = document.querySelector('.cursor')
        this.cursorDiv.style.transform = `translate(${this.x}px, ${this.y}px)`
    }

    initiate() {
        document.addEventListener('mousemove', this.movemouse)
    }
}