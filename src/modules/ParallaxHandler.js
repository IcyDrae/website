export default class ParallaxHandler {
    constructor(parallaxCalculation, htmlElement, animateDirection) {
        this.parallaxHandler = this.parallaxHandler.bind(this)
        this.parallaxCalculation = parallaxCalculation
        this.htmlElement = htmlElement,
        this.animateDirection = animateDirection
    }

    parallaxHandler(factor) {
        /* If the event is a method(like in this case), the emitted values are the first parameter(in this case factor),
        that's why we don't use two parameters */
        this.parallaxCalculation = Math.round((window.scrollY / window.outerHeight) * - factor[0]);
        this.htmlElement = factor[1];
        this.animateDirection = factor[2];

        this.htmlElement.style.transform = 'translate' + this.animateDirection + '(' + (this.parallaxCalculation - 0) + 'px)';         

    }
}