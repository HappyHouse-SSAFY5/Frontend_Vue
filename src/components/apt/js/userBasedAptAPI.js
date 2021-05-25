import http from '@/util/http-common';

const getPickedHousedelIdx = (userid) => {
    console.log("on getPickedHousedelIdx");
    console.log(userid);
    http
        .post("/pick/housedeal/" + userid);
    //   .then((response) => {
    //     commit('GET_APT_LIST', response.data);
    //     console.log(response.data);
    //     commit('SELECT_APT', {});
    //     commit('SET_SEARCHED_DONG', dong);
    //   })
    //   .catch((error) => {
    //     console.dir(error);
    //   });
}

const getAptsInfo = (dong) => {
    console.log("on getAptsInfo");
    console.log(dong);
    http
        .post("/search/dong", {
            key: "dong",
            word: dong,
        });
    //   .then((response) => {
    //     commit('GET_APT_LIST', response.data);
    //     console.log(response.data);
    //     commit('SELECT_APT', {});
    //     commit('SET_SEARCHED_DONG', dong);
    //   })
    //   .catch((error) => {
    //     console.dir(error);
    //   });
}

export default {
    async getAptInfo(dong, userid) {
        try {
            const getAptsInofPromise = await getAptsInfo(dong);
            const getPickedHousedelIdxPromise = await getPickedHousedelIdx(userid);
            console.log("onAPTAPI");
            console.log(getAptsInofPromise);
            console.log(getPickedHousedelIdxPromise);
            return getAptsInofPromise.data;
        } catch (error) {
            console.log(error);
        }
    }
}
