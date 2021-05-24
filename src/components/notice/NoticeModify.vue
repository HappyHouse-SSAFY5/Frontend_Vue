<template>
  <div class="regist">
    <h2>공지사항 수정</h2>
    <div class="regist_form">
      <label for="subject">제목</label>
      <input type="text" id="subject" name="subject" v-model="subject" ref="subject" /><br />
      <label for="content">내용</label>
      <br />
      <textarea
        id="content"
        name="content"
        v-model="content"
        ref="content"
        cols="35"
        rows="5"
      ></textarea
      ><br />
      <button class="btn btn-warning" @click="modifyNotice">수정</button>
      <button class="btn btn-danger" @click="deleteNotice">삭제</button>
    </div>
  </div>
</template>

<script>
import http from '@/util/http-common';

export default {
  name: 'NoticeModify',
  data() {
    return {
      subject: '',
      content: '',
    };
  },
  created() {
    http
      .get(`/article/detail/${this.$route.params.articleno}`)
      .then(({ data }) => {
        console.log(data);
        this.articleno = data.articleno;
        this.userid = data.userid;
        this.subject = data.subject;
        this.content = data.content;
      });
  },
  methods: {
    modifyNotice() {
      console.log('updateNotice call');

      http
        .put(`/article/modify`, {
          articleno: this.articleno,
          userid: this.userid,
          subject: this.subject,
          content: this.content,
        })
        .then(({ data }) => {
          //         let msg = '수정 처리시 문제가 발생했습니다.';
          //         if (data === 'success') {
          //           msg = '수정이 완료되었습니다.';
          //         }
          console.log(data);
          alert('수정이 완료되었습니다.');
          this.moveList();
        })
        .catch(() => {
          alert('수정 처리시 에러가 발생했습니다.');
        });
    },
        deleteNotice() {
      http
        .delete(`/article/delete/${this.$route.params.articleno}`, {
          articleno: this.$route.params.articleno,
        })
        .then(() => {
          alert('삭제가 완료되었습니다.');
          // delete - 자동 새로고침하게 하기
          this.moveList();
        });
    },
    moveList() {
      this.$router.push('/notice/list');
    },
  },
};
</script>

<style scoped>
input,
textarea,
.view {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  color: #787878;
  font-size: medium;
}
button,
.btn {
  background-color: #EDE7F6;
  color: 9FA8DA;
  padding: 14px 20px;
  margin: 8px 0;
  border: solid 1px #9FA8DA;
  border-radius: 4px;
  cursor: pointer;
  color: black;
}
.regist {
  padding: 10px;
}
.regist_form {
  border-radius: 5px;
  background-color: #EDE7F6;
  padding: 20px;
}
label {
  font: bold;
}
</style>
