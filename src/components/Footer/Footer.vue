<template>
  <footer class="footer-section">
    <div class="footer-heading">
      <p>Open channel</p>
      <h2>Have an interesting system to investigate?</h2>
      <a href="mailto:icydrae@hotmail.com">Put it in writing <span>→</span></a>
    </div>
    <div class="footer-details">
      <div><p>Direct line</p><a href="mailto:icydrae@hotmail.com">icydrae@hotmail.com</a></div>
      <div><p>Wire service</p><a :href="`https://github.com/${this.$store.state.GITHUB_USERNAME}`" target="_blank" rel="noopener noreferrer">GitHub</a></div>
      <div class="footer-links-wrapper"><router-link :to="{ name: 'PrivacyPolicy' }">Privacy</router-link><router-link :to="{ name: 'Attributions' }">Attributions</router-link></div>
    </div>
    <p class="imprint">© {{ copyrightYear }} The Ray Record · Printed in Tirana</p>
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
