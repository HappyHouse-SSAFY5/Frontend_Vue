import axios from 'axios';
const state = {
  apts: [],
  apt: Object,
  drawer: false,
}
const getters = {
  getApt: state => state.apt,
  getApts: state => state.apts,
  getDrawer: state => state.drawer,
}

const mutations = {
  GET_APT_LIST(state, apts) {
      state.apts = apts;
      console.log("on mutation");
      console.log(state.apts);
  },
  SELECT_APT(state, apt) {
      state.apt = apt;
  },
  TOGGLE_DRAWER(state) {
    console.log(state.drawer);
    state.drawer = !state.drawer;
    console.log(state.drawer);
  },
}

const actions = {
  getAptList({ commit }, dong) {
    // vue cli enviroment variables 검색
    //.env.local file 생성.
    // 반드시 VUE_APP으로 시작해야 한다.
    // const SERVICE_KEY = process.env.VUE_APP_APT_DEAL_API_KEY;
    // const SERVICE_KEY =
    //   'WwGVICRXMrx5p0RsEfAnrfXd%2BQwJof2ID0Pyh%2BFUVEk4hUOgu0YuokHu%2FxdPqN4raBdp5npL73G%2BQSoXCZy8%2BA%3D%3D';

    // const SERVICE_URL =
    //   'http://openapi.molit.go.kr/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcAptTradeDev';

    // const params = {
      
    //   // DEAL_YMD: '202010',
    //   // serviceKey: decodeURIComponent(SERVICE_KEY),
    // };

    // npm install --save axios
    axios
      .post("http://localhost:8080/happyhouse/search/dong", {
        key: "dong",
        word: dong
      })
      .then((response) => {
        commit('GET_APT_LIST', response.data);
        commit('SELECT_APT', {});
      })
      .catch((error) => {
        console.dir(error);
      });
  },
  selectApt({ commit }, apt) {
    commit('SELECT_APT', apt);
  },
  toggleDrawer({ commit }) {
    commit('TOGGLE_DRAWER');
  },
  toggleDrawerByBtn({ commit }) {
    commit('TOGGLE_DRAWER');
  }
}

export default {
    state: {
      ...state
    },
    getters,
    mutations,
    actions
}
