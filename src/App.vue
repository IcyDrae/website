<template>
  <NavigationBar></NavigationBar>
  <router-view />
  <Footer></Footer>
</template>

<script>

import NavigationBar from "@/components/NavigationBar.vue";
import Footer from "@/components/Footer/Footer.vue";

export default {
  components: {
    NavigationBar,
    Footer
  }
};

</script>

<style lang="scss">

@import "@/styles/index.scss";

</style>
