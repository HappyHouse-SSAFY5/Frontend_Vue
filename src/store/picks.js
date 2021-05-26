import pickAPI from '../components/mypage/js/pickAPI.js';

const state = {
  picks: [],
}
const getters = {
  getPick: state => state.picks,
}

const mutations = {
  MY_PICKS(state, picks) {
    state.picks = picks;
  },
}

const actions = {
  async getMyPicks({ commit }, userid) {
    let picksResponse = await pickAPI.getMyPicks(userid);
    commit('MY_PICKS', picksResponse);
    return "done"
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
