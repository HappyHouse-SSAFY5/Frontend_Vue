<template>
  <v-toolbar
    dark
    color="teal"
  >
    <v-toolbar-title>아파트 매매 기록 검색</v-toolbar-title>
    <v-autocomplete
      v-model="select"
      :loading="loading"
      :items="items"
      :search-input.sync="search"
      cache-items
      class="mx-4"
      flat
      hide-no-data
      hide-details
      label="서울 시의 어느 동을 알아볼까요?"
      solo-inverted
      v-model.trim="dong"
      @keypress.enter="sendKeyword"
    ></v-autocomplete>
    <v-btn icon @click="sendKeyword">
      <v-icon>mdi-database-search-outline</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
import { mapActions } from 'vuex';
import Dongs from '@/resource/dongname.json';
export default {
  name: 'SearchBar',
  data() {
    return {
      dong: '',
      loading: false,
      items: [],
      search: null,
      select: null,
      dongs: Dongs,
    };
  },
   watch: {
    search (val) {
      val && val !== this.select && this.querySelections(val)
    },
  },
  methods: {
    ...mapActions(['getAptList']),
    sendKeyword() {
      if (this.dong) this.getAptList(this.dong);
      this.dong = '';
    },
    querySelections (v) {
      this.loading = true
      setTimeout(() => {
        this.items = this.dongs.filter(e => {
          return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
        })
        this.loading = false
      }, 500)
    },
  },
};
</script>

<style></style>
