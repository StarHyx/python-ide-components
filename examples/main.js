import Vue from "vue";
import App from "./App.vue";
import IdeEditor from "./../packages/index";

Vue.use(IdeEditor);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
