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
    apts: [],
    apt: Object,
    notices: [],
    notice: Object,
    qnas: [],
    qna: Object,
  },
  getters: {},
  mutations: {
    GET_APT_LIST(state, apts) {
      state.apts = apts;
    },
    SELECT_APT(state, apt) {
      state.apt = apt;
    },
    GET_NOTICE_LIST(state, notices) {
      state.notices = notices;
      console.log(state.notices);
    },
    SELECT_NOTICE(state, notice) {
      state.notice = notice;
      console.log(state.notice);
    },
    GET_QNA_LIST(state, qnas) {
      // console.log(state, apts);
      state.qnas = qnas;
    },
    SELECT_QNA(state, qna) {
      state.qna = qna;
    },
  },
  actions: {
    getAptList({ commit }, dongCode) {
      // vue cli enviroment variables 검색
      //.env.local file 생성.
      // 반드시 VUE_APP으로 시작해야 한다.
      // const SERVICE_KEY = process.env.VUE_APP_APT_DEAL_API_KEY;
      const SERVICE_KEY =
        'WwGVICRXMrx5p0RsEfAnrfXd%2BQwJof2ID0Pyh%2BFUVEk4hUOgu0YuokHu%2FxdPqN4raBdp5npL73G%2BQSoXCZy8%2BA%3D%3D';

      const SERVICE_URL =
        'http://openapi.molit.go.kr/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcAptTradeDev';

      const params = {
        LAWD_CD: dongCode,
        DEAL_YMD: '202010',
        serviceKey: decodeURIComponent(SERVICE_KEY),
      };

      // npm install --save axios
      axios
        .get(SERVICE_URL, {
          params,
        })
        .then((response) => {
          console.log(response);
          commit('GET_APT_LIST', response.data.response.body.items.item);
        })
        .catch((error) => {
          console.dir(error);
        });
    },
    selectApt({ commit }, apt) {
      commit('SELECT_APT', apt);
    },
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
