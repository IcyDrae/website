<template>
  <div class="home">
    <RepeatingWords></RepeatingWords>
    <Intro></Intro>
    <Projects></Projects>
    <Posts></Posts>
    <div class="cursor bounce"></div>
  </div>
</template>

<script>

import RepeatingWords from "../components/RepeatingWords.vue"
import Intro from "../components/Intro.vue"
import Projects from "../components/Projects.vue";
import Posts from "../components/Posts/Posts.vue";

export default {
  name: "Home",
  components: {
    RepeatingWords,
    Intro,
    Projects,
    Posts,
  }
};
</script>
