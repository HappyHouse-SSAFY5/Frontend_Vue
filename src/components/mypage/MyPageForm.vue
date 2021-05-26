<template>
    <v-form
      ref="form"
      lazy-validation
    >
      <h4> <v-icon large color="indigo">mdi-human-greeting</v-icon>내 정보 확인하기</h4>
      <v-subheader style="display: inline-flex;">저희에게 알려주신 {{username}}님의 정보입니다. 정확한가요? <v-icon>mdi-emoticon-cool-outline</v-icon> </v-subheader>
      <v-text-field
        label="ID"
        id="id"
        name="id"
        v-model="id"
        ref="id" 
        readonly
      />
      <v-text-field
        label="Name"
        id="name"
        name="name"
        v-model="name"
        ref="name"
        readonly
      />
      <v-text-field
        label="Password"
        id="password"
        name="password"
        v-model="password"
        ref="password"
        placeholder=""
      />
      <v-text-field
        label="Confirm Password"
        id="passwordchk"
        name="passwordchk"
        v-model="passwordchk"
        ref="passwordchk"
        placeholder=""
      />
        <v-text-field
          label="Email"
          id="email"
          name="email"
          v-model="email"
          ref="email"
          :rules="emailRules"
        />
      <v-text-field
        label="Address"
        id="address"
        name="address"
        v-model="address"
        ref="address"
        :rules="addressRules"
      />
    <v-btn class="mr-4" color="blue darken-4" @click="validate" dark>
      내 정보 수정 하기
    </v-btn>
    <v-btn class="mr-4" color="light-blue darken-4" @click="deleteUser" dark>
      탈퇴하기
    </v-btn>
  </v-form>
</template>

<script>
import http from '@/util/http-common';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'MyPageForm',
  computed: {
    ...mapGetters({
      loginUserId: 'getUserid',
      username: 'getUsername',
    }),
  },
  data: () => ({
    id: '',
    name: '',
    password: '',
    passwordchk: '',
    email: '',
    emailRules:[
      v => !!v || 'email 입력은 필수입니다.',
      v => /.+@.+\..+/.test(v) || '유효하지 않은 email 형식입니다.',
    ],
    address: '',
    addressRules:[
      v => !!v || '주소 입력은 필수입니다.',
    ],
  }),
  created() {
    http.get(`/user/mypage/${this.loginUserId}`).then(({ data }) => {
      this.id = data.userid;
      this.name = data.username;
      this.password = data.password;
      this.email = data.email;
      this.address = data.address;
    });
  },
  methods: {
    ...mapActions(['logout']),
    passwordConfirmationRules(v) {
      if(v != this.password) return true;
      else return 'Password Check must be the same as the password';
    },
    validate() {
      let err = true;
      let msg = '';
      !this.name && ((msg = '이름 입력해주세요'), (err = false), this.$refs.name.focus());
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

      if (this.password != this.passwordchk) {
        msg = '비밀번호와 비밀번호 재입력이 다릅니다.';
        err = false;
      }
      if (!err) alert(msg);
      else this.modifyUser();
    },
    modifyUser() {
      http
        .put('/user/update', {
          userid: this.id,
          username: this.name,
          userpwd: this.password,
          email: this.email,
          address: this.address,
        })
        .then(() => {
          alert('회원정보 수정이 완료되었습니다.');
          this.moveList();
        })
        .catch(() => {
          alert('회원정보 수정 중 문제가 발생하였습니다.');
        });
    },
    deleteUser() {
      
      if(!confirm("정말 저희를 떠나실건가요?")) return;
      http
        .delete(`/user/delete/${this.id}`, {
          userid: this.id,
        })
        .then(() => {
          alert('회원 탈퇴되었습니다. 감사합니다.');
          this.clicklogout();
          this.moveList();
        });
    },
    async clicklogout() {
      try {
        await this.logout();
        this.moveHome();
      } catch (error) {
        console.log(error);
      }
    },
    moveList() {
      this.$router.push('/'); // 홈으로 바꿔야함
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
</style>
