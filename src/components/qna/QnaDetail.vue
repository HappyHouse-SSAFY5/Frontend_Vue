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
    <b-row>
      <b-col>
        <b-button variant="outline-warning" router-link :to="`/qna/modify/${qna.id}`"
          >수정</b-button
        >
        <b-button variant="outline-danger" @click="deleteQna">삭제</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import http from '@/util/http-common';

import { mapState } from 'vuex';

export default {
  name: 'QnaDetail',
  computed: {
    ...mapState(['qna']),
  },
  methods: {
    deleteQna() {
      http
        .delete(`http://localhost:8080/happyhouse/qna/delete/${this.qna.id}`, {
          id: this.qna.id,
        })
        .then(() => {
          alert('삭제가 완료되었습니다.');
          // delete - 자동 새로고침하게 하기
          this.moveList(); 
        });
    },
    moveList() {
      this.$router.push('/qna');
    },
  },
};
</script>

<style></style>
