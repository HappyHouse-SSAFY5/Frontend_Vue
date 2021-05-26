<template>
  <v-row class="noticelist">
    <v-col cols="10">
      <h2>Notice</h2>
      <p class="subtitle"> 아아 알립니다 <v-icon color="indigo darken-4">mdi-thought-bubble</v-icon></p>
    </v-col>
    <v-col cols="2" v-if="loginUserId === 'admin'">
      <v-btn color="black" @click="moveForm" outlined>
        공지사항 쓰러가기
      </v-btn>
    </v-col>
    <v-expansion-panels popout style="margin-bottom: 30px">
      <v-expansion-panel v-for="(notice, i) in notices" :key="i" :notice="notice">
        <v-expansion-panel-header color="indigo darken-2"
          ><span class="qna-text">{{ notice.subject }}</span
          ><span class="mid qna-text">{{ notice.userid }}</span
          ><span class="qna-text">{{ notice.regtime }}</span>
        </v-expansion-panel-header>
        <v-expansion-panel-content
          style="padding: 40px 28px 0 28px"
        ><div v-html="notice.content"></div>
          <v-btn 
            color="indigo"
            v-if="loginUserId === notice.userid"
            router-link
            dark
            :to="`/notice/modify/${notice.articleno}`"
            style="float: right; margin: 16px 0;"
            >수정 / 삭제
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
  name: 'NoticeList',
  computed: {
    ...mapGetters({
      loginUserId: 'getUserid',
    }),
  },
  data() {
    return {
      notices: [],
    };
  },
  components: {},
  created() {
    http
      .get('/article/list')
      .then(({ data }) => {
        this.notices = data;
      })
      .catch(() => {
        alert('에러가 발생했습니다.');
      });
  },
  methods: {
    moveForm() {
      this.$router.push('/notice/regist');
    },
  },
};
</script>

<style scoped>
.noticelist {
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
span{
  width: 33%;
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
