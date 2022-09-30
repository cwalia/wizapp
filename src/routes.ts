import Vue from "vue";
import VueRouter, {RouterOptions} from 'vue-router'

const HomePage = () => import("@/components/HomePage.vue");
const CardView = () => import("@/components/CardView.vue");
Vue.use(VueRouter);

export const routerOptions: RouterOptions = {
  routes: [
    {
      path: '/',
      component: HomePage,
    },{
      path: '/cards/:id?',
      component: CardView,
    }
  ],
  mode: 'history',
}

export default new VueRouter(routerOptions)