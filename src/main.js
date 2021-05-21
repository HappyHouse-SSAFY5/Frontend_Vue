import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import Vuetify from 'vuetify';
import * as VueGoogleMaps from 'vue2-google-maps';

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
Vue.use(Vuetify);
Vue.use(VueGoogleMaps, {
  load:{
      key:'AIzaSyDQK7GHe6wBZzH95bYhJszq2eE67OQzA-w',
  }
});

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'vuetify/dist/vuetify.min.css';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify: new Vuetify(),
  VueGoogleMaps,
  render: (h) => h(App),
}).$mount('#app');
