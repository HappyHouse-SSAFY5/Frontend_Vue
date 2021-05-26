<template>
  <v-app id="inspire">
    <v-container>
      <v-row>
          <v-col>
            <my-page-form />
          </v-col>
          <v-col>
            <pickup-house />
          </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import MyPageForm from '@/components/mypage/MyPageForm.vue';
import PickupHouse from '@/components/mypage/PickupHouse.vue';
export default {
    name: 'MyPage',
    components: {
        MyPageForm,
        PickupHouse,
    }
}
</script>

<style>

</style>