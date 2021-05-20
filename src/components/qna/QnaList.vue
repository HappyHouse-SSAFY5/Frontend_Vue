<template>
  <b-container v-if="qnas && qnas.length != 0" class="bv-example-row mt-3">
    <qna-list-item v-for="(qna, index) in qnas" :key="index" :qna="qna" />
  </b-container>
  <b-container v-else class="bv-example-row mt-3">
    <b-row>
      <b-col><b-alert show>QNA 목록이 없습니다.</b-alert></b-col>
    </b-row>
  </b-container>
</template>

<script>
// import { mapState } from 'vuex';
import QnaListItem from '@/components/qna/QnaListItem.vue';
import http from '@/util/http-common';

export default {
  name: 'QnaList',
  data() {
    return {
      qnas: [],
    };
  },
  components: {
    QnaListItem,
  },
  // computed: {
  //   ...mapState(['qnas']),
  // },
  created() {
    http
      .get('/qna/list')
      .then(({ data }) => {
        this.qnas = data;
        console.log(data);
      })
      .catch(() => {
        alert('에러가 발생했습니다.');
      });
  },
};
</script>

<style></style>
