import http from '@/util/http-common';

const getPickedHousedealIdx = (userid) => {
    return http
        .get("/pick/housedeal/" + userid)
}

const getAptsInfo = (dong) => {
    return http
        .post("/search/dong", {
            key: "dong",
            word: dong,
        })
}

export default {
    async getAptInfo({ dong, userid }) {
        try {
            const getAptsInofPromise = await getAptsInfo(dong);
            const getPickedHousedealIdxPromise = await getPickedHousedealIdx(userid);
            const mingled = getAptsInofPromise.data.map(apt => {
                const newapt = apt;
                if (getPickedHousedealIdxPromise.data.includes(apt.housedeal_no)) {
                    newapt["picked"] = true;
                }
                return newapt;
            })
            return mingled;
        } catch (error) {
            console.log(error);
        }
    }
}
