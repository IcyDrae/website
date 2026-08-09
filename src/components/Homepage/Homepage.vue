<template>
  <div class="home">
    <Intro></Intro>
    <AboutMe></AboutMe>
    <Technologies></Technologies>
    <Projects></Projects>
    <Posts></Posts>
  </div>
</template>

<script>

import Intro from "@/components/Homepage/Sections/Intro.vue"
import AboutMe from "@/components/Homepage/Sections/AboutMe.vue"
import Technologies from "@/components/Homepage/Sections/Technologies.vue"
import Projects from "@/components/Homepage/Sections/Projects.vue";
import Posts from "@/components/Homepage/Sections/Posts.vue";

export default {
  name: "Homepage",
  components: {
    Intro,
    AboutMe,
    Technologies,
    Projects,
    Posts,
  }
};
</script>
