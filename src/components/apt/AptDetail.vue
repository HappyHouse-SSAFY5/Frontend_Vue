<template>
    <v-navigation-drawer
      v-if="apt.rnum"
      width="950"
      v-model="drawer"
      absolute
      temporary
    >
    
    <v-container>
      <v-row>
        <!-- apt name -->
        <v-col cols="10" align="left">
          <v-alert
            border="bottom"
            color="indigo darken-4"
            dark
            style="margin:0px;"
          >
            <h4>{{ apt.aptName }}</h4>
          </v-alert>
        </v-col>
        <v-col 
          cols="1" 
          style="display: flex; align-items: center;"
        >
          <v-btn
            class="mx-2"
            fab
            dark
            small
            color="indigo darken-3"
            style="margin:auto;"
            @click="pick"
          >
            <v-icon dark>
              mdi-heart
            </v-icon>
          </v-btn>
        </v-col>
        <v-col cols="1" style="display: flex; align-items: center;">
            <v-btn
              class="mx-2"
              fab
              dark
              small
              color="indigo darken-3"
              style="margin:auto;"
              @click="toggleByBtnInside"
            >
              <v-icon>mdi-close-thick</v-icon>
            </v-btn>
        </v-col>
        
        <!-- apt details -->
        <detail-list :apt="apt"/>
        
        <v-col cols="9">
            <google-map :apt="apt"></google-map>
        </v-col>
      
        <!-- map and more info -->
        <v-col cols="7" class="padding-top-16">
          <near-store :apt="apt" />
        </v-col>
        <v-col cols="5" class="padding-top-16">
          <near-air-condition />
        </v-col>
      </v-row>
    </v-container>
    </v-navigation-drawer>
</template>

<script>
import http from '@/util/http-common';
import { mapActions, mapGetters } from 'vuex';
import GoogleMap from './GoogleMap.vue';
import DetailList from './AptDetailList.vue';
import NearStore from './NearStore.vue';
import NearAirCondition from './AirCondition.vue';

export default {
  name: 'AptDetail',
  components:{
    GoogleMap,
    DetailList,
    NearStore,
    NearAirCondition,
  },
  data(){
    return{}
  },
  computed: {
      ...mapGetters({
        apt: 'getApt',
        drawer:'getDrawer',
        userid: 'getUserid'
      })
  },
  methods: {
    ...mapActions(['toggleDrawerByBtn', 'drawMarker']),
    toggleByBtnInside(){
      this.toggleDrawerByBtn();
      this.drawMarker(null);
    },
    pick(){
      http
        .post('/pick',{
          user_id: this.userid,
          housedeal_id: this.apt.housedeal_no
        })
        .then(data =>{
          console.log(data);
        })
        .catch(error=>{
          console.log(error);
        });
    }
  },
};
</script>

<style>
.close-btn{
  float: right;
  margin: auto;
}
.padding-top-16{
  padding-top: 16px;
}
</style>
