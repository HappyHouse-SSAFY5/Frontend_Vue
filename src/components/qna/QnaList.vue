<template>
  <v-row class="qnalist">
    <v-col cols="10">
      <h2>Q&amp;A</h2>
      <p class="subtitle"> 무슨 일이 일어나고 있나요? <v-icon color="indigo darken-4">mdi-thought-bubble</v-icon></p>
    </v-col>
    <v-col cols="2">
      <v-btn color="black" @click="moveForm" outlined>
        Q&A 쓰러가기
      </v-btn>
    </v-col>
    <v-expansion-panels popout style="margin-bottom: 30px">
      <v-expansion-panel v-for="(qna, i) in qnas" :key="i" :qna="qna">
        <v-expansion-panel-header color="indigo darken-2"
          ><span class="qna-text">{{ qna.title }}</span
          ><span class="mid qna-text">{{ qna.userid }}</span>
        </v-expansion-panel-header>
        <v-expansion-panel-content 
          style="padding: 40px 28px 0 28px"
        >
          <div v-html="qna.content"></div>
          <v-btn 
            color="indigo"
            v-if="loginUserId === qna.userid"
            router-link
            dark
            :to="`/qna/modify/${qna.id}`"
            style="float: right; margin: 16px 0;"
          >
            수정 / 삭제
          </v-btn>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-row>
</template>

<script>
import http from '@/util/http-common';
import { mapGetters } from 'vuex';

export default {
  name: 'QnaList',
  computed: {
    ...mapGetters({
      loginUserId: 'getUserid',
    }),
  },
  data() {
    return {
      qnas: [],
    };
  },
  created() {
    http
      .get('/qna/list')
      .then(({ data }) => {
        this.qnas = data;
        console.log(data);
      })
      .catch(() => {
        alert('에러가 발생했습니다.');
      });
  },
  methods: {
    moveForm() {
      this.$router.push('/qna/regist');
    },
  },
};
</script>

<style scoped>
.qnalist {
  background-color: white;
  padding: 60px 20px 20px 20px;
  margin: 200px;
  text-align: left;
  font-family: 'Roboto';
}
h2 {
  margin-bottom: 20px;
  color: black;
  font-weight: 800;
  text-align: left;
}
.mid {
  margin-left: 20px;
  margin-right: 20px;
}
span {
  width: 50%;
}
.subtitle{
  text-align: left;
  font-size: 20px;
  color: black;
  font-weight: lighter;
}
.qna-text{
  color: white;
  font-weight: 700;
}
</style>
