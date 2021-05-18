<template>
  <b-container v-if="qna.id" class="bv-example-row">
    <b-row>
      <b-col
        ><h3>{{ qna.title }}</h3></b-col
      >
    </b-row>
    <!-- <b-row class="mb-2 mt-1">
      <b-col><img src="@/assets/apt.png" alt=""/></b-col>
    </b-row> -->
    <b-row>
      <b-col>
        <b-alert show variant="secondary">일련번호 : {{ qna.id }}</b-alert>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-alert show variant="warning">글쓴이 : {{ qna.userid }}</b-alert>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-alert show variant="primary">글 제목 : {{ qna.title }}</b-alert>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-alert show variant="info">글 내용 : {{ qna.content }}</b-alert>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'QnaDetail',
  computed: {
    ...mapState(['qna']),
  },
};
</script>

<style></style>
