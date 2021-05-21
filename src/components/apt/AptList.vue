<template>
  <v-app id="inspire" v-if="apts && apts.length != 0" class="bv-example-row mt-3">
    <apt-list-item v-for="(apt, index) in apts" :key="index" :apt="apt" />
  </v-app>
  <v-app id="inspire" v-else class="bv-example-row mt-3">
    <b-row>
      <b-col><b-alert show>아파트 목록이 없습니다.</b-alert></b-col>
    </b-row>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex';
import AptListItem from '@/components/apt/AptListItem.vue';
 
export default {
  name: 'AptList',
  components: {
    AptListItem,
  },
  computed: {
      ...mapGetters({
        apts: 'getApts'
      })
  },
};
</script>

<style></style>
