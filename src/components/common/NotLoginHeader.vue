<template>
  <div id="header">
    <v-bottom-navigation :value="value" color="primary" horizontal>
      <div class="row">
        <div class="col-sm-2">
          <router-link to="/">
            <img src="@/assets/houselogo.png" class="logo" />
          </router-link>
        </div>
        <div class="col-sm-2"></div>
        <div class="col-sm-4">
          <p class="header_title">Happy House</p>
        </div>
        <div class="col-sm-4">
          <v-btn>
            <span>logout</span>

            <v-icon>mdi-heart</v-icon>
          </v-btn>

          <v-btn>
            <span>mypage</span>

            <v-icon>mdi-heart</v-icon>
          </v-btn>
        </div>
      </div>
    </v-bottom-navigation>
  </div>
</template>

<script>
export default {
  data: () => ({ value: 1 }),
};
</script>

<style>
.header_title {
  font-size: 30px;
  text-align: center;
}
.logo {
  width: 100px;
}
</style>
