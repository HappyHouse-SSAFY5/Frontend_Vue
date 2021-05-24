<template>
  <v-alert v-if="dong" type="success">
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