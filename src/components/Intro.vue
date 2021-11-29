<template>
    <div class="intro-container">
        <div class="paragraph-container">
            <p class="hello" data-text="hello">Hello</p>
        </div>
        <div class="main-section-container">
            <p>I'm <span>Reard</span>, <br> Full Stack Web Developer & Designer,<br> system administrator & tech <br> afficionado -</p>
        </div>
    </div>
</template>

<script>
import introScss from "../styles/intro.scss";

export default {
    name: 'Intro',
    data() {
        return {
        }
    },
    methods: {
        parallaxScrollEffect() {
            this.$emit('parallax-event', ['300', document.querySelector('.main-section-container p'), 'Y'])
        }
    },
    mounted() {
        window.addEventListener('scroll', this.parallaxScrollEffect)
    }
}
</script>