import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
// import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    apts: [],
    apt: Object,
    qnas: [],
    qna: Object,
  },
  mutations: {
    GET_APT_LIST(state, apts) {
      // console.log(state, apts);
      state.apts = apts;
    },
    SELECT_APT(state, apt) {
      state.apt = apt;
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
          console.log("hello");
          console.log(response);
          // console.log(response.data.response.body.items.item);
          commit('GET_APT_LIST', response.data.response.body.items.item);
        })
        .catch((error) => {
          console.dir(error);
        });
    },
    selectApt({ commit }, apt) {
      commit('SELECT_APT', apt);
    },
    // getQnaList({ commit }, title) {
    //   console.log(title);
    //   axios
    //     .get(`/qna/list?key=title&word=${title}`) 
    //     .then((response) => {
    //       // console.log(response.data.response.body.items.item);
    //       console.log(response);
    //       commit('GET_QNA_LIST', response.data.response.body.items.item);
    //     })
    //     .catch((error) => {
    //       console.dir(error);
    //     });
    // },
    selectQna({ commit }, qna) {
      commit('SELECT_QNA', qna);
    },
  },
  modules: {},
  // plugins: [createPersistedState()],
});
