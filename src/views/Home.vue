<template>
  <b-container class="bv-example-row">
    <Main />
  </b-container>
</template>
<script>
// @ is an alias to /src
import Main from '@/components/Main.vue';

export default {
  name: 'Home',
  components: {
    Main,
  },
};
</script>
