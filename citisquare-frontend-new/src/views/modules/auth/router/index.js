const SignUp = () => import("../views/CreateAccount.vue");
const Login = () => import("../views/Login.vue");
const RegisterMerchant = () => import("../views/MerchantSignup.vue");

export default [
  {
    path: "/sign-up",
    name: "SignUp",
    component: SignUp,
    meta: { layout: "default" },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { layout: "default" },
  },
  {
    path: "/signup-merchant",
    name: "RegisterMerchant",
    component: RegisterMerchant,
    meta: { layout: "default" },
  },
];
