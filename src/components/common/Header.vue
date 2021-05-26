<template>
  <div id="header">
    <v-bottom-navigation :value="value" horizontal height="100px">
      <div class="row" style="background-color:#1A237E;">
        <div class="col-sm-5">
          <router-link to="/">
            <img src="@/assets/logo.png" class="logo" />
          </router-link>
        </div>
        <!-- 로그인 했을 때 -->
        <div class="col-sm-7" v-if="isAuth" 
          style="
            display: flex;
            justify-content: center;
            height: -webkit-fill-available;
        ">
          <v-btn class="nav-text">
            <router-link to="/vuetest/apt" class="roboto-bold">Apt Info</router-link>
          </v-btn>
           <v-btn class="nav-text">
            <router-link to="/notice" class="roboto-bold">Notice</router-link>
          </v-btn>
          <v-btn class="nav-text">
            <router-link to="/qna" class="roboto-bold">Q&A</router-link>
          </v-btn>
          <v-btn class="nav-text">
            <router-link to="/vuetest/about" class="roboto-bold">About</router-link>
          </v-btn>
          <v-btn class="nav-text">
            <span @click="clicklogout" class="roboto-bold">Logout</span>
          </v-btn>
          <v-btn class="nav-text">
            <router-link to="/mypage" class="roboto-bold">My page</router-link>
          </v-btn>
        </div>
        <!-- 로그인 안했을 때 -->
        <div class="col-sm-7" v-else style="display: flex; justify-content: center; height: -webkit-fill-available;">
          <v-btn class="nav-text">
            <router-link to="/login" class="roboto-bold">Log in</router-link>
          </v-btn>
          <v-btn class="nav-text">
            <router-link to="/signup" class="roboto-bold">Sign up</router-link>
          </v-btn>
        </div>
      </div>
    </v-bottom-navigation>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  data: () => ({ 
    value: 1 
  }),
  methods:{
    ...mapActions(['logout']),
    async clicklogout(){
      try {
          await this.logout();
      } catch (error) {
          console.log(error);
      }
    }
  },
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
  width: 180px;
  height: 150px;
  padding-bottom: 30px;
}
.roboto-bold{
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 20px;
  color: white;
}

.nav-text:hover{
  text-shadow: 0 0 8px #E0F7FA;
}

.roboto-bold:hover{
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 20px;
  color: white;
  text-decoration: none;
  
}
</style>
