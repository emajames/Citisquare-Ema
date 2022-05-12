const SignUp = () => import("../views/CreateAccount.vue");
const Login = () => import("../views/Login.vue");
const RegisterMerchant = () => import("../views/MerchantSignup.vue");
const Search = () => import("../views/Search.vue");
const SearchResults = () => import("../views/SearchResults.vue");
const Payment = () => import("../views/Payment.vue");
const UserDashboard = () => import("../views/UserDashboard/dashboard.vue");
const MerchantDashboard = () => import("../views/MerchantDashboard/dashboard.vue");
const FinancialServices = () => import("../views/UserDashboard/FinancialServices.vue");
const FinancialServicesSearch = () => import("../views/UserDashboard/Search.vue");
const KycProfile = () => import("../views/MerchantDashboard/kycprofile.vue");
const KycContact = () => import("../views/MerchantDashboard/kyccontact.vue");
const KycBusiness = () => import("../views/MerchantDashboard/kycbusiness.vue");
const KycSuccess = () => import("../views/MerchantDashboard/kycsuccess.vue");
const Properties = () => import("../views/MerchantDashboard/properties.vue");
const Property = () => import("../views/Properties/_id.vue");
const Profile = () => import("../views/MerchantDashboard/profile.vue");
const Wallet = () => import("../views/MerchantDashboard/wallet.vue");
const ProductDetail = () =>
  import("../views/MerchantDashboard/productdetail.vue");
const PaymentType = () => import("../views/PaymentType.vue");

import store from "@/store/index";

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
    path: "/search",

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
  {
    path: "/merchantdashboard/wallet",
    name: "Wallet",
    component: Wallet,
    meta: { layout: "default" },
  },
  {
    path: "/paymenttype",
    name: "paymenttype",
    component: PaymentType,
    meta: { layout: "default" },
  },
  {
    path: "/properties/:id",
    name: "Property",
    component: Property,
    meta: { layout: "default" },
  },
  {
    path: "/userdashboard/dashboard",
    name: "UserDashboard",
    component: UserDashboard,
    async beforeEnter(to, from, next) {
      try {
        var hasPermission = await store.getters.get_auth_token;
        console.log(store.getters.get_auth_token);
        if (hasPermission) {
          next();
        } else {
          next({
            name: "Login", // back to safety route //
            query: { redirectFrom: to.fullPath },
          });
        }
      } catch (e) {
        next({
          name: "Login", // back to safety route //
          query: { redirectFrom: to.fullPath },
        });
      }
    },
  },
  {
    path: "/merchantdashboard/dashboard",
    name: "MerchantDashboard",
    component: MerchantDashboard,
    meta: { layout: "default" },
    async beforeEnter(to, from, next) {
      try {
        var hasPermission = await store.getters.get_auth_token;
        console.log(store.getters.get_auth_token);
        if (hasPermission) {
          next();
        } else {
          next({
            name: "Login", // back to safety route //
            query: { redirectFrom: to.fullPath },
          });
        }
      } catch (e) {
        next({
          name: "Login", // back to safety route //
          query: { redirectFrom: to.fullPath },
        });
      }
    },
  },
  {
    path: "/merchantdashboard/kycprofile",
    name: "KycProfile",
    component: KycProfile,
    meta: { layout: "default" },
  },
  {
    path: "/userdashboard/financialservices",
    name: "FinancialServices",
    component: FinancialServices,
    meta: { layout: "default" },
  },
  {
    path: "/userdashboard/search",
    name: "FinancialServicesSearch",
    component: FinancialServicesSearch,
    meta: { layout: "default" },
  },
  {
    path: "/merchantdashboard/kyccontact",
    name: "KycContact",
    component: KycContact,
    meta: { layout: "default" },
  },
  {
    path: "/merchantdashboard/kycbusiness",
    name: "KycBusiness",
    component: KycBusiness,
    meta: { layout: "default" },
  },
  {
    path: "/merchantdashboard/kycsuccess",
    name: "KycSuccess",
    component: KycSuccess,
    meta: { layout: "default" },
  },
  {
    path: "/merchantdashboard/productdetail",
    name: "ProductDetail",
    component: ProductDetail,
    meta: { layout: "default" },
  },
  {
    path: "/merchantdashboard/properties",
    name: "Properties",
    component: Properties,
    meta: { layout: "default" },
  },
  {
    path: "/merchantdashboard/profile",
    name: "Profile",
    component: Profile,
    meta: { layout: "default" },
  },
];
