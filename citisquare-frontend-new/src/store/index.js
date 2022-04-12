import { createStore, createLogger } from "vuex";
import createPersistedState from "vuex-persistedstate";
import auth from "../views/modules/auth/store/index";

// initial state
let initialState = {
  auth: auth.state,
};
const debug = process.env.NODE_ENV !== "production";
let plugins = [
  createPersistedState({
    key: process.env.MIX_APP_NAME,
  }),
];
if (debug) plugins.push(createLogger());
export default createStore({
  modules: {
    auth,
  },
  plugins,
  state: {},
  mutations: {
    RESET(state) {
      Object.keys(state).forEach((key) => {
        Object.assign(state[key], initialState[key]);
      });
    },
  },
  actions: {},
  getters: {},
});
