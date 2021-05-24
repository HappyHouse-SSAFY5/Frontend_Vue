<template>
  <div class="card col-lg-12" align="center">
    <h2>공지사항 등록</h2>
    <div>
      <div class="form-group" align="left">
        <label for="subject">제목:</label>
        <input type="text" class="form-control" id="subject" name="subject" v-model="subject" ref="subject" />
      </div>
      <div class="form-group" align="left">
        <label for="content">내용:</label>
        <textarea class="form-control" rows="15" id="content" name="content" v-model="content" ref="content"></textarea>
      </div>
      <button class="btn btn-primary" @click="addNotice">등록</button>
    </div>
  </div>
</template>

<script>
import http from '@/util/http-common';
import { mapGetters } from 'vuex';

export default {
  name: 'NoticeForm',
   computed: {
    ...mapGetters({
      loginUserId: 'getUserid',
    }),
  },
  data() {
    return {
      subject: '',
      content: '',
    };
  },
  methods: {
    addNotice() {
      console.log(this.loginUserId);
      http
        .post('/article/write', {
          subject: this.subject,
          userid: this.loginUserId,
          content: this.content,
        })
        .then(({ data }) => {
          console.log(data);
          alert('등록이 완료되었습니다.');
          this.moveList();
        })
        .catch(() => {
          alert('등록 처리시 에러가 발생했습니다.');
        });
    },
    moveList() {
      this.$router.push('/notice/list');
    },
  },
};
</script>

<style>
.card {
  background-color: #EDE7F6;
}
h2 {
  color: #9FA8DA;
}
.btn {
  border: solid 1px #9FA8DA;
  background-color: #EDE7F6;
  color: 9FA8DA;
}
</style>
