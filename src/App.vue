<template>
  <NavigationBar></NavigationBar>
  <router-view />
</template>

<script>

import NavigationBar from "./components/NavigationBar";

export default {
  components: {
    NavigationBar
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
