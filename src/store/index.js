import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
// import { LayoutPlugin } from 'bootstrap-vue';
import loginAPI from '../components/login/js/loginAPI.js';
// import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

let handleLoginResponse = (store, loginResponse) => {
  if (loginResponse === 'noAuth') {
    store.commit('ERROR_STATE',"잘못된 정보입니다.");
    store.commit('IS_AUTH', false);
    return;
  }
  store.commit('USERID',loginResponse.userid);
  store.commit('USERNAME',loginResponse.username);
  store.commit('IS_AUTH', true);
}

export default new Vuex.Store({
  state: {
    apts: [],
    apt: Object,
    userid: '',
    username: '',
    errorState: '',
    isAuth: false,
  },
  getters: {
    getUserid: state => state.userid,
    getUsername: state => state.username,
    getErrorState: state => state.errorState,
    getIsAuth: state => state.isAuth,
  },
  mutations: {
    GET_APT_LIST(state, apts) {
      state.apts = apts;
    },
    SELECT_APT(state, apt) {
      state.apt = apt;
    },
    USERID(state, userid) {
      state.userid = userid
    },
    USERNAME(state, username) {
      state.username = username
    },
    ERROR_STATE(state, errorState) {
      state.errorState = errorState
    },
    IS_AUTH(state, isAuth) {
      state.isAuth = isAuth
    }
  },
  actions: {
    async login(store, { userid, pwd }) {
      let loginResponse = await loginAPI.login(userid, pwd);
      handleLoginResponse(store, loginResponse);
      return store.getters.getIsAuth;
    },
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
  },
  modules: {},
  // plugins: [authState],
});
