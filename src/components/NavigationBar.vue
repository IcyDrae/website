<template>
    <div id="nav" class="menu-wrap">
        <router-link class="logo" :to="{name : 'home'}">
            <p class="logo-paragraph" v-bind:class="[{active: activeState}, '']">{{ this.logoState }}</p>
        </router-link>
        <div class="menu" v-bind:class="[{active: activeState}, '']">
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
      <div class="burger-lines" v-bind:class="[{ change: activeState }, '']" v-on:click="show()">
        <div class="bar bar1"></div>
        <div class="bar bar2"></div>
        <div class="bar bar3"></div>
      </div>
  </div>
</template>

<script>
import navBarStyles from '@/styles/navbar.scss';
import { mapActions, mapGetters } from 'vuex';


export default {
  name: 'NavigationBar',
  data() {
    return {

    }

  },
  computed: {
    ...mapGetters(["activeState", "logoState"]),
  },
  methods: {
    ...mapActions(['showOverlay']),
    show() {
      this.showOverlay()
    },
  },
  mounted() {
    window.addEventListener('keyup', ev => {
      if (ev.keyCode === 27) {
        if (this.activeState) {
          this.showOverlay()
        } else {
          return
        }
      }
    })
  },
};

</script>