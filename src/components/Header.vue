<template>
  <div class="header">
    <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        :ellipsis="false"
        @select="handleSelect"
    >
      <el-menu-item index="0">
        <svg t="1688802443210" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="894" width="64" height="64"><path d="M508 672H244c-90.4 0-164-73.6-164-164s73.6-164 164-164h264c90.4 0 164 73.6 164 164s-73.6 164-164 164z" fill="#C3D2FB" p-id="895"></path><path d="M692.8 672H498.4C352 672 232 552 232 405.6v-51.2C232 208 352 88 498.4 88 660 88 792 220 792 381.6v191.2c0 54.4-44.8 99.2-99.2 99.2z" fill="#7094F3" p-id="896"></path><path d="M488 444a228 228 0 1 0 456 0 228 228 0 1 0-456 0z" fill="#386BF3" p-id="897"></path><path d="M464 752h96v144h-96z" fill="#3D4265" p-id="898"></path></svg>
      </el-menu-item>
      <div class="flex-grow" />
      <el-menu-item index="1" style="height: 66px">首页</el-menu-item>
      <el-sub-menu index="2">
        <template #title>业务</template>
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
        <el-menu-item index="2-3">item three</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="3">
        <template #title>科技</template>
        <el-menu-item index="3-1">item one</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="4">
        <template #title>中心</template>
        <el-menu-item index="4-1">item one</el-menu-item>
        <el-menu-item index="4-2">item two</el-menu-item>
        <el-menu-item index="4-3">item three</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>

</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style>
.flex-grow {
  flex-grow: 0.5;
}
.header {
  top: 0;
  width: 100%;
  height: 67px;
  margin: 0 auto;
  z-index: 11;
}
</style>
