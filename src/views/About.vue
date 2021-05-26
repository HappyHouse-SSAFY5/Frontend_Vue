<template>
  <v-app>
    <div class="box">
      <v-container style="border: 8px solid white; border-bottom: 0;">
        <v-row class="about">
          <v-col cols="12">
            <div class="border-box">
              <v-col></v-col>
              <v-col></v-col>
              <v-col></v-col>
              <v-col></v-col>
              <v-col class="roboto-bold" style="text-shadow: 0 0 8px #B39DDB;">Happy House에 오신 것을 환영합니다 </v-col>
              <v-col></v-col>
            </div>
          </v-col>
        </v-row>
        <v-row class="timeline">
          <v-col cols="12" style="color: white;margin: 24px 0;text-shadow: 0 0 8px #E0F7FA;"><h3>Timeline</h3></v-col>
          <v-col cols="12">
            <div>
              <v-timeline>
                <v-timeline-item class="sa sa-up">
                  <template v-slot:icon>
                    <v-avatar style="background: white;"> <v-icon>mdi-head-dots-horizontal-outline</v-icon> </v-avatar>
                  </template>
                  <span slot="opposite" class="v-card-title">
                    <span style="font-weight:900;">MAY 20~21, 2021</span><br />
                    아이디어 회의 <br />
                    역할 분담 <br />
                    기본 기능 구현 <br />
                    화면 디자인 설계</span
                  >
                  <div></div>
                </v-timeline-item>
                <v-timeline-item class="sa sa-up">
                  <template v-slot:icon>
                    <v-avatar style="background: white;"> <v-icon>mdi-head-flash-outline</v-icon></v-avatar>
                  </template>
                  <span slot="opposite" class="v-card-title"
                    ><span style="font-weight:900;">MAY 22~24, 2021</span><br />
                    기본 기능 구현 <br />
                    추가 기능 설계, 구현 <br />
                    화면 디자인 구현
                  </span>
                </v-timeline-item>
                <v-timeline-item class="sa sa-up">
                  <template v-slot:icon>
                    <v-avatar style="background: white;"><v-icon>mdi-head-check-outline</v-icon></v-avatar>
                  </template>
                  <span slot="opposite" class="v-card-title"
                    ><span style="font-weight:900;">MAY 25, 2021</span><br />
                    중간 발표 <br />
                    기본 기능 마무리 <br />
                    추가 기능 구현 <br />
                  </span>
                </v-timeline-item>
                <v-timeline-item class="sa sa-up">
                  <template v-slot:icon>
                    <v-avatar style="background: white;"><v-icon>mdi-head-heart-outline</v-icon></v-avatar>
                  </template>
                  <span slot="opposite" class="v-card-title"
                    ><span style="font-weight:900;">MAY 26~27, 2021</span><br />
                    전체 기능 점검 <br />
                    화면 디자인 구현 <br />
                    프레젠테이션 제작 <br />
                    시연 영상 촬영
                  </span>
                </v-timeline-item>
              </v-timeline>
            </div>
          </v-col>
        </v-row>
        
        <v-row style="padding-bottom: 80px;">
          <v-col cols="12" style="color: white; margin: 24px 0;text-shadow: 0 0 8px #B39DDB;"><h3>Who developed this fancy web app!</h3></v-col>
          <v-col cols="6">
            <profile name="이예슬" src="https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight2&accessoriesType=Kurt&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=Red&eyeType=Side&eyebrowType=RaisedExcited&mouthType=Eating&skinColor=Light" desc="이 정도면 만족한다." />
          </v-col>
          <v-col cols="6">
            <profile name="이채하" src="https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraightStrand&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Smile&skinColor=Light" desc="모든 영광을 팀장 예슬님에게 바칩니다." />
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-app>
</template>

<script>
import Profile from '@/components/about/profile.vue';
export default {
  name: 'About',
  components:{
    Profile,
  },
  data(){
    return {
      saTriggerMargin: 300,
      saElementList: [],
    }
  },
  methods: {
    goHome() {
      this.$router.push('/');
    },
    saFunc(){
      this.saElementList = document.querySelectorAll('.sa');
      console.log(this.saElementList);
      for (const element of this.saElementList) {
        if (!element.classList.contains('show')) {
          if (window.innerHeight > element.getBoundingClientRect().top + this.saTriggerMargin) {
            element.classList.add('show');
          }
        }
      }
    },
  },
  created(){
    window.addEventListener('load', this.saFunc);
    window.addEventListener('scroll', this.saFunc);
  },
  destroyed(){
    window.removeEventListener('load', this.saFunc);
    window.removeEventListener('scroll', this.saFunc);
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
/* Scroll Animation (sa, 스크롤 애니메이션) */
.sa {
opacity: 0;
transition: all .5s ease;
}

/* 아래에서 위로 페이드 인 */
.sa-up {
transform: translate(0, 100px);
}

.sa.show {
  opacity: 1;
  transform: none;
}
</style>
