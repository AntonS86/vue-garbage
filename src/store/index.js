import Vue from 'vue';
import Vuex from 'vuex';
import counter from "./Counter";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    counter: counter
  },
  state: {
    title: 'Hello from store',
  },
  getters: {
    title(state) {
      return state.title + '!!!'
    }
  }
});
