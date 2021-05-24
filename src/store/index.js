import Vue from 'vue';
import Vuex from 'vuex';
// import { LayoutPlugin } from 'bootstrap-vue';
import createPersistedState from 'vuex-persistedstate';
import Auth from './auth.js';
import Apt from './apt.js';
import Store from './store.js';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth: Auth,
    apt: Apt,
    store: Store,
  },
  plugins: [
    createPersistedState({
      paths:['auth']
    })
  ],
});
