<template>
  <v-app style="background-color: #1A237E;">
      <v-alert
      elevation="12"
      type="error"
      v-if="errorState" 
      style="margin: auto; margin-top: 36px;"
      >
      {{errorState}}
      </v-alert>
    <login-form></login-form>
  </v-app>
</template>

<script>
import LoginForm from '@/components/login/Form.vue';
import { mapGetters } from 'vuex';
export default {
    name:'Login',
    components:{
        LoginForm,
    },
    computed:{
      ...mapGetters({
        errorState: 'getErrorState'
      })
    }
}
</script>

<style>

</style>