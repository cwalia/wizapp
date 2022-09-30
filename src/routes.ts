import Vue from "vue";
import VueRouter, {RouterOptions} from 'vue-router'

const TableView = () => import("@/components/TableView.vue");
const CardView = () => import("@/components/CardView.vue");
Vue.use(VueRouter);

export const routerOptions: RouterOptions = {
  routes: [
    {
      path: '/',
      component: TableView,
    },{
      path: '/cards/:id?',
      component: CardView,
    }
  ],
  mode: 'history',
}

export default new VueRouter(routerOptions)