<template>
  <b-container class="bv-example-row">
    <b-row>
      <b-col>
        <h2>QNA</h2>
      </b-col>
    </b-row>
    <!-- <qna-list-and-detail /> -->
    <router-view />
  </b-container>
</template>

<script>
// import QnaListAndDetail from '@/views/qna/list.vue';

export default {
  name: 'Qna',
  // components: {
  //   QnaListAndDetail,
  // },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped></style>
