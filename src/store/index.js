import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isActive: false,
    logoText: 'nur fide',
    visibility: '',
  },
  getters: {
    activeState: state => state.isActive,
    logoState: state => state.logoText,
    scrollbarVisibility: state => state.visibility
  },
  mutations: {
    setIsActive(state, boolean) {
      state.isActive = boolean
      console.log('Active is: ' + state.isActive);
    },
    setLogoText(state, text) {
      if (this.state.isActive) {
        state.logoText = text
        console.log('Logo text is: ' + state.logoText)
      } else if(!this.state.isActive || this.state.isActive == undefined) {
        state.logoText = 'nur fide'
        console.log('Logo text is: ' + state.logoText)
      }
    },
    setScrollbarVisibility(state, style) {
      state.visibility = style
      if (this.state.isActive) {
        /* document.querySelector('body').style.overflowY = 'hidden'; */
        console.log('good')
      } else if(!this.state.isActive || this.state.isActive == undefined) {
        state.style = visibility
        /* document.querySelector('body').style.overflowY = 'auto'; */
      }
    }
  },
  actions: {
    showOverlay(context) {
        context.commit('setIsActive', this.boolean = !this.boolean)
        context.commit('setLogoText', 'authority')
      },
      hideScrollbar(context) {
        context.commit('setScrollbarVisibility', 'hidden' || 'auto')
      }
  },
  modules: {}
});
