// 导入组件，组件必须声明 name
import IdeEditor from './src/IdeEditor.vue'

// 为组件提供 install 安装方法，供按需引入
IdeEditor.install = function (Vue) {
  Vue.component(IdeEditor.name, IdeEditor)
}

// 默认导出组件
export default IdeEditor