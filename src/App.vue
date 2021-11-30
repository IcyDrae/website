<template>
  <RepeatingWords></RepeatingWords>
  <NavigationBar></NavigationBar>
  <Intro></Intro>
  <router-view />
  <div class="cursor bounce"></div>
</template>

<script>

import RepeatingWords from "./components/RepeatingWords.vue"
import NavigationBar from "./components/NavigationBar.vue"
import Intro from "./components/Intro.vue"
import MyWorld from "./components/MyWorld.vue"
import appStyles from './styles/app.scss'
import cursor from './styles/cursor.scss'
import responsiveStyles from './styles/responsive.scss'
import CustomCursor from "./helpers/CustomCursor"
import { mapActions, mapGetters } from "vuex";

const cursorObject = new CustomCursor();

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
    hideScrollbar() {
      if (this.activeState) {
        document.querySelector('body').style.overflowY = 'hidden';
      } else if(!this.activeState || this.activeState == undefined) {
        document.querySelector('body').style.overflowY = 'auto';
      }
    },
  },
  watch: {
    activeState: function () {
      this.hideScrollbar();
    },
  },
};

</script>
