import ToolBar from "./src/ToolBar.vue";

// 为组件提供 install 安装方法，供按需引入
ToolBar.install = function (Vue) {
  Vue.component(ToolBar.name, ToolBar);
};

// 默认导出组件
export default ToolBar;