<template>
  <div id="app">
    <RepeatingWords></RepeatingWords>
    <NavigationBar></NavigationBar>
    <Intro></Intro>
    <MyWorld></MyWorld>
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

    }
  },
  methods: {
    ...mapActions(['hideScrollbar']),
    /* checkIf() {
      if (this.hideScrollbar) {
        document.querySelector('body').style.overflowY = this.scrollbarVisibility;
      }
    } */
  },
  mounted() {
    this.checkIf()
  },
  computed: {
    ...mapGetters(["activeState", 'scrollbarVisibility']),
    hideScrollbar() {
          if (this.activeState) {
            document.querySelector('body').style.overflowY = 'hidden';
          } else if(!this.activeState || this.activeState == undefined) {
            document.querySelector('body').style.overflowY = 'auto';
          }
        }
  },
  watch: {
    hideScrollbar() {
      if (this.activeState) {
        document.querySelector('body').style.overflowY = this.isActive ? 'hidden' : 'auto';
      } else if(!this.activeState || this.activeState == undefined) {
        document.querySelector('body').style.overflowY = 'auto';
      }
    }
  },
};

</script>