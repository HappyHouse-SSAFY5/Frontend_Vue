<template>
  <v-app id="inspire">
    <v-sheet
      height="1000"
      style="position: relative;"
    >
      <apt-search-bar />
      <apt-search-banner />
      <apt-list />
      <apt-detail />
    </v-sheet>
  </v-app>
</template>

<script>
import AptSearchBar from '@/components/apt/AptSearchBar.vue';
import AptList from '@/components/apt/AptList.vue';
import AptDetail from '@/components/apt/AptDetail.vue';
import AptSearchBanner from '@/components/apt/AptSearchBanner.vue';
import { mapActions } from 'vuex';
export default {
  name: 'Apt',
  components: {
    AptSearchBar,
    AptSearchBanner,
    AptList,
    AptDetail,
  },
  methods:{
    ...mapActions(['removeRemainApts']),
    removeRemainApts(){
      this.removeRemainApts();
    }
  },
};
</script>

<style scoped></style>
