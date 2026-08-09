<template>
      <p>Width: {{ windowWidth }}</p>
    <p>Mobile: {{ isMobile }}</p>
  <Mobile v-if="isMobile"></Mobile>
  <div v-else class="desktop">
    <NavigationBar></NavigationBar>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>

import Mobile from "./components/Mobile/Mobile.vue";
import NavigationBar from "@/components/NavigationBar.vue";
import Footer from "@/components/Footer/Footer.vue";

export default {
  components: {
    Mobile,
    NavigationBar,
    Footer
  },
  data() {
    return {
      isMobile: false,
      windowWidth: 0
    }
  },
  mounted() {
    console.error("No, no errors here, hopefully :).");
    this.checkScreenSize()
    window.addEventListener("resize", this.checkScreenSize)
  },

  beforeUnmount() {
    window.removeEventListener("resize", this.checkScreenSize)
  },

  methods: {
    checkScreenSize() {
      this.windowWidth = window.innerWidth
      this.isMobile = window.innerWidth < 768;
    }
  }
};

</script>

<style lang="scss">

@import "@/styles/index.scss";

</style>
