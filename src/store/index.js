import Vue from 'vue';
import Vuex from 'vuex';
// import { LayoutPlugin } from 'bootstrap-vue';
import createPersistedState from 'vuex-persistedstate';
import Auth from './auth.js';
import Apt from './apt.js';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth: Auth,
    apt: Apt
  },
  plugins: [
    createPersistedState({
      paths:['auth']
    })
  ],
});
