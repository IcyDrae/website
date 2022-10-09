<template>
  <div class="home">
    <RepeatingWords></RepeatingWords>
    <Intro></Intro>
    <Projects></Projects>
    <Posts></Posts>
  </div>
</template>

<script>

import RepeatingWords from "@/components/RepeatingWords.vue"
import Intro from "@/components/Homepage/Sections/Intro.vue"
import Projects from "@/components/Homepage/Sections/Projects.vue";
import Posts from "@/components/Homepage/Sections/Posts.vue";

export default {
  name: "Homepage",
  components: {
    RepeatingWords,
    Intro,
    Projects,
    Posts,
  }
};
</script>
