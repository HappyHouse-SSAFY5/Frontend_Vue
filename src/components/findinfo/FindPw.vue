<template>
  <v-app>
    <div class="findinfo container-fluid">
      <div class="row">
        <div class="card col-md-6">
          <div class="form-group" align="left">
            <h2 align="center">FIND PASSWORD</h2>
            <v-text-field
              v-model="id"
              label="ID"
              required
            ></v-text-field>
            <v-text-field
              v-model="name"
              label="Name"
              required
            ></v-text-field>
            <v-text-field
              v-model="email"
              label="E-mail"
              required
            ></v-text-field>
          </div>
          <div>
            <button class="col-sm-3" id="btn" align="center" type="submit" @click="validate">
              FIND
            </button>
          </div>
        </div>
        <div class="card answer col-md-6">
          <div class="pass" v-if="password != '' && password != null">
            <h3>{{ name }}님의 비밀번호는 {{ password }}입니다.</h3> <br>
            <button class="col-sm-3"><router-link to="/mypage">비밀번호 변경</router-link></button>
            <button class="col-sm-2"><router-link to="/login">로그인</router-link></button>
          </div>
           <div class="pass" v-show="ok">
            <h3>{{ name }}님의 회원 정보가 없습니다.</h3> <br>
            <button class="col-sm-3"><router-link to="/signup">회원가입</router-link></button>
          </div>
        </div>
      </div>
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
    };
  },
  methods: {
    validate() {
      let err = true;
      let msg ='';
      !this.id && ((msg = 'id를 입력해주세요'), (err = false));
      err && !this.name && ((msg = '이름을 입력해주세요'), (err = false));
      err &&
        !this.email &&
        ((msg = '이메일을 입력해주세요'), (err = false));

      if (!err) alert(msg);
      else this.findPw();
    },
    findPw() {
      http.get(`/admin/user/${this.id}`).then(({ data }) => {
        console.log(data);
        this.password = data.userpwd;
        if(this.password == null || this.password == '') this.ok = true;
      });
    },
  },
};
</script>

<style scoped>
.findinfo {
  margin-top: 100px;
}
.card {
  border: white;
}
.answer {
  margin-top: 50px;
}
#btn {
  border: solid 1px #01579B;;
}
</style>
