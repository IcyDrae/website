<template>
  <div id="app">
    <NavigationBar></NavigationBar>
    <Intro></Intro>
    <router-view />
  </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar.vue'
import Intro from '@/components/Intro.vue'
import appStyles from './styles/app.scss'
import responsiveStyles from './styles/responsive.scss'

export default {
  components: {
    NavigationBar,
    Intro
  },
  data() {
    return {
    }
  },
  methods: {

  }
};

</script>