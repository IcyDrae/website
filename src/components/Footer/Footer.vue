<template>
  <footer class="footer-section section">
    <div class="footer-links-wrapper">
      <a href="https://github.com/MatrixEternal" target="_blank">GitHub</a>
      <router-link :to="{ name: 'PrivacyPolicy' }">Privacy Policy</router-link>
      <router-link :to="{ name: 'Copyright' }">Copyright</router-link>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>

</style>
