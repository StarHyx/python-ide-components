<template>
  <div id="app">
    <IdeEditor
      :value='code1'
    ></IdeEditor>
    <IdeEditor
      :value='code2'
    ></IdeEditor>
  </div>
</template>

<script>
import pyTest from './test/pytest.js'
export default {
  name: 'app',
  components: {
  },
  data() {
    return {
      code1: pyTest.testCode1,
      code2: pyTest.testCode2,
    }
  },
  mounted() {
    console.log('编辑器加载成功');
  }
}
</script>

<style>
</style>