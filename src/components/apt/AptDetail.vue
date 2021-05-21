<template>
  <b-container v-if="apt.rnum" class="bv-example-row">
    <google-map :apt="apt"></google-map>
    <b-row>
      <b-col>
        <h3>{{ apt.aptName }}</h3>
      </b-col>
    </b-row>
    <b-row class="mb-2 mt-1">
      <b-col><img src="@/assets/apt.png" alt=""/></b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-alert show variant="primary">아파트 이름 : {{ apt.aptName }}</b-alert>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-alert show variant="info">법정동 : {{ apt.dong }}</b-alert>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-alert show variant="warning">층수 : {{ apt.floor }}층</b-alert>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-alert show variant="danger"
          >거래금액 : {{ (apt.dealAmount.replace(',', '') * 10000) | price }}원</b-alert
        >
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters } from 'vuex';
import GoogleMap from './GoogleMap.vue';

export default {
  name: 'AptDetail',
  components:{
    GoogleMap,
  },
  data(){
    return{
      
    }
  },
  computed: {
      ...mapGetters({
        apt: 'getApt'
      })
  },
  filters: {
    price(value) {
      if (!value) return value;
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },
  },
};
</script>

<style></style>
