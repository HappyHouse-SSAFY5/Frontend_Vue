<template>
  <v-row class="qnalist" justify="center">
    <b-col>
      <h2>Q&amp;A</h2>
    </b-col>
    <b-button id="btn" variant="outline-primary" @click="moveForm">등록</b-button>
    <v-expansion-panels popout style="margin-bottom: 30px">
      <v-expansion-panel v-for="(qna, i) in qnas" :key="i" :qna="qna">
        <v-expansion-panel-header
          ><span>{{ qna.title }}</span
          ><span class="mid">{{ qna.userid }}</span>
        </v-expansion-panel-header>
        <v-expansion-panel-content
          ><div v-html="qna.content"></div>
          <b-col>
            <b-button
              id="btn2"
              v-if="loginUserId === qna.userid"
              variant="outline-warning"
              router-link
              :to="`/qna/modify/${qna.id}`"
              >수정 / 삭제
            </b-button>
          </b-col>
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
  background-color: #B39DDB;
  margin-top: 15px;
}
h2 {
  margin-bottom: 50px;
  color: white;
}
#btn {
  margin-left: 1130px;
  margin-bottom: 10px;
  border: 1px solid white;
  color: white;
}
.mid {
  margin-left: 20px;
  margin-right: 20px;
}
#btn2 {
  border: 1px solid #d1c4e9;
  color: black;
}
span {
  width: 50%;
}
</style>
