<template>
  <div id="app">
    <RepeatingWords></RepeatingWords>
    <NavigationBar></NavigationBar>
    <Intro></Intro>
    <MyWorld @parallax-event="parallaxHandler"></MyWorld>
    <router-view />
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
    MyWorld
  },
  data() {
    return {
      parallaxMovement: Number,
      myWorldParagraph: String,
    }
  },
  methods: {
    parallaxHandler(factor) {
      /* If the event is a method(like in this case), the emitted values are the first parameter(in this case factor),
      that's why we don't use two parameters */
      this.parallaxMovement = Math.round((window.scrollY / window.outerHeight) * - factor[0]);
      this.myWorldParagraph = factor[1];
      factor[1].style.transform = 'translateX(' + (this.parallaxMovement - 0) + 'px)';
    },
    hideScrollbar() {
      if (this.activeState) {
        document.querySelector('body').style.overflowY = 'hidden';
      } else if(!this.activeState || this.activeState == undefined) {
        document.querySelector('body').style.overflowY = 'auto';
      }
      console.log(this.activeState);
    }
  },
  mounted() {
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