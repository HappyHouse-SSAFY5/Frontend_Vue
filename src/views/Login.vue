<template>
  <div>
    <login-form></login-form>
    <div class="alert-danger" v-if="errorState">
      <v-alert
      elevation="12"
      type="error"
      >
      {{errorState}}
      </v-alert>
    </div>
  </div>
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