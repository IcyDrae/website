<template>
  <div class="navigation-bar">
    <router-link class="logo" :to="{ name: 'Homepage' }">Ray</router-link>
    <div class="navigation-links">
      <router-link :to="{hash: '#about-me'}">About Me</router-link>
      <router-link :to="{hash: '#technologies'}">Technologies</router-link>
      <router-link :to="{hash: '#projects'}">Projects</router-link>
      <router-link :to="{hash: '#posts'}">Blog</router-link>
      <a class="contact" href="mailto:icydrae@hotmail.com">Contact</a>
    </div>

  </div>
</template>

<script>
export default {
  name: "NavigationBar"
}
</script>
