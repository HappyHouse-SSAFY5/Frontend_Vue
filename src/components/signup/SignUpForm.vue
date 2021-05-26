<template>
  <v-app style="background-color: #1A237E; margin-top: 8px;">
    <v-form ref="form" v-model="valid" lazy-validation style="width:500px; margin: auto;">
      <div class="signup">
        <v-text-field v-model="id" :counter="10" :rules="idRules" required>
          <template v-slot:label>
            <label style="color: white; margin-left: 3px; ">ID</label>
          </template>
        </v-text-field>
        <v-btn
          text-color="white"
          style="background-color:#1A237E; color:white; float: right; margin-right: 3px;"
          @click="checkDuplicateId()"
        >
          🚩아이디 중복 확인</v-btn
        >
        <br /><br />
        <v-text-field v-model="name" :counter="20" :rules="nameRules" label="Name" required>
          <template v-slot:label>
            <label style="color: white; margin-left: 3px;">Name</label>
          </template></v-text-field
        >
        <v-text-field
          type="password"
          v-model="password"
          :counter="20"
          :rules="passwordRules"
          required
          ><template v-slot:label>
            <label style="color: white; margin-left: 3px;"
              >Password는 8~15자리로 입력해주세요!
            </label>
          </template></v-text-field
        >
        <v-text-field
          type="password"
          v-model="passwordchk"
          :counter="20"
          :rules="[passwordchkRules, passwordConfirmationRules]"
          label="Password Check"
          required
        >
          <template v-slot:label>
            <label style="color: white; margin-left: 3px;"
              >Password Check : 위와 동일하게 입력해주세요!</label
            >
          </template></v-text-field
        >
        <v-text-field v-model="email" :rules="emailRules" label="E-mail" required
          ><template v-slot:label>
            <label style="color: white; margin-left: 3px;">Email</label>
          </template></v-text-field
        >
        <v-text-field v-model="address" :rules="addressRules" label="Address" required
          ><template v-slot:label>
            <label style="color: white; margin-left: 3px;">Address</label>
          </template></v-text-field
        >
        <div class="signupBtn">
          <v-col></v-col>
          <v-col></v-col>
          <v-btn :disabled="!valid" id="submit" style="background-color:#1A237E; color:white;" class="mr-4" @click="validate">
            Submit
          </v-btn>
          <v-btn style="background-color:#1A237E; color:white;" class="mr-4" @click="reset">
            Reset
          </v-btn>
          <v-col></v-col>
          <v-col></v-col>
        </div>
      </div>
      <v-col></v-col>
      <v-col></v-col>
    </v-form>
  </v-app>
</template>

<script>
import http from '@/util/http-common';

export default {
  flag: '',
  name: 'SignUpForm',
  data: () => ({
    valid: true,
    id: '',
    idRules: [
      (v) => !!v || 'Id is required',
      (v) => (v && v.length <= 10) || 'Id must be less than 10 characters',
    ],
    name: '',
    nameRules: [(v) => !!v || 'Name is required'],
    password: '',
    passwordRules: [
      (v) => !!v || 'Password is required',
      (v) =>
        (v && v.length >= 8 && v.length <= 15) ||
        'Password must be more than 8 characters and less than 15 characters',
    ],
    passwordchk: '',
    passwordchkRules: [(v) => !!v || 'Password Check is required'],
    email: '',
    emailRules: [
      (v) => !!v || 'E-mail is required',
      (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    address: '',
    addressRules: [(v) => !!v || 'Address is required'],
  }),
  methods: {
    checkDuplicateId() {
      http
        .get(`/admin/user/${this.id}`)
        .then(({ data }) => {
          if (data != null && data != '') {
            alert('아이디가 중복됩니다.');
            this.flag = false;
          } else {
            alert('사용할 수 있는 아이디입니다.');
            this.flag = true;
          }
        })
        .catch(() => {});
    },
    validate() {
      let err = true;
      let msg = '';
      !this.id && ((msg = 'id 입력해주세요'), (err = false), this.$refs.id.focus());
      err && !this.name && ((msg = '이름 입력해주세요'), (err = false), this.$refs.name.focus());
      err &&
        !this.password &&
        ((msg = '비밀번호 입력해주세요'), (err = false), this.$refs.password.focus());
      err &&
        !this.passwordchk &&
        ((msg = '비밀번호 확인 입력해주세요'), (err = false), this.$refs.passwordchk.focus());
      err &&
        !this.email &&
        ((msg = '이메일 입력해주세요'), (err = false), this.$refs.email.focus());
      err &&
        !this.address &&
        ((msg = '주소 입력해주세요'), (err = false), this.$refs.address.focus());

      if (!err) alert(msg);
      if (!this.flag) alert('아이디 중복 여부를 확인해주세요.');
      else this.signUp();
    },
    signUp() {
      http
        .post('/user/join', {
          userid: this.id,
          username: this.name,
          userpwd: this.password,
          email: this.email,
          address: this.address,
        })
        .then((data) => {
          console.log(data);
          alert('회원가입이 완료되었습니다.');
          this.moveHome();
        })
        .catch(() => {
          alert('회원가입 중 문제가 발생하였습니다.');
        });
    },
    reset() {
      this.$refs.form.reset();
    },
    moveHome() {
      this.$router.push('/');
    },
  },
  computed: {
    passwordConfirmationRules() {
      return () =>
        this.password === this.passwordchk || 'Password Check must be the same as the password';
    },
  },
};
</script>

<style scoped>
.signup {
  border: 11px solid white;
}
.signupBtn {
  background-color: white;
  
}
</style>
