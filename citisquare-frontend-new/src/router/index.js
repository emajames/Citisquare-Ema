import { createRouter, createWebHistory } from "vue-router";
// import store from '../store'

import authRoutes from "../views/modules/auth/router/index";
import Home from "../views/Home.vue";

const baseRoutes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: baseRoutes.concat(authRoutes),
});

export default router;
