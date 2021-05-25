<template>
  <div class="modify">
    <h2>Modify Q&amp;A Form</h2>
    <div class="modify_form">
      <div class="form-group" align="left">
        <label for="title"><h6>TITLE</h6></label>
        <input type="text" id="subject" name="title" v-model="title" ref="title" /><br />
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
      <button class="btn btn-default" @click="modifyQna">SUBMIT</button>
      <button class="btn btn-default" @click="deleteQna">DELETE</button>
    </div>
  </div>
</template>

<script>
import http from '@/util/http-common';

export default {
  name: 'QnaModify',
  data() {
    return {
      title: '',
      content: '',
    };
  },
  created() {
    http
      .get(`/qna/detail/${this.$route.params.id}`)
      .then(({ data }) => {
        console.log(data);
        this.id = data.id;
        this.userid = data.userid;
        this.title = data.title;
        this.content = data.content;
      });
  },
  methods: {
    modifyQna() {
      console.log('updateQna call');

      http
        .put(`/qna/modify`, {
          id: this.id,
          userid: this.userid,
          title: this.title,
          content: this.content,
        })
        .then(({ data }) => {
          console.log(data);
          alert('수정이 완료되었습니다.');
          this.moveList();
        })
        .catch(() => {
          alert('수정 처리시 에러가 발생했습니다.');
        });
    },
        deleteQna() {
      http
        .delete(`/qna/delete/${this.$route.params.id}`, {
         id: this.$route.params.id,
        })
        .then(() => {
          alert('삭제가 완료되었습니다.');
          this.moveList();
        });
    },
    moveList() {
      this.$router.push('/qna/list');
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
  padding: 10px;
  background-color: #B39DDB;
}
.modify_form {
  border-radius: 5px;
  padding: 20px;
  background-color: white;
}
h2 {
  color: white;
  margin-bottom: 20px;
}
</style>
