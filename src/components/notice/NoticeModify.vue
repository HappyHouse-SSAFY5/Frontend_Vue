<template>
  <div class="modify">
    <h2>Modify Notice Form</h2>
    <div class="subtitle">정확한 정보를 기입해주세요<v-icon color="white">mdi-exclamation-thick</v-icon></div>
    <div class="modify_form">
      <div class="form-group" align="left">
        <label for="subject"><h6>TITLE</h6></label>
        <input type="text" id="subject" name="subject" v-model="subject" ref="subject" /><br />
      </div>
      <div class="form-group" align="left">
        <label for="content"><h6>CONTENT</h6></label>
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
      </div>
      <v-btn color="indigo darken-3" dark @click="modifyNotice">
        SUBMIT
      </v-btn>
      <v-btn color="primary" dark @click="deleteNotice">
        DELETE
      </v-btn>
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
    http.get(`/article/detail/${this.$route.params.articleno}`).then(({ data }) => {
      console.log(data);
      this.articleno = data.articleno;
      this.userid = data.userid;
      this.subject = data.subject;
      this.content = data.content;
    });
  },
  methods: {
    modifyNotice() {
      http
        .put(`/article/modify`, {
          articleno: this.articleno,
          userid: this.userid,
          subject: this.subject,
          content: this.content,
        })
        .then(() => {
          alert('수정이 완료되었습니다.');
          this.moveList();
        })
        .catch(() => {
          alert('수정 처리시 에러가 발생했습니다.');
        });
    },
    deleteNotice() {
      let check = confirm('정말로 삭제하시겠습니까?');
      if (check) {
        http
          .delete(`/article/delete/${this.$route.params.articleno}`, {
            articleno: this.$route.params.articleno,
          })
          .then(() => {
            alert('삭제가 완료되었습니다.');
            this.moveList();
          });
      }
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
  font-size: medium;
}
button,
.btn {
  color: 9fa8da;
  border: solid 1px black;
  border-radius: 4px;
  cursor: pointer;
  color: black;
  margin-right: 2px;
}
.modify {
  padding: 60px 20px 20px 20px;
  background-color: #1A237E;
  text-align: left;
  margin: 200px;
  font-family: 'Roboto';
}
.modify_form {
  padding: 20px;
  background-color: white;
}
h2 {
  color: white;
  margin-bottom: 20px;
  font-weight: 800;
  text-align: left;
}
.subtitle{
  text-align: right;
  font-size: 20px;
  color: white;
  font-weight: lighter;
}
</style>
