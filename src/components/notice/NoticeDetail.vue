<!--<template>
  <b-container v-if="notice.articleno" class="bv-example-row">
    <b-row>
      <b-col
        ><h3>{{ notice.subject }}</h3></b-col
      >
    </b-row>
    <b-row>
      <b-col>
        <b-alert show variant="secondary">글 번호 : {{ notice.articleno }}</b-alert>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-alert show variant="warning">글쓴이 : {{ notice.userid }}</b-alert>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-alert show variant="primary">글 제목 : {{ notice.subject }}</b-alert>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-alert show variant="info">글 내용 : {{ notice.content }}</b-alert>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-button v-if="loginUserId === notice.userid" variant="outline-warning" router-link :to="`/notice/modify/${notice.articleno}`"
          >수정</b-button
        >
        <b-button variant="outline-danger" @click="deleteNotice">삭제</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import http from '@/util/http-common';
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'NoticeDetail',
  computed: {
    ...mapState(['notice']),
    ...mapGetters({
      loginUserId: 'getUserid',
    }),
  },
  methods: {
    deleteNotice() {
      http
        .delete(`/article/delete/${this.notice.articleno}`, {
          articleno: this.notice.articleno,
        })
        .then(() => {
          alert('삭제가 완료되었습니다.');
          // delete - 자동 새로고침하게 하기
          this.moveList();
        });
    },
    moveList() {
      this.$router.push('/notice');
    },
  },
};
</script>

<style></style> -->
