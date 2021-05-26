<template>
  <v-app style="background-color: #1A237E; margin-top: 8px;">
    <div>
      <v-form>
        <v-row>
          <v-col cols="6">
            <v-col></v-col> <v-col></v-col> <v-col></v-col>
            <div class="findpw" align="center">
              <h2 align="center">FIND PASSWORD</h2>
              <v-text-field v-model="id" :disabled="disabled == 1" required>
                <template v-slot:label>
                  <label style="margin-left: 3px;">ID</label>
                </template></v-text-field
              >
              <v-text-field v-model="name" :disabled="disabled == 1" required>
                <template v-slot:label>
                  <label style="margin-left: 3px;">Name</label>
                </template></v-text-field
              >
              <v-text-field v-model="email" :disabled="disabled == 1" required>
                <template v-slot:label>
                  <label style="margin-left: 3px;">Email</label>
                </template></v-text-field
              >
              <div class="btnFind">
                <v-col></v-col>
                <v-btn class="col-sm-3" id="btn" style="background-color:#1A237E; color:white;" align="center" @click="validate">
                  FIND
                </v-btn>
                <v-col></v-col>
              </div>
            </div>
          </v-col>
          <v-col cols="6">
            <v-col></v-col><v-col></v-col><v-col></v-col><v-col></v-col><v-col></v-col
            ><v-col></v-col><v-col></v-col><v-col></v-col>
            <div class="answer" v-if="ok != null">
              <div class="pass" v-if="password != '' && password != null">
                <h3>{{ name }}님의 비밀번호는 {{ password }}입니다.</h3>
                <br />
                <v-btn class="col-sm-2" @click="moveLogin">Login</v-btn>
              </div>
              <div class="pass" v-else-if="ok && (password === '' || password == null)">
                <h3>{{ name }}님의 회원 정보가 없습니다.</h3>
                <br />
                <v-btn class="col-sm-3" @click="moveSignUp">Sign Up</v-btn>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-form>
    </div>
  </v-app>
</template>

<script>
import http from '@/util/http-common';

export default {
  name: 'FindInfo',
  data() {
    return {
      id: '',
      name: '',
      password: '',
      email: '',
      ok: '',
      disabled: 0,
    };
  },
  methods: {
    validate() {
      this.ok = '';
      let err = true;
      let msg = '';
      !this.id && ((msg = 'id를 입력해주세요!'), (err = false));
      err && !this.name && ((msg = '이름을 입력해주세요!'), (err = false));
      err && !this.email && ((msg = '이메일을 입력해주세요!'), (err = false));

      if (!err) alert(msg);
      else this.findPw();
    },
    findPw() {
      http.get(`/admin/user/${this.id}`).then(({ data }) => {
        console.log(data);
        this.password = data.userpwd;
        if (this.password == null || this.password == '') {
          this.ok = true;
        } else {
          this.ok = false;
          this.disabled = 1;
        }
      });
    },
    moveLogin() {
      this.$router.push('/login');
    },
    moveSignUp() {
      this.$router.push('/signup');
    },
  },
};
</script>

<style scoped>
.findpw {
  background-color: white;
  margin-left: 20px;
}
.answer {
  color: white;
}
#btn {
  border: solid 1px #01579b;
}
.button {
  margin: 0 auto;
}
.btnFind {
  background-color: white;
}
</style>
