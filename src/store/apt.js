import userBasedAptAPI from '../components/apt/js/userBasedAptAPI.js';
const state = {
  apts: [],
  apt: Object,
  drawer: false,
  searchedDong: '',
};
const getters = {
  getApt: (state) => state.apt,
  getApts: (state) => state.apts,
  getDrawer: (state) => state.drawer,
  getSearchedDong: (state) => state.searchedDong,
};

const mutations = {
  GET_APT_LIST(state, apts) {
    state.apts = apts;
  },
  SELECT_APT(state, apt) {
    state.apt = apt;
  },
  TOGGLE_DRAWER(state) {
    state.drawer = !state.drawer;
  },
  SET_SEARCHED_DONG(state, dong) {
    state.searchedDong = dong;
  },
}

const actions = {
  async getAptList({ commit }, { dong, userid }) {
    let aptResponse = await userBasedAptAPI.getAptInfo({ dong, userid });
    commit('GET_APT_LIST', aptResponse);
    console.log(aptResponse);
    commit('SELECT_APT', {});
    commit('SET_SEARCHED_DONG', dong);
    return "Done";
  },
  async selectApt({ commit }, apt) {
    commit('SELECT_APT', apt);
    return apt;
  },
  toggleDrawer({ commit }) {
    commit('TOGGLE_DRAWER');
  },
  toggleDrawerByBtn({ commit }) {
    commit('TOGGLE_DRAWER');
  },
  removeRemainApts({ commit }) {
    commit('GET_APT_LIST', []);
  },
}

export default {
  state: {
    ...state,
  },
  getters,
  mutations,
  actions,
};
