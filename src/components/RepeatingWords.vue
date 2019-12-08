<template>
  <div class="repeating-words-container">
      <p v-for="word in words" v-bind:key="word.id"> {{ word.content }} </p>
      <p v-for="word in words" v-bind:key="word.id"> {{ word.content }} </p>
  </div>
</template>

<script>
    import repeatingWords from '../styles/repeating_words.scss';

    export default {
        name: "RepeatingWords",
        data() {
            return {
                words: [
                    { content: 'Trust' },
                    { content: 'Gratitude' },
                    { content: 'Mercy' },
                    { content: 'Authority' },
                    { content: 'All-Encompassing' },
                    { content: 'Beauty' },
                    { content: 'Return' },
                ],
            }
        },
        methods: {
            
        },
        mounted() {
            
        }
    }
</script>

<style>

</style>