<template>
  <v-app>
  <v-container>
    <v-row class="about">
      <v-col cols="12">
        <div class="border-box">
          <v-col></v-col>
          <v-col></v-col>
          <v-col></v-col>
          <v-col></v-col>
          <v-col class="roboto-bold">Happy House에 오신 것을 환영합니다 </v-col>
          <v-col></v-col>
          <v-col></v-col>
        </div>
      </v-col>
    </v-row>
    <v-row class="timeline">
      <v-col cols="12">
        <div>
          <v-timeline>
            <v-timeline-item>
              <span slot="opposite" class="v-card-title">MAY 20~21, 2021</span>
              <div>
                <div class="v-card-text">
                  ✔ 아이디어 회의 <br />
                  ✔ 역할 분담 <br />
                  ✔ 기본 기능 구현 <br />
                  ✔ 화면 디자인 설계
                </div>
              </div>
            </v-timeline-item>
           <v-timeline-item>
              <span slot="opposite" class="v-card-title">MAY 20~24, 2021</span>
              <div>
                <div class="v-card-text">
                  ✔ 기본 기능 구현 <br />
                  ✔ 추가 기능 설계, 구현 <br />
                  ✔ 화면 디자인 구현
                </div>
              </div>
            </v-timeline-item>
          </v-timeline>
          <v-timeline> </v-timeline>
        </div>
      </v-col>
    </v-row>
    <v-row class="timeline2">
      <v-col cols="12">
        <div>
          <v-timeline>
           <v-timeline-item>
              <span slot="opposite" class="v-card-title">MAY 25, 2021</span>
              <div>
                <div class="v-card-text">
                  ✔ 중간 발표 <br />
                  ✔ 기본 기능 마무리 <br />
                  ✔ 추가 기능 구현 <br />
                </div>
              </div>
            </v-timeline-item>
          <v-timeline-item>
              <span slot="opposite" class="v-card-title">MAY 26~27, 2021</span>
              <div>
                <div class="v-card-text">
                  ✔ 전체 기능 점검 <br />
                  ✔ 화면 디자인 구현 <br />
                  ✔ 프레젠테이션 제작 <br />
                  ✔ 시연 영상 촬영
                </div>
              </div>
            </v-timeline-item>
          </v-timeline>
          <v-timeline> </v-timeline>
        </div>
      </v-col>
    </v-row>
  </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'About',
  methods: {
    goHome() {
      this.$router.push('/');
    },
  },
};
</script>
<style scoped>
.border-box {
  height: 300px;
  text-align: center;
  align-items: center;
}
.about {
  background-color: #1a237e;
}
.timeline {
  background-color: #0d47a1;
}
.timeline2 {
  background-color: #01579b;
}
.roboto-bold {
  font-family: 'Roboto';
  font-weight: 700;
  color: white;
  text-align: center;
  font-size: 45px;
}
.v-card-title {
  color: white;
}
.v-card-text {
  background-color: white;
  font-size: 18px;
}
</style>
