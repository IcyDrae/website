<template>
  <div class="navigation-bar">
    <div class="navigation-links">
      <router-link :to="{hash: '#about-me'}">About Me</router-link>
      <router-link :to="{hash: '#technologies'}">Technologies</router-link>
      <router-link :to="{hash: '#projects'}">Projects</router-link>
      <router-link :to="{hash: '#posts'}">Blog</router-link>
      <a href="mailto:icydrae@hotmail.com">Contact</a>
    </div>

    <router-link class="logo" :to="{ name: 'Homepage' }">R</router-link>
  </div>
</template>

<script>
export default {
  name: "NavigationBar"
}
</script>
