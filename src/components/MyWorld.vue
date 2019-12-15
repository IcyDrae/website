<template>
  <div class="my-world-container">
      <p class="welcome-to-my-world">welcome to my <span data-text="world">world</span></p>
      <div class="facts">
          <p class="i-am">I'm-</p>
          <p>23 Years old-</p>
          <p>born and raised in <span>Tirana</span>, Albania-</p>
          <p>living in <span>Munich</span>, Germany-</p>
          <p><span>Web Design & Development</span> graduate <br> @SAE Institute Munich-</p>
      </div>
  </div>
</template>

<script>

    import myWorld from "../styles/my_world.scss";
    import { mapActions, mapGetters } from 'vuex';

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
            }
        },
        mounted() {
            /* window.addEventListener('scroll', this.getPosition); */
            window.addEventListener('scroll', this.parallaxScrollEffect);
        },
    }
</script>