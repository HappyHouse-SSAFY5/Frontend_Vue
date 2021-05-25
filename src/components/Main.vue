<template>
  <v-container>
    <v-row class="apt-search">
      <v-col cols="6" >
        <div class="border-box">
          <v-col></v-col>
          <v-col></v-col>
          <v-col></v-col>
          <v-col></v-col>
          <v-col></v-col>
          <v-col style="text-align: right; color: white;font-size: 18px;" class="roboto-bold">Apartment Search</v-col>
          <v-col style="background-color:white; text-align: left;" class="roboto-bold">서울특별시의 아파트 매매 정보 검색</v-col>
          <v-col style="background-color:white;"></v-col>
          <v-col style="background-color:white;"></v-col>
          <v-col style="background-color:white;"></v-col>
        </div>
      </v-col>
      <v-col cols="6" >
        <div>
          <v-col></v-col>
          <v-col></v-col>
          <v-col></v-col>
          <v-col></v-col>
          <v-col></v-col>
          <v-col></v-col>
          <v-col></v-col>
          <v-col v-if="username" style="text-align: right; color: white;" class="roboto-bold">
            <p style="font-size: 36px;">{{username}}님, 어서오세요!<br></p>
            <p style="font-size: 20px;">오늘은 어떤 집이 {{username}}님을 기다리고 있을까요?</p>
          </v-col>
          <v-col v-else style="text-align: right; color: white;font-size: 18px;" class="roboto-bold">
            <p style="font-size: 36px;">안녕하세요!</p>
            <p style="font-size: 20px;">우리가 행복한 집, Happy House 입니다.</p>
          </v-col>
        </div>
      </v-col>
    </v-row>
    <v-row class="notice">
      <v-col cols="12">
        <div class="border-box">
          <v-col style="background-color:white; text-align: left;" class="roboto-bold">공지사항을 확인하세요</v-col>
          <v-col style="background-color:white;"></v-col>
          <v-col style="background-color:white;"></v-col>
          <v-col style="text-align: right; color: white; font-size:36px;" class="roboto-bold">Notice</v-col>
          <v-col></v-col>
          <v-col></v-col>
          <v-col></v-col>
          <v-col></v-col>
          <v-col></v-col>
        </div>
      </v-col>
    </v-row>
    <v-row class="qna">
      <v-col cols="6">
        <div class="border-box">
          <v-col style="background-color:white; text-align: left;" class="roboto-bold">궁금한 점이 있으신가요?</v-col>
          <v-col style="background-color:white;"></v-col>
          <v-col style="background-color:white;"></v-col>
          <v-col style="text-align: right; color: white; font-size:36px;" class="roboto-bold">QNA</v-col>
          <v-col></v-col>
          <v-col></v-col>
          <v-col></v-col>
          <v-col></v-col>
          <v-col></v-col>
        </div>
      </v-col>
      <v-col cols="6">
        <div class="border-box">
          <v-col></v-col>
          <v-col></v-col>
          <v-col></v-col>
          <v-col></v-col>
          <v-col></v-col>
          <v-col style="text-align: right; color: white;font-size: 18px;" class="roboto-bold">Join Us, Right now!</v-col>
          <v-col style="background-color:white; text-align: left;" class="roboto-bold">회원가입</v-col>
          <v-col style="background-color:white;"></v-col>
          <v-col style="background-color:white;"></v-col>
          <v-col style="background-color:white;"></v-col>
        </div>
      </v-col>
    </v-row>
  </v-container>
  <!-- <div class="container">
    <div class="item1">최고의 지역을 추천해드립니다!!!!</div>
    <div class="item2">공지사항</div>
    <div class="item3">아파트 매매 정보</div>
    <div class="item4">QNA</div>
  </div> -->
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'Main',
  computed: {
    ...mapGetters({
      username: 'getUsername'
    })
  },
};
</script>

<style scoped>
.border-box{
  border: 8px solid white;
  height: 300px;
}
.roboto-bold{
  font-family: 'Roboto';
  font-weight: 800;
  font-size: 16px;
  color: black;
}
.apt-search{
  background-color: #1A237E;
}
.notice{
  background-color: #0D47A1;
}
.qna{
  background-color: #01579B;
}
/* .container {
  display: grid;
  margin-top: 3%;
  grid-gap: 10px;
  height: 100vh;
  grid-template-columns: 300px 1fr 300px;
  grid-template-rows: 300px 250px;
  grid-template-areas:
    'item1 item1 item1'
    'item2 item3 item4';
}
.item1, .item2, .item3, .item4 {
  border-radius: 2em;
  background-color: antiquewhite;
  border: 0px;
  font-family: 'nanum';
  padding: 20px;
  display: grid;
  justify-items: center;
  align-items: center;
}
.item1 {
  grid-area: item1;
}
.item2 {
  grid-area: item2;
}
.item3 {
  grid-area: item3;
}
.item4 {
  grid-area: item4;
} */
</style>
