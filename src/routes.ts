import Vue from "vue";
import VueRouter, {RouterOptions} from 'vue-router'

const HomePage = () => import("@/components/HomePage.vue");
Vue.use(VueRouter);

export const routerOptions: RouterOptions = {
  routes: [
    {
      path: '/',
      component: HomePage,
    }
  ],
  mode: 'history',
}

export default new VueRouter(routerOptions)