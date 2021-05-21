<template>
  <v-app id="inspire">
    <!-- <b-row>
      <b-col>
        <h2>아파트 매매 정보</h2>
      </b-col>
    </b-row> -->
    <v-sheet
      height="800"
      class="overflow-scroll"
      style="position: relative;"
    >
    <apt-search-bar />
    <v-container class="fill-height">
      <v-row
        align="center"
        justify="center"
      >
      <apt-list />
      </v-row>
    </v-container>
    
    <v-navigation-drawer
      width="800"
      v-model="drawer"
      absolute
      temporary
    >
      <v-btn
        color="pink"
        dark
        @click="toggleByBtnInside"
      >
        Toggle
      </v-btn>
      <apt-detail />
      <!-- <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>John Leider</v-list-item-title>
        </v-list-item-content>
      </v-list-item> -->

      <v-divider></v-divider>

      <!-- <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list> -->
    </v-navigation-drawer>
    </v-sheet>
    
    <!-- <b-row>
      <b-col cols="6" align="left">
        <apt-list />
      </b-col>
      <b-col cols="6">
        <apt-detail />
      </b-col>
    </b-row> -->
  </v-app>
</template>

<script>
import AptSearchBar from '@/components/apt/AptSearchBar.vue';
import AptList from '@/components/apt/AptList.vue';
import AptDetail from '@/components/apt/AptDetail.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Apt',
  components: {
    AptSearchBar,
    AptList,
    AptDetail,
  },
  data() {
    return {
    
    };
  },
  computed: {
      ...mapGetters({
        drawer:'getDrawer'
      })
  },
  methods: {
    ...mapActions(['toggleDrawerByBtn']),
    toggleByBtnInside(){
      this.toggleDrawerByBtn();
    }
  },
};
</script>

<style scoped></style>
