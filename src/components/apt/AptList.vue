<template>
  <v-container v-if="apts && apts.length != 0" class="fill-height overflow-y-auto">
    <v-row
      align="center"
      justify="center"
    >
      <v-card
        class="mx-auto"
        max-width="1200"
      >
        <v-container fluid>
          <v-row dense>
            <v-col
              v-for="(apt, index) in apts"
              :key="index"
              :cols=4
            >
              <apt-list-item :apt="apt" />
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-row>
  </v-container>
  <v-container id="inspire" v-else>
    <v-chip
        class="ma-2"
      >
        매매 기록이 존재하지 않습니다.
      </v-chip>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import AptListItem from '@/components/apt/AptListItem.vue';
export default {
  name: 'AptList',
  components: {
    AptListItem,
  },
  computed: {
    ...mapGetters({
      apts: 'getApts'
    })
  },
};
</script>

<style></style>
