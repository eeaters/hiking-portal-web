<template>
  <div class="top">
    <div class="left">
      <div class="slogon">
        <div class="title">新一代徒步"沪"外徒步</div>
        <div class="introduce">随心出发，自在归来，成为你探索世界的个人向导</div>
      </div>
      <div class="guide">
        <button>视频介绍</button>
      </div>
    </div>
    <div class="right">
      <img src="@/assets/武功山.jpeg" alt="">
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  .left, .right {
    width: 600px;
  }

  .left {
    .slogon {
      .title {
        font-size: 40px;
        font-weight: 600;
      }

      .introduce {
        font-size: 24px;
        margin-top: 12px;
      }
    }

    .guide {
      display: inline-flex;
      height: 37px;
      border-radius: 37px;
      box-sizing: border-box;
      border: 1px solid rgba(0, 0, 0, 0.15);
      background-color: rgb(255, 255, 255);
      align-items: center;
      justify-content: center;
      padding: 0 40px;
      color: rgb(61, 61, 61);
      outline: none;
      line-height: normal;
      cursor: pointer;
      margin-top: 80px;
    }
  }
}
</style>