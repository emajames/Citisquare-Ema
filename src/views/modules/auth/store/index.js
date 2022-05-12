// Import request/axios config
import request from "@/https/axios";

export default {
  namespaced: true,
  state: {
    test: ["hjkh"],
    auth_token: null,
    user: null,
  },

  // Mutations
  mutations: {
    LOGIN(state, data) {
      state.user = data.user;
      state.auth_token = data.auth_token;
    },
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
    // Login request
    async logout({ commit }) {
      let res = await request().post(`api/auth/token/logout/`,{
        authorization: `token ${this.auth_token}`,
      }, {
        "Content-Type": "application/json",
        
      });
      commit("LOGOUT", res.data);
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
