<template>
  <div class="navigation-bar">
    <router-link class="logo" :to="{ name: 'Home' }">R</router-link>

    <div class="navigation-links">
      <router-link :to="{ name: 'Posts' }">Blog</router-link>
      <a href="mailto:test.com">Contact</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavigationBar"
}
</script>

<style scoped>

</style>
