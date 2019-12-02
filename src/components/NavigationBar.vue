<template>
    <div id="nav" class="menu-wrap">
        <router-link class="logo" :to="{name : 'home'}">
            <p class="logo-paragraph">Nur Fide</p>
        </router-link>
        <div class="menu" v-bind:class="[{active: isActive}, '']">
        <div class="bg-img">
          <div>
            <div>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="burger-lines" v-bind:class="[{ change: isActive }, '']" v-on:click="showOverlay()">
        <div class="bar bar1"></div>
        <div class="bar bar2"></div>
        <div class="bar bar3"></div>
      </div>
  </div>
</template>

<script>
import navBarStyles from '@/styles/navbar.scss'


export default {
  name: 'NavigationBar',
  data() {
    return {
      isActive: false,
    }

  },
  methods: {
    showOverlay() {
        this.isActive = !this.isActive
    },
    redirectToHome() {

    }
  },
  mounted() {
  window.addEventListener('keyup', ev => {
    if (ev.keyCode === 27) {
      if (this.isActive = true) {
          this.isActive = false
      } else {
          return
      }
    }
  })
}
};

</script>