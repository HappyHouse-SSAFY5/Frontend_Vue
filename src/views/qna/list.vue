<template>
  <div>
    <qna-search-bar />
    <b-row>
      <b-col cols="6" align="left">
        <qna-list />
      </b-col>
      <b-col cols="6">
        <qna-detail />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import QnaSearchBar from '@/components/qna/QnaSearchBar.vue';
import QnaList from '@/components/qna/QnaList.vue';
import QnaDetail from '@/components/qna/QnaDetail.vue';

export default {
  name: 'QnaListAndDetail',
  components: {
    QnaSearchBar,
    QnaList,
    QnaDetail,
  },
};
</script>

<style></style>
