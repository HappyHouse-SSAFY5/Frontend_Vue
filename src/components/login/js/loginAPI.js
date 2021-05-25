import http from '@/util/http-common';

const getUserInfo = (id, pw) => {
    return http.post('/user/login', {
        userid: id,
        userpwd: pw,
    })
}

export default {
    async login(id, pw) {
        try {
            const getUserInfoPromise = await getUserInfo(id, pw);
            if (!getUserInfoPromise.data.userid) return 'noAuth';
            return getUserInfoPromise.data;
        } catch (error) {
            console.log(error);
        }
    }
}
