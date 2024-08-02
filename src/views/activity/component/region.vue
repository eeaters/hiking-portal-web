<template>
  <div>
    <el-select
        v-model="province"
        placeholder="省"
        style="width: 240px"
        @change="changeProvince"
        clearable
    >
      <el-option
          v-for="item in provinceOptions"
          :key="item.name"
          :value="item.name"

      />
    </el-select>
    <el-select v-model="city" placeholder="市" style="width: 240px" @change="changeCity"  clearable>
      <el-option
          v-for="item in cityOptions"
          :key="item.name"
          :value="item.name"

      />
    </el-select>
    <el-select
        v-model="district"
        placeholder="区"
        style="width: 240px"
        @change="changeDistrict"
        clearable
    >
      <el-option
          v-for="item in districtOptions"
          :key="item.name"
          :value="item.name"
      />
    </el-select>
  </div>
</template>

<script setup lang="ts">
import {ref, watch} from 'vue';
import { Region } from '@/api/activity/type.ts';

const props = defineProps<{
  regions?: Region[];
}>();

const emit = defineEmits<{
  (e: 'update'): void;
}>();

const provinceOptions = ref<Region[]>([]);
const province = ref<string>('');
const cityOptions = ref<Region[]>([]);
const city = ref<string>('');
const districtOptions = ref<Region[]>([]);
const district = ref<string>('');

const changeProvince = () => {
  const selectedProvince = provinceOptions.value.find(item => item.name === province.value);
  cityOptions.value = selectedProvince ? selectedProvince.children : [];

  city.value = '';
  district.value = '';
  districtOptions.value = [];
  emit('update');
};

const changeCity = () => {
  const selectedCity = cityOptions.value.find(item => item.name === city.value);
  districtOptions.value = selectedCity ? selectedCity.children : [];

  district.value = '';
  emit('update');
};


const changeDistrict = ()=>{
  emit('update');
}


watch(() => props.regions, (newRegions) => {
  if (newRegions) {
    provinceOptions.value = newRegions;
  }
});

defineExpose({
  province,
  city,
  district,
});
</script>

<style scoped>

</style>