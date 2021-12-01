<template>
  <div class="home">
    <RepeatingWords></RepeatingWords>
    <Intro></Intro>
    <Projects></Projects>
    <Posts></Posts>
    <Footer></Footer>
    <div class="cursor bounce"></div>
  </div>
</template>

<script>

import NavigationBar from "../components/NavigationBar";
import RepeatingWords from "../components/RepeatingWords.vue"
import Intro from "../components/Intro.vue"
import Projects from "../components/Projects.vue";
import Posts from "../components/Posts/Posts.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Home",
  components: {
    NavigationBar,
    RepeatingWords,
    Intro,
    Projects,
    Posts,
    Footer
  }
};
</script>
