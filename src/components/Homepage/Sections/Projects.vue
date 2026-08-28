<template>
  <section class="projects-section editorial-section" id="projects">
    <div class="section-kicker"><span>The evidence</span><span>02</span></div>
    <div class="section-title projects-title">
      <div><p>Selected work</p><h2>The project archive.</h2></div>
      <span>Repository findings · 2018—Now</span>
    </div>
    <div class="projects-wrapper">
      <a v-for="repository in repositories"
         :key="repository.id"
         :href="repository.html_url"
         target="_blank"
         rel="noopener noreferrer">
        <div class="project">
          <div class="project-index">Exhibit {{ exhibitNumber(repository) }}</div>
          <div class="project-introduction">
            <p class="project-name">{{ repository.name }}</p>
            <p class="project-description">{{ repository.description || 'A repository currently awaiting a written field note.' }}</p>
          </div>
          <span class="case-link">Open case file <span>→</span></span>
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
  </section>
</template>

<script>

import axios from "axios";

export default {
  name: "Projects",
  data() {
    return {
      repositories: [],
      username: this.$store.state.GITHUB_USERNAME
    };
  },
  async mounted() {
    await this.fetchRepositories();
  },
  methods: {
    exhibitNumber(repository) {
      return String(this.repositories.indexOf(repository) + 1).padStart(2, '0');
    },
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
