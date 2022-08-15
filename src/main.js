import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/css/font.css";
import "./assets/css/common.css";
// import common from './assets/js/common';

Vue.config.productionTip = false;
// Vue.use(common);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
