import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Eruda from "eruda";

Vue.config.productionTip = false;

//启动移动端调试
Eruda.init();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
