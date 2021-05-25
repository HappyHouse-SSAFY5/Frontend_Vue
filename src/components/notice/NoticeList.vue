<template>
  <v-row class="noticelist" justify="center">
    <v-col>
      <h2>Notice</h2>
    </v-col>
    <b-button id="btn" variant="outline-primary" @click="moveForm">등록</b-button>
    <v-expansion-panels popout style="margin-bottom: 30px">
      <v-expansion-panel v-for="(notice, i) in notices" :key="i" :notice="notice">
        <v-expansion-panel-header
          ><span>{{ notice.subject }}</span
          ><span class="mid">{{ notice.userid }}</span
          ><span>{{ notice.regtime }}</span>
        </v-expansion-panel-header>
        <v-expansion-panel-content
          ><div v-html="notice.content"></div>
          <v-col>
            <b-button
              id="btn2"
              v-if="loginUserId === notice.userid"
              variant="outline-warning"
              router-link
              :to="`/notice/modify/${notice.articleno}`"
              >수정 / 삭제
            </b-button>
          </v-col>
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
        console.log(data);
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
  background-color: #7986CB;
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
#btn2 {
  border: 1px solid #d1c4e9;
  color: black;
}
span{
  width: 33%;
}
</style>
