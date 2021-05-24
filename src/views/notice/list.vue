<template>
  <div>
    <b-row>
      <notice-list />
    </b-row>
  </div>
</template>

<script>
import NoticeList from '@/components/notice/NoticeList.vue';

export default {
  name: 'NoticeListAndDetail',
  components: {
    NoticeList,
  },
};
</script>

<style></style>
