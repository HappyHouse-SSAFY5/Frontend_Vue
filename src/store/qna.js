const state = {
  qnas: [],
  qna: Object,
};
const mutations = {
  GET_QNA_LIST(state, qnas) {
    state.qnas = qnas;
  },
  SELECT_QNA(state, qna) {
    state.qna = qna;
  },
};

const actions = {
  selectQna({ commit }, qna) {
    commit('SELECT_QNA', qna);
  },
};

export default {
  state,
  mutations,
  actions,
};
