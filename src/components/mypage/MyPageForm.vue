<template>
  <v-app>
    <div class="mypageform container-fluid">
      <div class="row">
        <div class="card col-md-6">
          <div class="form-group" align="left">
            <h2 align="center">My Page</h2>
            <label for="id">ID</label>
            <input
              type="text"
              class="form-control"
              id="id"
              name="id"
              v-model="id"
              ref="id"
              readonly
            />
          </div>
          <div class="form-group" align="left">
            <label for="name">Name</label>
            <input
              type="text"
              class="form-control"
              id="name"
              name="name"
              v-model="name"
              ref="name"
              readonly
            />
          </div>
          <div class="form-group" align="left">
            <label for="password">비밀번호</label>
            <input
              type="password"
              class="form-control"
              id="password"
              name="password"
              v-model="password"
              ref="password"
              placeholder=""
            />
          </div>
          <div class="form-group" align="left">
            <label for="passwordchk">비밀번호 재입력</label>
            <input
              type="password"
              class="form-control"
              id="passwordchk"
              name="passwordchk"
              v-model="passwordchk"
              ref="passwordchk"
              placeholder=""
            />
          </div>
          <div class="form-group" align="left">
            <label for="email">이메일</label><br />
            <div id="email" class="custom-control-inline">
              <input
                type="email"
                class="form-control"
                id="email"
                name="email"
                v-model="email"
                ref="email"
              />
            </div>
          </div>
          <div class="form-group" align="left">
            <label for="">주소</label><br />
            <input
              type="text"
              class="form-control"
              id="address"
              name="address"
              v-model="address"
              ref="address"
            />
          </div>
          <div>
            <button class="col-sm-3" id="btn" align="left" type="submit" @click="validate">
              수정 / 확인
            </button>
            <button class="col-sm-3" id="btn" align="right" type="submit" @click="deleteUser">
              회원 탈퇴
            </button>
          </div>
        </div>
        <div class="card col-md-6">찜하기 목록</div>
      </div>
    </div>
  </v-app>
</template>

<script>
import http from '@/util/http-common';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'MyPageForm',
  computed: {
    ...mapGetters({
      loginUserId: 'getUserid',
    }),
    passwordConfirmationRules() {
      return () =>
        this.password === this.passwordchk || 'Password Check must be the same as the password';
    },
  },
  data: () => ({
    id: '',
    name: '',
    password: '',
    passwordchk: '',
    email: '',
    address: '',
  }),
  created() {
    http.get(`/user/mypage/${this.loginUserId}`).then(({ data }) => {
      console.log(data);
      this.id = data.userid;
      this.name = data.username;
      this.password = data.password;
      this.email = data.email;
      this.address = data.address;
    });
  },
  methods: {
    ...mapActions(['logout']),
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
      console.log(this.id);
      console.log(this.name);
      console.log(this.password);
      console.log(this.email);
      console.log(this.address);
      http
        .put('/user/update', {
          userid: this.id,
          username: this.name,
          userpwd: this.password,
          email: this.email,
          address: this.address,
        })
        .then(({ data }) => {
          console.log(data);
          alert('회원정보 수정이 완료되었습니다.');
          this.moveList();
        })
        .catch(() => {
          alert('회원정보 수정 중 문제가 발생하였습니다.');
        });
    },
    deleteUser() {
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
      } catch (error) {
        console.log(error);
      }
    },
    moveList() {
      this.$router.push('/vuetest'); // 홈으로 바꿔야함
    },
  },
};
</script>

<style scoped>
.mypageform {
  margin-top: 20px;
  color: white;
}
input {
  background-color: #9fa8da;
}
.card {
  background-color: #9fa8da;
  border: 3px solid white;
}
#btn {
  background-color: #9fa8da;
  border: solid 2px white;
}
</style>
