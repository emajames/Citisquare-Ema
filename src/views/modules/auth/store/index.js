// Import request/axios config
import request from "@/https/axios";

export default {
  namespaced: true,
  state: {
    test: ["hjkh"],
    auth_token :null
  },

  // Mutations
  mutations: {
    LOGIN(state, data) {
      state.auth_token = data
    }
  },

  // Actions
  actions: {
    // Login request
    async login({ commit }, data) {
      console.log(data);
      let res = await request().post(`auth/token/login/`, data, {
        "Content-Type": "application/json",
      });
      commit("LOGIN", res.data);
      console.log(res);
      return res;
    },

    // Signup User
    async signUpUser({ commit }, data) {
      console.log(data);
      let res = await request().post(`auth/users/`, data, {
        "Content-Type": "application/json",
      });
      commit("SIGNUP_USER", res.data);
      console.log(res);
      return res;
    },
    // Signup request
    async signUpMerchant({ commit }, data) {
      console.log(data);
      let res = await request().post(`auth/register-merchant/`, data, {
        "Content-Type": "application/json",
      });
      commit("SIGNUP_MERCHANT", res.data);
      console.log(res);
      return res;
    },
  },

  // Getters
  getters: {},
};
