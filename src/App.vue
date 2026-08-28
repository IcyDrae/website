<template>
  <Mobile v-if="isMobile"></Mobile>
  <div v-else class="desktop">
    <Heading></Heading>
    <Divider></Divider>
    <NamePresentation></NamePresentation>
    <Divider></Divider>
    <NavigationBar></NavigationBar>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>

import Mobile from "./components/Mobile/Mobile.vue";
import NavigationBar from "@/components/NavigationBar.vue";
import Footer from "@/components/Footer/Footer.vue";
import Divider from "./components/Shared/Divider.vue";
import Heading from "./components/Heading.vue";
import NamePresentation from "./components/NamePresentation.vue";

export default {
  components: {
    Heading,
    Divider,
    NamePresentation,
    Mobile,
    NavigationBar,
    Footer
  },
  data() {
    return {
      isMobile: false,
    }
  },
  mounted() {
    console.log("No, no errors here, hopefully :).");
    this.checkScreenSize()
    window.addEventListener("resize", this.checkScreenSize)
  },

  beforeUnmount() {
    window.removeEventListener("resize", this.checkScreenSize)
  },

  methods: {
    checkScreenSize() {
      this.isMobile = window.innerWidth < 1000;
    }
  }
};

</script>

<style lang="scss">

@import "@/styles/index.scss";

</style>
