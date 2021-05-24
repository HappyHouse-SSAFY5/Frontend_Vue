<template>
  <b-row class="mt-4 mb-4">
    <b-col class="sm-3" align="left">
      <b-button variant="outline-primary" @click="moveForm">QNA 등록</b-button>
    </b-col>
  </b-row>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'SearchBar',
  data() {
    return {
      title: '',
    };
  },
  methods: {
    ...mapActions(['getQnaList']),
    sendKeyword() {
      // 다시 하기
      // this.$emit('send-keyword', this.dongCode);
      
      // if (this.title) this.getQnaList(this.title);
      // // this.$store.dispatch('getAptList', this.dongCode);
      // this.title = '';
    },
    moveForm() {
      this.$router.push('/qna/regist');
    }
  },
};
</script>

<style></style>
