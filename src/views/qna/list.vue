<template>
  <div>
    <b-row>
      <qna-list />
    </b-row>
  </div>
</template>

<script>
import QnaList from '@/components/qna/QnaList.vue';


export default {
  name: 'QnaListAndDetail',
  components: {
    QnaList,
  },
};
</script>

<style></style>
