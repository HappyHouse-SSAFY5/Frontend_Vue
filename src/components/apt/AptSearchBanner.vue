<template>
  <v-alert 
    v-if="dong" 
    color="blue darken-4"
    dense 
    type="success"
    width="50%"
    style="margin:auto; margin-top:24px;"
  >
    {{dong}}에 대한 검색 결과입니다.
  </v-alert>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'SearchBanner',
  computed: {
    ...mapGetters({
      dong: 'getSearchedDong'
    })
  },
}
</script>

<style>

</style>