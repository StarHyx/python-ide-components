import Vue from "vue";
import App from "./App.vue";
import IdeEditor from "./../packages/index";
import Element from "element-ui";
import "./../packages/style/element-variables.scss";

Vue.use(Element);

Vue.use(IdeEditor);

Vue.config.productionTip = false;

new Vue({
	render: h => h(App)
}).$mount("#app");
