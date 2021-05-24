<template>
    <v-navigation-drawer
      v-if="apt.rnum"
      width="925"
      v-model="drawer"
      absolute
      temporary
    >
    <div class="close-btn">
      <v-btn
        color="deep-purple lighten-2"
        dark
        sticky
        @click="toggleByBtnInside"
      >
        Close
      </v-btn>
    </div>
    
    <v-container>
      <v-row no-gutters>
        <!-- apt name -->
        <v-col cols="12" align="left">
          <h2>{{ apt.aptName }}</h2>
        </v-col>
        
        <v-col cols="12">
            <google-map :apt="apt" class="inner-card"></google-map>
        </v-col>
        
        <!-- apt details -->
        <detail-list :apt="apt" />
        
        <!-- Buffer -->
        <v-col cols="1"></v-col>
      
        <!-- map and more info -->
        <v-col cols="5" class="inner-card">
          <near-info />
        </v-col>
      </v-row>
    </v-container>
    </v-navigation-drawer>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import GoogleMap from './GoogleMap.vue';
import DetailList from './AptDetailList.vue';
import NearInfo from './NearInfo.vue';

export default {
  name: 'AptDetail',
  components:{
    GoogleMap,
    DetailList,
    NearInfo,
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

<style>
.close-btn{
  float: right;
  margin: 10px;
}
.inner-card{
  margin: auto;
}
</style>
