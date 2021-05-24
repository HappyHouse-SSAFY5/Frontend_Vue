<template>
  <div class="regist">
    <h1 class="underline">QNA 수정</h1>
    <div class="regist_form">
      <label for="title">글 제목</label>
      <input type="text" id="title" name="title" v-model="title" ref="title" /><br />
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
      <button @click="modifyQna">수정</button>
      <button @click="moveList">목록</button>
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
    http.get(`http://localhost:8080/happyhouse/qna/detail/${this.$route.params.id}`).then(({data}) => {
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
        .put(`http://localhost:8080/happyhouse/qna/modify`, {
          id: this.id,
          userid: this.userid,
          title: this.title,
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

      // const qnaItem = {
      //   title: this.title,
      //   content: this.content,
      // };
      // if(this.qnaTitle)
      //   this.$store.dispatch('addQna', qnaItem);
      // //  this.$store.commit('ADD_TODO', todoItem);
      // // this.$store.state.todos.push(todoItem);
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
  color: #787878;
  font-size: medium;
}
button,
.btn {
  width: 8%;
  background-color: #d0d3d0;
  color: rgb(80, 82, 79);
  padding: 14px 20px;
  margin: 8px 0;
  border: 1px solid #787878;
  border-radius: 4px;
  font-size: large;
  cursor: pointer;
}
.regist {
  padding: 10px;
}
.regist_form {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
.underline {
  display: inline-block;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 70%, cyan 30%);
}
</style>
