<template>
  <div id="header">
    <v-bottom-navigation :value="value" color="primary" horizontal>
      <div class="row">
        <div class="col-sm-2">
          <router-link to="/">
            <img src="@/assets/houselogo.png" class="logo" />
          </router-link>
        </div>
        <div class="col-sm-2"></div>
       
        <!-- 로그인 했을 때 -->
        <div class="col-sm-8" v-if="isAuth">
          <v-btn>
            <router-link to="/vuetest/apt">아파트정보</router-link>
            <v-icon>mdi-heart</v-icon>
          </v-btn>
          <v-btn>
            <router-link to="/qna">QNA</router-link>
            <v-icon>mdi-heart</v-icon>
          </v-btn>
          <v-btn>
            <router-link to="/vuetest/about">About</router-link>
            <v-icon>mdi-heart</v-icon>
          </v-btn>
          <v-btn>
            <span>logout</span>
            <v-icon>mdi-heart</v-icon>
          </v-btn>
          <v-btn>
            <span>mypage</span>
            <v-icon>mdi-heart</v-icon>
          </v-btn>
        </div>
        <!-- 로그인 안했을 때 -->
        <div class="col-sm-8" v-else>
          <v-btn>
            <router-link to="/login">Login</router-link>
            <v-icon>mdi-heart</v-icon>
          </v-btn>
          <v-btn>
            <span>Sign up</span>
            <v-icon>mdi-heart</v-icon>
          </v-btn>
        </div>
      </div>
    </v-bottom-navigation>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data: () => ({ value: 1 }),
  computed:{
      ...mapGetters({
        isAuth: 'getIsAuth'
      })
    }
};
</script>

<style>
.header_title {
  font-size: 30px;
  text-align: center;
}
.logo {
  width: 100px;
}
</style>
