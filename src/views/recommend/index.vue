<template>
  <div class="recommend-container">
    <Road/>
    <div class="explore">
      <h1>星文章</h1>
      <div class="activity">
        <Card class="activity-item" v-for="item in 9" :key="item"></Card>
      </div>
    </div>



    <div class="explore">
      <h1>星博主</h1>
      <div class="activity">
        <Card class="activity-item" v-for="item in 9" :key="item"></Card>
      </div>
    </div>
  </div>


</template>

<script setup lang="ts">

import Card from "@/views/home/card/index.vue";
import Road from "@/views/home/road/index.vue";
</script>

<style scoped lang="scss">
.recommend-container{
  margin: 10px 0;
  font-family: 'Cinzel Decorative', cursive;
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