import Vue from 'vue'
import App from './App.vue'
import store from "@/store/store";
import router from "@/routes";
import BootstrapVue, {IconsPlugin} from "bootstrap-vue";

// @ts-ignore
import VueSwal from 'vue-swal'
// @ts-ignore
import VueGoodTablePlugin from 'vue-good-table';

// import the styles 
import 'vue-good-table/dist/vue-good-table.css'
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueSwal)
Vue.use(VueGoodTablePlugin);

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
