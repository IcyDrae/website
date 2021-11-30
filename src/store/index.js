import { createStore } from "vuex";

export default createStore({
  state: {
    isActive: false,
    logoText: 'nur fide',
    words: [
      { content: 'Trust' },
      { content: 'Gratitude' },
      { content: 'Mercy' },
      { content: 'Authority' },
      { content: 'All-Encompassing' },
      { content: 'Beauty' },
      { content: 'Return' },
    ],
  },
  getters: {
    activeState: state => state.isActive,
    logoState: state => state.logoText,
    endlessWords: state => state.words,
  },
  mutations: {
    setIsActive(state, boolean) {
      state.isActive = boolean
    },
    setLogoText(state, text) {
      if (this.state.isActive) {
        state.logoText = text
      } else if(!this.state.isActive || this.state.isActive == undefined) {
        state.logoText = 'nur fide'
      }
    },
  },
  actions: {
    showOverlay(context) {
      context.commit('setIsActive', this.boolean = !this.boolean)
      context.commit('setLogoText', 'authority')
    },
  },
  modules: {}
});
