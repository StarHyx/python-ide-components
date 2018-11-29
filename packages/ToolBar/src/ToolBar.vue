<template>
<div id="toolBar">
  <el-row>
    <i class="el-icon-upload toolbar-item"></i>
    <i class="el-icon-download toolbar-item"></i>
    <i class="el-icon-delete toolbar-item"></i>
    <i class="el-icon-setting toolbar-item"></i>
   </el-row>
</div>
</template>

<script>
export default {
  name: 'ToolBar'
}
</script>

<style>
.toolbar-item {
  margin-right: 40px;
  font-size: 30px;
  margin-bottom: 20px;
}
</style>
