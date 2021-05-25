import loginAPI from '../components/login/js/loginAPI.js';

const state = {
    userid: '',
    username: '',
    errorState: '',
    isAuth: false,
    reloadAfterPick: "",
}
const getters = {
    getUserid: state => state.userid,
    getUsername: state => state.username,
    getErrorState: state => state.errorState,
    getIsAuth: state => state.isAuth,
    getAfterPick: state => state.reloadAfterPick,
}

const mutations = {
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
    },
    SET_DONG_AFTER_PICK(state, dong) {
      state.reloadAfterPick = dong;
    },
}

let handleLoginResponse = (store, loginResponse) => {
    if (loginResponse === 'noAuth') {
      store.commit('ERROR_STATE',"잘못된 정보입니다.");
      store.commit('IS_AUTH', false);
      return;
    }
    store.commit('USERID',loginResponse.userid);
    store.commit('USERNAME', loginResponse.username);
    store.commit('ERROR_STATE',null);
    store.commit('IS_AUTH', true);
}

const actions = {
    async login(store, { userid, pwd }) {
        let loginResponse = await loginAPI.login(userid, pwd);
        handleLoginResponse(store, loginResponse);
        return store.getters.getIsAuth;
    },
    async logout(store) {
        store.commit('IS_AUTH', false);
        store.commit('USERNAME', null);
        store.commit('ERROR_STATE', null);
        store.commit('USERID', null);
        return "You've logged out Successfully."
    },
    setDongAfterPick({ commit }, dong) {
        commit('SET_DONG_AFTER_PICK', dong);
    },
}

export default {
    state: {
      ...state
    },
    getters,
    mutations,
    actions
}
