<template>
  <div class="container-fluid">
    <Intro/>
    <hr/>
    <Road/>
    <hr/>


    <div class="explore">
      <h1>热门户外俱乐部</h1>
      <div class="activity">
        <Card class="activity-item" v-for="item in 9" :key="item"></Card>
      </div>
    </div>

    <hr/>

    <div class="explore">
      <h1>活动探索</h1>
      <div class="activity">
        <Card class="activity-item" v-for="item in 9" :key="item"></Card>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import Intro from './intro/index.vue'
import Card from './card/index.vue'
import Road from './road/index.vue'
</script>

<style scoped lang="scss">
.container-fluid {
  margin: 10px 0;
  font-family: 'Cinzel Decorative', cursive;
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
  .explore {
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
    .activity{
      display: flex;
      flex-wrap: wrap;
      .activity-item{
        width: 31%;
        margin: 10px 10px;
      }
    }
  }
}

</style>