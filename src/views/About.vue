<template>
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
          <v-switch v-model="reverse" label="Toggle reverse"></v-switch>
          <v-timeline :reverse="reverse" :dense="$vuetify.breakpoint.smAndDown">
            <v-timeline-item v-for="n in 2" :key="n">
              <span slot="opposite">Tus eu perfecto</span>
              <v-card class="elevation-2">
                <v-card-title class="headline">
                  Lorem ipsum
                </v-card-title>
                <v-card-text>
                  Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec
                  ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril
                  disputando voluptatibus, vix an salutandi sententiae.
                </v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>
          <v-timeline :reverse="reverse" dense>
            <v-timeline-item v-for="n in 2" :key="n">
              <span slot="opposite">Tus eu perfecto</span>
              <v-card class="elevation-2">
                <v-card-title class="headline">
                  Lorem ipsum
                </v-card-title>
                <v-card-text>
                  Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec
                  ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril
                  disputando voluptatibus, vix an salutandi sententiae.
                </v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </div>
      </v-col>
    </v-row>
  </v-container>
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
  border: 8px solid white;
  height: 300px;
  text-align: center;
  align-items: center;
}
.about {
  background-color: #0d47a1;
}
.timeline {
  background-color: #01579b;
}
.roboto-bold {
  font-family: 'Roboto';
  font-weight: 500;
  color: white;
  text-align: center;
  font-size: 35px;
}
</style>
