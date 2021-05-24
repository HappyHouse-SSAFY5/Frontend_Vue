<template>
  <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
    @click="chooseApt"
  >
    <v-card-title>{{ this.apt.aptName }}</v-card-title>
    <v-card-text>
        <v-row
          align="center"
          class="mx-0"
        >
          <v-rating
            :value="4.5"
            color="amber"
            dense
            half-increments
            readonly
            size="14"
          ></v-rating>
  
          <div class="grey--text ml-4">
            4.5 (413)
          </div>
        </v-row>
  
        <div class="my-4 subtitle-1">
          $ • {{this.apt.dealAmount}}
        </div>
  
        <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
      </v-card-text>
  
      <v-divider class="mx-4"></v-divider>
  
      <v-card-title>Tonight's availability</v-card-title>
  
      <v-card-text>
        <v-chip-group
          v-model="selection"
          active-class="deep-purple accent-4 white--text"
          column
        >
          <v-chip>5:30PM</v-chip>
  
          <v-chip>7:30PM</v-chip>
  
          <v-chip>8:00PM</v-chip>
  
          <v-chip>9:00PM</v-chip>
        </v-chip-group>
      </v-card-text>
  
      <v-card-actions>
        <v-btn
          color="deep-purple lighten-2"
          text
          @click="reserve"
        >
          Reserve
        </v-btn>
      </v-card-actions>
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
    ...mapActions(['selectApt', 'toggleDrawer']),
    chooseApt() {
      this.selectApt(this.apt);
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
