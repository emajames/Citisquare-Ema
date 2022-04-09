import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/forgotpassword",
    name: "ForgotPassword",
    component: function () {
          return import( '../views/ForgotPassword.vue')
        }
  },
  {
    path: "/merchantsignup",
    name: "MerchantSignup",
    component: function () {
      return import( '../views/MerchantSignup.vue')}
    },
    {
  path: "/login",
  name: "Login",
  component: function () {
    return import( '../views/Login.vue')}
  },
  {
    path: "/createaccount",
    name: "Createaccount",
    component: function () {
      return import( '../views/CreateAccount.vue')
    }
  },
  {
    path: "/emailverification",
    name: "EmailVerification",
    component: function () {
      return import( '../views/EmailVerification.vue')
    }
  }
  // {
  //   path: '/about',
  //   name: 'About',

  //   component: function () {
  //     return import( '../views/About.vue')
  //   }
  // }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
