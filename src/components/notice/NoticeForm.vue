<template>
  <div class="regist">
    <h2>Regist Notice Form</h2>
    <div class="subtitle"> 얼른 널리 알리세요! <v-icon color="white">mdi-account-voice</v-icon> </div>
    <div class="regist_form">
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
      <v-btn color="indigo darken-3" dark @click="addNotice">SUBMIT</v-btn>
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
      http
        .post('/article/write', {
          subject: this.subject,
          userid: this.loginUserId,
          content: this.content,
        })
        .then(() => {
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
.regist {
  background-color: #1A237E;
  padding: 60px 20px 20px 20px;
  margin: 200px;
  text-align: left;
  font-family: 'Roboto';
}
.regist_form {
  padding: 20px;
  background-color: white;
}
h2 {
  color: white;
  margin-bottom: 20px;
}
.subtitle{
  text-align: right;
  font-size: 20px;
  color: white;
  font-weight: lighter;
}
</style>
