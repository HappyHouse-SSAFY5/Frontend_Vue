<template>
  <v-app>
    <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="id"
              :rules="nameRules"
              :counter="50"
              label="아이디"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              type="password"
              v-model="pw"
              :rules="pwRules"
              :counter="50"
              label="비밀번호"
              required
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
      <v-btn :disabled="!valid" color="success" class="mr-4" @click="submit">
        Login
      </v-btn>
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
    moveHome() {
      this.$router.push({
        name: 'Home',
      });
    },
  },
};
</script>

<style></style>
