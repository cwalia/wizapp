import Vue from 'vue'
import App from './App.vue'
import store from "@/store/store";
import router from "@/routes";
import BootstrapVue, {IconsPlugin} from "bootstrap-vue";

// @ts-ignore
import VueSwal from 'vue-swal'

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueSwal)

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
