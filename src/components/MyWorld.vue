<template>
  <div class="my-world-container">
    <p class="welcome-to-my-world">welcome to my <span data-text="world">world</span></p>
    <div class="facts">
        <p class="i-am">I'm-</p>
        <p>23 Years old-</p>
        <p>born and raised in
            <span class="tirana">Tirana</span>, Albania-
        </p>
        <p>living in <span>Munich</span>, Germany-</p>
        <p><span>Web Design & Development</span> graduate <br> @SAE Institute Munich-</p>
    </div>
    <div class="displacement"></div> <!-- // TODO: style this div, position it above tirana and hide it, then show it using another class with js -->
  </div>
</template>

<script>

/*import myWorld from "../styles/my_world.scss";
import { mapActions, mapGetters } from 'vuex';
import hoverEffect from 'hover-effect';*/

export default {
    name: 'MyWorld',
    data() {
        return {
            rect: '',
            windowX: '',
            windowHeight: '',
            bodyScroll: '',
        }
    },
    methods: {
        /* getPosition() {
            this.rect = Math.floor(document.querySelector('.i-am').getBoundingClientRect().bottom);
            this.bodyScroll = document.querySelector('body').getBoundingClientRect().bottom;
            this.windowX = window.pageYOffset;

            this.windowHeight = Math.floor(window.innerHeight);
            if (this.bodyScroll == (this.windowHeight / 1.2)) {
                document.querySelector('.i-am').style.position = 'fixed';
            } else {
                document.querySelector('.i-am').style.position = 'relative';
            }
        } */
        parallaxScrollEffect() {
            this.$emit('parallax-event', ['250', document.querySelector('.welcome-to-my-world'), 'X']);
        },
        selectTirana() {
            let tirana = document.querySelector('.tirana')
            let displacementDiv = document.querySelector('.displacement')
            tirana.addEventListener('mouseover', () => {
                displacementDiv.classList.add('displacement-active')
            })

            tirana.addEventListener('mouseout', () => {
                displacementDiv.classList.remove('displacement-active')
            })
        },
        /* demoDisplacement() {
            new hoverEffect({
                parent: document.querySelector('.displacement'),
                intensity: 1,
                hover: false,
                image1: require('../assets/Tirana-at-day.jpg'),
                image2: require('../assets/Tirana-at-day.jpg'),
                displacementImage: 'https://images.pexels.com/photos/8892/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
            });
        } */
    },
    mounted() {
        /* window.addEventListener('scroll', this.getPosition); */
        window.addEventListener('scroll', this.parallaxScrollEffect);
        this.selectTirana()
        /* this.demoDisplacement() */
    },
}
</script>