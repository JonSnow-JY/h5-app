import "reset.css";
import "babel-polyfill";
import FastClick from "fastclick";
FastClick.attach(document.body);

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
