<template>
  <div class="regist">
    <h1 class="underline">QNA 수정</h1>
    <div class="regist_form">
      <label for="title">글 제목</label>
      <input type="text" id="qnaTitle" name="qnaTitle" v-model="qnaTitle" ref="qnaTitle" /><br />
      <label for="content">설명</label>
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
      <button @click="addQna">등록</button>
    </div>
  </div>
</template>

<!--
<template>
  <b-container v-if="qna.id" class="bv-example-row">
    <b-row>
      <b-col
        ><h3>{{ qna }}</h3></b-col
      >
    </b-row>
    <b-row>
      <b-col class="sm-3">
      <b-form-input
        v-model="qnaTitle"
        placeholder="글 제목"
      ></b-form-input>
    </b-row>
      <b-row>
      <b-col class="sm-3">
      <b-form-input
        v-model="qnaContent"
        placeholder="글 내용"
      ></b-form-input>
    </b-col>
    </b-row>
    <b-row>
      <b-col
      <b-button variant="outline-primary" @click="addForm">등록</b-button>
    </b-row>
  </b-container>
</template> -->

<script>

export default {
  name: 'QnaForm',
  data() {
    return {
      qnaTitle: '',
      content: '',
    };
  },
  methods: {
    addQna() {
      console.log('addQna call');
      const qnaItem = {
        qnaTitle: this.qnaTitle,
        content: this.content,
      };
      console.log(this.$store);
      if(this.qnaTitle)
        this.$store.dispatch('addQna', qnaItem);
      //  this.$store.commit('ADD_TODO', todoItem);
      // this.$store.state.todos.push(todoItem);
      this.qnaTitle = '';
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


