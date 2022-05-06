import Vue from "vue";
import VueRouter from "vue-router";
import index from "@/views/index";
import my from '@/views/my'
import login from '@/views/login'
import fx from '@/views/fx'
import yhs from '@/views/yhs'
Vue.use(VueRouter);

const routes = [
  {
    name: "index",
    path: "/",
    component: index,
  },
  {
    name:'fx',
    path:'/fx',
    component:fx
  },
  {
    name:'yhs',
    path:'/yhs',
    component:yhs
  }
];

const router = new VueRouter({
  routes,
});

export default router;
