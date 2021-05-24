<template>
  <v-row 
    class="text-center" 
    v-if="airconditions"
  >
      <v-col cols="12">
        <v-alert
            color="indigo darken-3"
            dark
            icon="mdi-weather-windy"
            border="left"
            dense
            style="margin:0;"
        >
            이 지역의 실시간 대기 환경 현황입니다.
        </v-alert>
      </v-col>
            <v-col cols="12">
          <v-chip
            class="ma-2"
            color="indigo darken-3"
            outlined
          >
            <v-icon left>
            mdi-face-mask
            </v-icon>
            통합대기 환경 등급은 "{{airconditions.IDEX_NM}}"" 입니다.
        </v-chip>
      </v-col>
      <v-col cols="6">
        <v-progress-circular
            :size="100"
            :width="15"
            :value="airconditions.PM10"
            color="indigo accent-3"
        >
            {{ airconditions.PM10 }}㎍/㎥
        </v-progress-circular>
        <br>
        미세먼지
      </v-col>
      <v-col cols="6">
        <v-progress-circular
            :size="100"
            :width="15"
            :value="airconditions.PM25"
            color="indigo accent-1"
        >
            {{ airconditions.PM25 }} ㎍/㎥
        </v-progress-circular>
        <br>
        초미세먼지
      </v-col>
      <v-col cols="6">
        <v-progress-circular
            :size="100"
            :width="15"
            :value="airconditions.O3"
            color="indigo darken-1"
        >
            {{ airconditions.O3 }} ppm
        </v-progress-circular>
        <br>
        오존
      </v-col>
      <v-col cols="6">
        <v-progress-circular
            :size="100"
            :width="15"
            :value="airconditions.CO "
            color="indigo darken-2"
        >
            {{ airconditions.CO }} ppm
        </v-progress-circular>
        <br>
        일산화탄소
      </v-col>
    </v-row>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: "NearAirCondition",
    computed: {
        ...mapGetters({
        airconditions: 'getAirCondition'
        })
    },
    filters: {
      percent(value) {
        if (!value) return value;
          return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        },
    },
}
</script>

<style>

</style>