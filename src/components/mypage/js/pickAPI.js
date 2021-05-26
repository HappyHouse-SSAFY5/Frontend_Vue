import http from '@/util/http-common';

const getMyPicks = (userid) => {
    return http
        .get("/pick/list/" + userid);
}

export default {
    async getMyPicks(userid) {
        try {
            const picksResponse = await getMyPicks(userid);
            return picksResponse.data;
        } catch (error) {
            console.error(error);
        }
    }
}