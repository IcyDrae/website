<template>
  <div class="navigation-bar">
    <router-link class="logo" :to="{ name: 'Homepage' }">R</router-link>

    <div class="navigation-links">
      <router-link :to="{ name: 'Posts' }">Blog</router-link>
      <a href="mailto:hey@dev-handbook.net">Contact</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavigationBar"
}
</script>
