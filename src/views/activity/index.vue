<template>
  <el-form  style=" margin-top: 20px">
    <el-form-item label="徒步公司">
      <CompanySelectComponent v-model="selectCompanyName" :options="allCompanyNames"/>
    </el-form-item>

    <el-form-item label="活动时间">
      <el-radio-group v-model="timeRange" aria-label="size control" @change="handleList">
        <el-radio-button value="0">不限</el-radio-button>
        <el-radio-button value="1">一周</el-radio-button>
        <el-radio-button value="2">一周到两周</el-radio-button>
        <el-radio-button value="3">两周到三周</el-radio-button>
        <el-radio-button value="4">三周到一个月</el-radio-button>
        <el-radio-button value="5">一个月以上</el-radio-button>
      </el-radio-group>
    </el-form-item>

    <el-form-item label="徒步城市" style=" margin-top: 20px">
      <RegionSelectComponent ref="regionComponent" :regions="regionTree" @update="regionUpdate"></RegionSelectComponent>
    </el-form-item>
  </el-form>



<!--    <div class="video-list" v-for="{{viewActivities}}">-->
<!--      <div class="video-item">-->
<!--        <img crossorigin="anonymous" src="https://images.pexels.com/photos/19138372/pexels-photo-19138372.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Video Thumbnail">-->
<!--        <div class="info">-->
<!--          <h4>水里有毒</h4>-->
<!--          <p> 丈量者户外 | 宁波,宁波,海曙区横街镇 </p>-->
<!--        </div>-->
<!--      </div>-->
<!--  -->
  <div class="container">
    <div class="video-list">
      <div class="video-item" v-for="activity in viewActivities" :key="activity.activityName">
        <img crossorigin="anonymous" src="https://images.pexels.com/photos/19138372/pexels-photo-19138372.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Video Thumbnail">
        <div class="info">
          <h4>{{ activity.companyName }}</h4>
          <p>{{ activity.destProvince }}, {{ activity.destCity }}, {{ activity.destDistrict }}</p>
        </div>
      </div>
    </div>


    <div class="paging" style="margin: 0 auto;">

      <el-pagination
          v-model:page-size="pageSize"
          v-model:current-page="pageNum"
          layout="prev, pager, next"
          :total="total"
          @current-change="handleList"
      />
    </div>

  </div>


</template>

<script setup lang="ts">
import {onMounted, ref, watch} from "vue";
import RegionSelectComponent from '@/views/activity/component/region.vue'
import CompanySelectComponent from '@/views/activity/component/company.vue'
import {activity_list} from "@/api/activity";
import {Activity, Region} from "@/api/activity/type.ts";
import {time_shortcuts} from "@/util/dateUtils.ts";

// 基础数据
let allActivity = ref<Activity[]>();
const regionTree = ref<Region[]>();
const allCompanyNames = ref<string[]>([]);

let viewActivities = ref<Activity[]>([]);

onMounted(async () => {
  allActivity.value = await activity_list('上海市');

  // 城市名称
  const companyNameSet = new Set<string>();
  allActivity.value.forEach(item => {
    companyNameSet.add(item.companyName);
  });
  allCompanyNames.value = Array.from(companyNameSet);

  const provinceRegionArray: Region[] = [];
  // 省市区
  allActivity.value.forEach(item => {
    const province = findOrCreateRegion(item.destProvince, provinceRegionArray);
    const city = findOrCreateRegion(item.destCity, province.children);
    findOrCreateRegion(item.destDistrict, city.children);
  });
  regionTree.value = provinceRegionArray;

  console.log(regionTree.value)
  handleList();
});

//筛选条件
let timeRange = ref<string>(0);
let regionComponent = ref<InstanceType<typeof RegionSelectComponent>>();
let selectCompanyName = ref<string>();
let selectProvince = ref<string>();
let selectCity = ref<string>();
let selectDistrict = ref<string>();


let total = ref<number>();
let pageNum = ref<number>(1);
let pageSize = ref<number>(6);

watch(selectCompanyName, (newValue) => {
  handleList();
});

const regionUpdate = () => {
  if (regionComponent.value) {
    selectProvince.value = regionComponent.value.province;
    selectCity.value = regionComponent.value.city;
    selectDistrict.value = regionComponent.value.district;
  }
  handleList();
};

const handleList = () => {
  let filtered = allActivity.value;

  if (selectCompanyName.value) {
    filtered = filtered.filter(item => item.companyName === selectCompanyName.value);
  }
  if (selectProvince.value) {
    filtered = filtered.filter(item => item.destProvince === selectProvince.value);
  }
  if (selectCity.value) {
    filtered = filtered.filter(item => item.destCity === selectCity.value);
  }
  if (selectDistrict.value) {
    filtered = filtered.filter(item => item.destDistrict === selectDistrict.value);
  }

  let startDate = time_shortcuts[timeRange.value].value()[0]
  let endDate = time_shortcuts[timeRange.value].value()[1]

  filtered = filtered.filter(item => {
    const activityDate = new Date(item.activityStartTime);
    let  compareDate = new Date(activityDate.getFullYear(), activityDate.getMonth(), activityDate.getDate());
    return compareDate >= startDate && compareDate <= endDate;
  });

  const start = (pageNum.value - 1) * pageSize.value;
  const end = start + pageSize.value;
  viewActivities.value = filtered.slice(start, end);
};


// 工具方法
function findOrCreateRegion(name: string, regions: Region[]) {
  let region = regions.find(r => r.name === name);
  if (!region) {
    region = {name, children: []}
    regions.push(region);
  }
  return region;
}

</script>

<style scoped lang="scss">
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f5f5f5;
}
.navbar {
  background-color: #fff;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.navbar a {
  margin: 5px;
  padding: 8px 16px;
  text-decoration: none;
  color: #333;
  border-radius: 4px;
}
.navbar a:hover {
  background-color: #f0f0f0;
}
.container {
  padding: 20px;
}
.banner {
  position: relative;
  margin-bottom: 20px;
}
.banner img {
  width: 100%;
  border-radius: 8px;
}
.video-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.video-item {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  overflow: hidden;
  width: calc(33.333% - 10px);
  margin-bottom: 20px;
}
.video-item img {
  width: 100%;
  height: auto;
}
.video-item .info {
  padding: 10px;
}
.video-item .info h4 {
  margin: 0;
  font-size: 16px;
  color: #333;
}
.video-item .info p {
  margin: 5px 0;
  font-size: 14px;
  color: #777;
}
</style>