<template>
  <header class="navigation-bar">
    <div class="edition-line"><span>Tirana, Albania</span><span>The Technical Record</span><span>Est. 2018</span></div>
    <div class="masthead">
      <router-link class="wordmark" :to="{ name: 'Homepage' }">Ray</router-link>
      <p>Software · Systems · Security</p>
    </div>
    <nav class="navigation-links" aria-label="Main navigation">
      <router-link :to="{ path: '/', hash: '#about-me' }">Profile</router-link>
      <router-link :to="{ path: '/', hash: '#projects' }">Work</router-link>
      <router-link :to="{ path: '/', hash: '#technologies' }">Stack</router-link>
      <router-link :to="{ path: '/', hash: '#posts' }">Notes</router-link>
      <a href="mailto:icydrae@hotmail.com">Contact</a>
    </nav>
  </header>
</template>

<script>
export default {
  name: "NavigationBar"
}
</script>
