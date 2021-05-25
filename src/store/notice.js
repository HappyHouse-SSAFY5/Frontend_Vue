const state = {
    notices: [],
    notice: Object,
}

const mutations = {
    GET_NOTICE_LIST(state, notices) {
        state.notices = notices;
        console.log(state.notices);
      },
      SELECT_NOTICE(state, notice) {
        state.notice = notice;
        console.log(state.notice);
      },
}

const actions = {
    selectNotice({ commit }, notice) {
        commit('SELECT_NOTICE', notice);
      },
}

export default {
    state,
    mutations,
    actions,
}