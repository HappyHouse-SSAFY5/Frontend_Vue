<template>
  <v-app style="background-color: #1A237E; margin-top: 8px;">
    <v-form v-model="valid" style="margin: auto;">
      <div class="login">
        <v-container>
          <v-row class="loginBtn" style="text-align: left;">
            <v-col cols="12">
              <h3> 로그인 </h3> <h5> Login</h5>
            </v-col>
          </v-row>
          <v-row class="loginBtn">
            <v-col cols="12">
              <v-col></v-col> <v-col></v-col>
              <v-text-field v-model="id" :rules="nameRules" :counter="50" required>
                <template v-slot:label>
                  <label style="color: black;">ID</label>
                </template>
              </v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field type="password" v-model="pw" :rules="pwRules" :counter="50" required>
                <template v-slot:label>
                  <label style="color: black;">Password</label>
                </template></v-text-field
              >
            </v-col>
            <v-col></v-col>
            <v-col></v-col>
            <v-col></v-col>
            <v-col></v-col>
          </v-row>
        </v-container>
      </div>
      <div class="loginBtn">
        <v-col></v-col>
        <v-btn class="mr-5" style="background-color:#1A237E; color:white;" :disabled="!valid" @click="submit">
          Login
        </v-btn>
        <v-btn class="mr-3" style="background-color:#5C6BC0; color:white;" @click="findInfo">
          Find Password
        </v-btn>
        <v-col></v-col>
      </div>
      <v-col></v-col>
      <v-col></v-col>
      <v-col></v-col>
      <v-col></v-col>
    </v-form>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'LoginForm',
  data() {
    return {
      valid: true,
      modal: false,
      id: '',
      nameRules: [(v) => !!v || 'ID is required'],
      pw: '',
      pwRules: [(v) => !!v || 'PW is required'],
    };
  },
  methods: {
    ...mapActions(['login']),
    async submit() {
      try {
        let loginUserInfo = await this.login({ userid: this.id, pwd: this.pw });
        if (loginUserInfo) this.moveHome();
      } catch (error) {
        console.log(error);
      }
    },
    findInfo() {
      this.$router.push('/findinfo');
    },
    moveHome() {
      this.$router.push({
        name: 'Home',
      });
    },
  },
};
</script>

<style scoped>
.login {
  border: 10px solid white;
}
.loginBtn {
  background-color: white;
}
</style>
