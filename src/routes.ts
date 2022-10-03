import Vue from "vue";
import VueRouter, {RouterOptions} from 'vue-router'

const TableView = () => import("@/components/TableView.vue");
const CardView = () => import("@/components/CardView.vue");
const StickyTableView = () => import("@/components/StickyTableView.vue");

Vue.use(VueRouter);

export const routerOptions: RouterOptions = {
  routes: [
    {
      path: '/',
      component: TableView,
    },{
      path: '/cards/:id?',
      component: CardView,
    },{
      path: '/table',
      component: StickyTableView,
    }
  ],
  mode: 'history',
}

export default new VueRouter(routerOptions)