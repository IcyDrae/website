<template>
  <div id="app">
    <RepeatingWords></RepeatingWords>
    <NavigationBar></NavigationBar>
    <Intro @parallax-event="parallaxHandler"></Intro>
    <MyWorld @parallax-event="parallaxHandler"></MyWorld>
    <router-view />
    <div class="mouse-ball"></div>
  </div>
</template>

<script>
import RepeatingWords from '@/components/RepeatingWords.vue'
import NavigationBar from '@/components/NavigationBar.vue'
import Intro from '@/components/Intro.vue'
import MyWorld from '@/components/MyWorld.vue'
import appStyles from './styles/app.scss'
import responsiveStyles from './styles/responsive.scss'
import { mapActions, mapGetters } from 'vuex';

export default {
  components: {
    RepeatingWords,
    NavigationBar,
    Intro,
    MyWorld,
  },
  data() {
    return {
      parallaxCalculation: Number,
      htmlElement: String,
      animateDirection: Number,
    }
  },
  methods: {
    parallaxHandler(factor) {
      /* If the event is a method(like in this case), the emitted values are the first parameter(in this case factor),
      that's why we don't use two parameters */
      this.parallaxCalculation = Math.round((window.scrollY / window.outerHeight) * - factor[0]);
      this.htmlElement = factor[1];
      this.animateDirection = factor[2];

      this.htmlElement.style.transform = 'translate' + this.animateDirection + '(' + (this.parallaxCalculation - 0) + 'px)';         

    },
    hideScrollbar() {
      if (this.activeState) {
        document.querySelector('body').style.overflowY = 'hidden';
      } else if(!this.activeState || this.activeState == undefined) {
        document.querySelector('body').style.overflowY = 'auto';
      }
    },
    cursorFollowingBall() {
      let ball = document.querySelector('.mouse-ball')
      let mouseX = 0
      let mouseY = 0
      let ballX = 0
      let ballY = 0
      let speed = 0.05

      function animate() {
        let distX = mouseX - ballX
        let distY = mouseY - ballY
  
        ballX = ballX + (distX * speed)
        ballY = ballY + (distY * speed)
  
        ball.style.left = ballX + 'px'
        ball.style.top = ballY + 'px'
  
        requestAnimationFrame(animate)
      }

      animate()

      document.addEventListener('mousemove', () => {
        mouseX = event.pageX
        mouseY = event.pageY      
      })
    },
  },
  mounted() {
    this.cursorFollowingBall()
  },
  computed: {
    ...mapGetters(["activeState"]),
  },
  watch: {
    activeState: function () {
      this.hideScrollbar();
    },
  },
};

</script>