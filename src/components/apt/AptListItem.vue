<template>
  <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
    style="
          border-left: 6px solid #BDBDBD;
          border-radius: 8px;
        "
    @click="chooseApt"
  >
    <v-card-title>
      {{ this.apt.aptName }}
    </v-card-title>
    <v-card-text>
        <v-row
          class="mx-0"
        >
          <v-col cols="12" style="text-align: right;">
              <v-icon left >mdi-office-building-marker</v-icon>서울시 {{this.apt.code == "11110" ? "종로구" : "중구"}}, {{this.apt.floor}}층
          </v-col>
        </v-row>
        <v-row
          align="center"
          class="mx-0"
        >
          <v-col cols="1">
              <v-icon>mdi-heart</v-icon>
          </v-col>
          <v-col cols="11" style="text-align: right;">
              $ • {{ (this.apt.dealAmount.replace(',', '') * 10000) | price }}
          </v-col>
        </v-row>
      </v-card-text>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'AptListItem',
  data() {
    return {
      isColor: false,
      loading: false,
      selection: 1,
    };
  },
  props: {
    apt: Object,
  },
  methods: {
    ...mapActions(['selectApt', 'toggleDrawer', 'getNearInfo']),
    async chooseApt() {
      let selected = await this.selectApt(this.apt);
      if(selected){
        await this.getNearInfo(selected);
      }
      this.toggleDrawer();
    },
    colorChange(flag) {
      this.isColor = flag;
    },
    reserve () {
      this.loading = true
      setTimeout(() => (this.loading = false), 2000)
    },
  },
  filters: {
    price(value) {
    if (!value) return value;
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },
  },
};
</script>

<style scoped>
.img-list {
  width: 50px;
}
.mouse-over-bgcolor {
  background-color: lightblue;
}
</style>
