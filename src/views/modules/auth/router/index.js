const SignUp = () => import("../views/CreateAccount.vue");
const Login = () => import("../views/Login.vue");
const RegisterMerchant = () => import("../views/MerchantSignup.vue");
const Search = () => import("../views/Search.vue");
const SearchResults = () => import("../views/SearchResults.vue");
const Payment = () => import("../views/Payment.vue");
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
  {
    path: "/search",
    name: "Search",
    component: Search,

    meta: { layout: "default" },
  },
  {
    path: "/search-results",
    name: "SearchResults",
    component: SearchResults,
    meta: { layout: "default" },
  },
  {
    path: "/payment",
    name: "Payment",
    component: Payment,
    meta: { layout: "default" },
  },
];
