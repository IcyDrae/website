<template>
  <NavigationBar></NavigationBar>
  <router-view />
  <Footer></Footer>
</template>

<script>

import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer/Footer";

export default {
  components: {
    NavigationBar,
    Footer
  },
  data() {
    return {
    }
  }
};

</script>

<style lang="scss">

@import "./styles/index.scss";

</style>
