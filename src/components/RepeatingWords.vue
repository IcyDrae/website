<template>
  <div class="repeating-words-container">
      <p v-for="word in words" v-bind:key="word.id"> {{ word.content }} </p>
      <p v-for="word in words" v-bind:key="word.id"> {{ word.content }} </p>
  </div>
</template>

<script>

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
  }
}
</script>
