<template>
  <footer class="footer-section section">
    <div class="footer-links-wrapper">
      <a :href="`https://github.com/${this.$store.state.GITHUB_USERNAME}`" target="_blank">GitHub</a>
      <router-link :to="{ name: 'PrivacyPolicy' }">Privacy Policy</router-link>
      <router-link :to="{ name: 'Attributions' }">Attributions</router-link>
    </div>
    <div class="contact-footer">
      <a href="mailto:icydrae@hotmail.com">icydrae@hotmail.com</a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  computed: {
    copyrightYear: function() {
      return new Date().getFullYear();
    }
  }
}
</script>
