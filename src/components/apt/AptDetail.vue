<template>
    <v-navigation-drawer
      v-if="apt.rnum"
      width="1000"
      v-model="drawer"
      absolute
      temporary
    >
      <v-btn
        color="deep-purple lighten-2"
        dark
        @click="toggleByBtnInside"
      >
        Close
      </v-btn>
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
    </v-navigation-drawer>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import GoogleMap from './GoogleMap.vue';

export default {
  name: 'AptDetail',
  components:{
    GoogleMap,
  },
  data(){
    return{}
  },
  computed: {
      ...mapGetters({
        apt: 'getApt',
        drawer:'getDrawer'
      })
  },
  filters: {
    price(value) {
      if (!value) return value;
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },
  },
  methods: {
    ...mapActions(['toggleDrawerByBtn']),
    toggleByBtnInside(){
      this.toggleDrawerByBtn();
    }
  },
};
</script>

<style></style>
