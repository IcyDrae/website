<template>
  <footer class="footer-section section">
    <div class="footer-links-wrapper">
      <a :href="`https://github.com/${this.$store.state.GITHUB_USERNAME}`" target="_blank">GitHub</a>
      <router-link :to="{ name: 'PrivacyPolicy' }">Privacy Policy</router-link>
      <router-link :to="{ name: 'Attributions' }">Attributions</router-link>
    </div>
    <div class="copyright-container">
      Copyright &copy; 2021-{{ copyrightYear }}
      <a :href="`https://github.com/${this.$store.state.GITHUB_USERNAME}`" target="_blank">{{ this.$store.state.GITHUB_USERNAME }}</a>
      . All rights reserved.
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
