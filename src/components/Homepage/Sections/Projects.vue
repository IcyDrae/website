<template>
  <div class="projects-section section">
    <h2 class="section-headline"><span>These are some of my projects</span></h2>
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
      let url = `https://api.github.com/search/repositories?q=user:${this.username}&sort=stars&order=desc&per_page=6`;

      try {
        let repositories = await axios.get(url);
        this.repositories = repositories.data.items;
      } catch (exception) {
        console.log(exception)
      }
    }
  }
}

</script>
