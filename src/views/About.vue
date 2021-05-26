<template>
  <v-app>
    <div class="box">
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
            </div>
          </v-col>
        </v-row>
        <v-row class="timeline">
          <v-col cols="12">
            <div>
              <v-timeline>
                <v-timeline-item>
                  <template v-slot:icon>
                    <v-avatar style="background: white;"></v-avatar>
                  </template>
                  <span slot="opposite" class="v-card-title">
                    <span style="font-weight:bold;">MAY 20~21, 2021</span><br />
                    아이디어 회의 <br />
                    역할 분담 <br />
                    기본 기능 구현 <br />
                    화면 디자인 설계</span
                  >
                  <div></div>
                </v-timeline-item>
                <v-timeline-item>
                  <template v-slot:icon>
                    <v-avatar style="background: white;"></v-avatar>
                  </template>
                  <span slot="opposite" class="v-card-title"
                    ><span style="font-weight:bold;">MAY 22~24, 2021</span><br />
                    기본 기능 구현 <br />
                    추가 기능 설계, 구현 <br />
                    화면 디자인 구현
                  </span>
                </v-timeline-item>
                <v-timeline-item>
                  <template v-slot:icon>
                    <v-avatar style="background: white;"></v-avatar>
                  </template>
                  <span slot="opposite" class="v-card-title"
                    ><span style="font-weight:bold;">MAY 25, 2021</span><br />
                    중간 발표 <br />
                    기본 기능 마무리 <br />
                    추가 기능 구현 <br />
                  </span>
                </v-timeline-item>
                <v-timeline-item>
                  <template v-slot:icon>
                    <v-avatar style="background: white;"></v-avatar>
                  </template>
                  <span slot="opposite" class="v-card-title"
                    ><span style="font-weight:bold;">MAY 26~27, 2021</span><br />
                    전체 기능 점검 <br />
                    화면 디자인 구현 <br />
                    프레젠테이션 제작 <br />
                    시연 영상 촬영
                  </span>
                </v-timeline-item>
              </v-timeline>
              <v-timeline> </v-timeline>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
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
.box {
  background: linear-gradient(to bottom, #1a237e, #7e57c2);
  margin-top: 8px;
}
.border-box {
  height: 300px;
  text-align: center;
  align-items: center;
}
.roboto-bold {
  font-family: 'Roboto';
  font-weight: 800;
  color: white;
  text-align: center;
  font-size: 50px;
}
.v-card-title {
  color: white;
  font-size: 23px;
}
</style>
