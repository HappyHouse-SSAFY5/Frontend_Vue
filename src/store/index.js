import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import Auth from './auth.js';
import Apt from './apt.js';
import Store from './store.js';
import Notice from './notice.js';
import Qna from './qna.js';
import Picks from './picks';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth: Auth,
    apt: Apt,
    store: Store,
    notice: Notice,
    qna: Qna,
    picks: Picks,
  },
  plugins: [
    createPersistedState({
      paths:['auth']
    })
  ],
});
