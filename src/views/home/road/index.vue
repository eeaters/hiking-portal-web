<template>

  <div class="panel">
    <h1>周边古道</h1>
    <ul>
      <li>
        <img src="@/assets/古道/莫干山古道.jpg" alt="">
        <span>莫干山古道</span>
      </li>
      <li>
        <img src="@/assets/古道/吴越古道.jpg" alt="">
        <span>吴越古道</span>
      </li>
      <li>
        <img src="@/assets/古道/上青古道.jpeg" alt="">
        <span>上青古道</span>
      </li>
      <li>
        <img src="@/assets/古道/马岭古道.jpg" alt="">
        <span>马岭古道</span>
      </li>
      <li>
        <img src="@/assets/古道/盐帮古道.jpeg" alt="">
        <span>盐帮古道</span>
      </li>
      <li>
        <img src="@/assets/古道/菩提岭古道.jpg" alt="">
        <span>菩提岭古道</span>
      </li>
      <li>
        <img src="@/assets/古道/黄南古道.jpg" alt="">
        <span>黄南古道</span>
      </li>

      <li>
        <img src="@/assets/古道/宋明古道.jpeg" alt="">
        <span>宋明古道</span>
      </li>
      <li>
        <img src="@/assets/古道/搁船尖古道.jpg" alt="">
        <span>搁船尖古道</span>
      </li>
      <li>
        <img src="@/assets/古道/徽杭古道.jpg" alt="">
        <span>徽杭古道</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.panel{
  margin: 25px 0;
  h1{
    display: block;
    font-size: 18px;
    margin: 0 auto 1em;
    line-height: 1;
    color: #333;
    width: 90%;
    max-width: 1024px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    unicode-bidi: isolate;
  }
  ul{
    display: flex;
    li{
      display: flex;
      flex-direction: column;
      align-items: center;
      img{
        width: 120px;
        height: 240px;
        margin-bottom: 8px;
      }
    }
  }
}
</style>