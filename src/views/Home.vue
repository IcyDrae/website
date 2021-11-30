<template>
  <div class="home">
    <RepeatingWords></RepeatingWords>
    <Intro></Intro>
    <Projects></Projects>
    <div class="cursor bounce"></div>
  </div>
</template>

<script>

import RepeatingWords from "../components/RepeatingWords.vue"
import Intro from "../components/Intro.vue"
import Projects from "../components/Projects";

export default {
  name: "Home",
  components: {
    RepeatingWords,
    Intro,
    Projects
  }
};
</script>
