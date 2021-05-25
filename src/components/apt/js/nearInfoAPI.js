import http from '@/util/http-common';
import axios from 'axios';

const getNearStore = (apt) => {
    return http
        .post(`/store/near`, {
            dong: apt.dong,
            lat: apt.lat,
            lng: apt.lng,
        })
}

const getRealTimeAirCondition = (gu) => {
    return axios.get('http://openAPI.seoul.go.kr:8088/4f61507942746d6433376d484b6951/json/RealtimeCityAir/1/5/도심권/'+gu);
}

export default {
    async getNearInfo(apt) {
        const gu = apt.code == "11110"?"종로구":"중구";
        try {
            const getNearStorePromise = await getNearStore(apt);
            const getAirConditionPromise = await getRealTimeAirCondition(gu);
            return {
                nearStore: getNearStorePromise.data,
                airCondition: getAirConditionPromise.data.RealtimeCityAir.row[0]
            };
        } catch (error) {
            console.log(error);
        }
    }
}
