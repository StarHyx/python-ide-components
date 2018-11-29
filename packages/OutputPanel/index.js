import OutputPanel from "./src/OutputPanel.vue";

// 为组件提供 install 安装方法，供按需引入
OutputPanel.install = function(Vue) {
	Vue.component(OutputPanel.name, OutputPanel);
};

// 默认导出组件
export default OutputPanel;
