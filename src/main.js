import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// DatePicker
// import Vue from 'vue'
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import VueGoogleAutocomplete from "vue-google-autocomplete";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import moshaToast from "mosha-vue-toastify";
import { createToast } from "mosha-vue-toastify";
import "mosha-vue-toastify/dist/style.css";

library.add(fas, far, fab);

const app = createApp(App);
app.use(store);
app.use(moshaToast);
app.use(router);
app.component("Datepicker", Datepicker);
app.component("VueGoogleAutocomplete", VueGoogleAutocomplete);
app.component("FontAwesomeIcon", FontAwesomeIcon);
app.mixin({
  methods: {
    makeToast(title, message, toaster) {
      if (title && message && toaster) {
        createToast(
          {
            title: title,
            description: message,
          },
          {
            type: toaster,
            timeout: 3000,
            hideProgressBar: true,
            showIcon: true,
          }
        );
      }
    },
  },
});
app.mount("#app");
