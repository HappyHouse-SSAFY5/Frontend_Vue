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
</style>
