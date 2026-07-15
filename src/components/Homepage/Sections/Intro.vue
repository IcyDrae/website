<template>
    <div class="intro-section section">
      <div class="intro intro-left">
        <div class="hello">
          <p class="hello-text" data-text="hello">Hello</p>
        </div>
        <div class="intro-description">
          <p>I am Ray, a Software Engineer with a love for the Web, Linux & Infrastructure.</p>
          <p>This is <u>Dev Handbook</u>, a place where I share my side projects, writings & new things I'm learning.</p>
        </div>
        <div class="technologies">
          <h3>I enjoy working with these tools:</h3>
          <p v-for="(technology, index) in technologies" :key="index"> > {{ technology }}</p>
        </div>
      </div>
    </div>
</template>

<script>

export default {
  name: 'Intro',
  data() {
    return {
      technologies: [
          "Vue.js",
          "Symfony/PHP",
          "SCSS",
          "Git",
          "Ubuntu/CentOS/macOS",
          "Docker",
          "Nginx"
      ]
    }
  }
}
</script>
