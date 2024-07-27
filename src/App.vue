
<template>
  <div class="common-layout">
    <el-container>
      <el-header>
          <div class="menu-container">
            <el-menu
                :default-active="$router.path"
                router
                background-color="#F7F7F7"
                class="el-menu"
                mode="horizontal"
                :ellipsis="false"
                active-text-color="F7F7F7"
            >
              <el-menu-item index="/">
                <img
                    style="width: 60px"
                    src="@/assets/步行徒步.svg"
                    alt="walking logo"
                />
                <p style="font-weight: 600; font-size: 28px; margin-left:10px">沪外徒步</p>
              </el-menu-item>
              <div class="flex-grow"/>
              <el-menu-item index="/recently">最近活动</el-menu-item>
              <el-menu-item index="/hot">热门路线</el-menu-item>
            </el-menu>
          </div>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
<!--      <el-footer>Footer</el-footer>-->
    </el-container>
  </div>
</template>

<script setup lang="ts">
import {useRoute} from "vue-router";
let $router = useRoute();
</script>


<style scoped lang="scss">
.common-layout{
  .el-header ,.el-main ,.el-footer{
    padding: 0 0 ;
  }
  .el-main{
      max-width: 1200px;
      margin: 0 auto;
  }
  .el-header{
    display: block;
    height: 60px;
    background-color: #F7F7F7;
    border-bottom: 1px solid #DCDFE6;
    .el-menu{
      max-width: 1200px;
      margin: 0 auto;
      .flex-grow {
        flex-grow: 1;
      }
    }
  }
}
</style>
