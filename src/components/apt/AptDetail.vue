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
        <v-col cols="2">
            <v-btn
              height="100%"
              width="100%"
              class="close-btn"
              color="indigo"
              dark
              @click="toggleByBtnInside"
            >
              <v-icon left>mdi-close-circle-outline</v-icon>
              Close
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
        drawer:'getDrawer'
      })
  },
  methods: {
    ...mapActions(['toggleDrawerByBtn', 'drawMarker']),
    toggleByBtnInside(){
      this.toggleDrawerByBtn();
      this.drawMarker(null);
    },
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
