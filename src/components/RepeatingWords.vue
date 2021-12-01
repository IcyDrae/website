<template>
  <div class="repeating-words-container">
      <p v-for="word in endlessWords" v-bind:key="word.id"> {{ word.content }} </p>
      <p v-for="word in endlessWords" v-bind:key="word.id"> {{ word.content }} </p>
  </div>
</template>

<script>

import { mapGetters } from 'vuex';

export default {
    name: "RepeatingWords",
    data() {
        return {
        }
    },
    computed: {
        ...mapGetters(['endlessWords'])
    },
    methods: {
    },
}
</script>

<style>

</style>