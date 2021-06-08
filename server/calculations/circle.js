class Circle {
    constructor() {
        this.offTop = 0,
        this. offLeft = 0
    }

    getOffset() {
        return {
            offTop: this.offTop,
            offLeft: this.offLeft
        }
    }
}

module.exports = Circle;