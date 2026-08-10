<template>
  <div class="projects-section section" id="projects">
    <div class="section-headline">
      <p class="portfolio-paragraph">● Portfolio</p>
      <span>Projects</span>
    </div>
    <div class="projects-wrapper">
      <a v-for="repository in repositories"
         :href="repository.html_url"
         target="_blank">
        <div class="project">
          <div class="project-introduction">
            <p class="project-name">{{ repository.name }}</p>
            <p class="project-description">{{ repository.description }}</p>
          </div>
          <div class="project-star"
               v-if="repository.stargazers_count !== 0" >
            <img src="@/assets/icons/icons8-stern-100.png" alt="">
            <p>{{ repository.stargazers_count }}</p>
          </div>
        </div>
      </a>
    </div>
    <div class="cta-wrapper">
      <a class="cta" :href="`https://github.com/${username}`" target="_blank">See more</a>
    </div>
  </div>
</template>

<script>

import axios from "axios";

export default {
  name: "Projects",
  data() {
    return {
      repositories: Array,
      username: this.$store.state.GITHUB_USERNAME
    };
  },
  async mounted() {
    await this.fetchRepositories();
  },
  methods: {
    fetchRepositories: async function() {
      const cacheKey = `github-repositories-${this.username}`;
      const cacheDuration = 10 * 60 * 1000; // 10 minutes

      const cached = localStorage.getItem(cacheKey);

      if (cached) {
        const { timestamp, repositories } = JSON.parse(cached);

        const cacheIsValid = Date.now() - timestamp < cacheDuration;

        if (cacheIsValid) {
          this.repositories = repositories;
          return;
        }
      }

      let url = `https://api.github.com/search/repositories?q=user:${this.username}&sort=stars&order=desc&per_page=6`;

      try {
        const response = await axios.get(url);
        this.repositories = response.data.items;

        localStorage.setItem(
          cacheKey,
          JSON.stringify({
            timestamp: Date.now(),
            repositories: this.repositories
          })
        );
      } catch (exception) {
        console.log(exception);
      }
    }
  }
}

</script>
