import nearInfoAPI from '../components/apt/js/nearInfoAPI.js';

const state = {
  stores: [],
  store: null,
  aircondition: null,
}
const getters = {
  getStores: state => state.stores,
  getClickedStore: state => state.store,
  getAirCondition: state => state.aircondition,
}

const mutations = {
  NEAR_STORE(state, stores) {
    state.stores = stores;
  },
  MARK_THIS_STORE(state, store) {
    state.store = store;
  },
  AIR_CONDITION(state, condition) {
    state.aircondition = condition;
  }
}

let handleNearStoreResponse = (commit, nearStoreResponse ) => {
  commit('NEAR_STORE', nearStoreResponse.nearStore);
  commit('AIR_CONDITION', nearStoreResponse.airCondition);
}

const actions = {
  async getNearInfo({ commit }, apt) {
    let nearStoreResponse = await nearInfoAPI.getNearInfo(apt);
    handleNearStoreResponse(commit, nearStoreResponse);
    return "Done"
  },
  drawMarker({ commit }, store) {
    commit('MARK_THIS_STORE', store);
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
