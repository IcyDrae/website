<template>
  <div id="app">
    <RepeatingWords></RepeatingWords>
    <NavigationBar></NavigationBar>
    <Intro @parallax-event="parallaxHandler"></Intro>
    <MyWorld @parallax-event="parallaxHandler"></MyWorld>
    <router-view />
    <div class="cursor bounce"></div>
  </div>
</template>

<script>
import RepeatingWords from '@/components/RepeatingWords.vue'
import NavigationBar from '@/components/NavigationBar.vue'
import Intro from '@/components/Intro.vue'
import MyWorld from '@/components/MyWorld.vue'
import appStyles from './styles/app.scss'
import cursor from './styles/cursor.scss'
import responsiveStyles from './styles/responsive.scss'
import CustomCursor from './helpers/CustomCursor'
import ParallaxHandler from './helpers/ParallaxHandler'
import { mapActions, mapGetters } from 'vuex';

const cursorObject = new CustomCursor();
const parallaxObject = new ParallaxHandler()

export default {
  components: {
    RepeatingWords,
    NavigationBar,
    Intro,
    MyWorld,
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters(["activeState"]),
  },
  methods: {
    parallaxHandler(factor) {
      parallaxObject.parallaxHandler(factor)
    },
    hideScrollbar() {
      if (this.activeState) {
        document.querySelector('body').style.overflowY = 'hidden';
      } else if(!this.activeState || this.activeState == undefined) {
        document.querySelector('body').style.overflowY = 'auto';
      }
    },
  },
  mounted() {
    /* cursorObject.initiate() */ //TODO fix cursor behaviour, for some reason the hover
                                //causes problems when showing images on hover
  },
  watch: {
    activeState: function () {
      this.hideScrollbar();
    },
  },
};

</script>