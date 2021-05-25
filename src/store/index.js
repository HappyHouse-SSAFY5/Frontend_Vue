import Vue from 'vue';
import Vuex from 'vuex';
// import { LayoutPlugin } from 'bootstrap-vue';
import createPersistedState from 'vuex-persistedstate';
import Auth from './auth.js';
import Apt from './apt.js';
import Store from './store.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    notices: [],
    notice: Object,
    qnas: [],
    qna: Object,
  },
  getters: {},
  mutations: {
    GET_NOTICE_LIST(state, notices) {
      state.notices = notices;
      console.log(state.notices);
    },
    SELECT_NOTICE(state, notice) {
      state.notice = notice;
      console.log(state.notice);
    },
    GET_QNA_LIST(state, qnas) {
      state.qnas = qnas;
    },
    SELECT_QNA(state, qna) {
      state.qna = qna;
    },
  },
  actions: {
    selectNotice({ commit }, notice) {
      commit('SELECT_NOTICE', notice);
    },
    selectQna({ commit }, qna) {
      commit('SELECT_QNA', qna);
    },
  },
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
