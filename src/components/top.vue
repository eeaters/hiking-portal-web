<template>
  <div class="container">
    <div class="menu-container">
      <el-menu
          :default-active="activeIndex"
          background-color="#F7F7F7"
          class="el-menu-demo"
          mode="horizontal"
          :ellipsis="false"
          @select="handleSelect"
      >
        <el-menu-item index="0">
          <img
              style="width: 60px"
              src="@/assets/步行徒步.svg"
              alt="Element logo"
          />
        </el-menu-item>
        <div class="flex-grow"/>
        <el-menu-item index="1">最近活动</el-menu-item>
        <el-menu-item index="2">热门路线</el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue'

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style>
.container {
  display: block;
  height: 60px;
  background-color: #F7F7F7;
  border-bottom: 1px solid #DCDFE6;
  .menu-container{
    max-width: 1200px;
    margin: 0 auto;
    .flex-grow {
      flex-grow: 1;
    }
  }
}
</style>