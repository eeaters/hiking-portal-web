<template>
  <div>
    <el-select
        v-model="selectValue"
        clearable
        filterable
        placeholder="输入俱乐部名称"
        style="width: 240px"
    >
      <el-option
          v-for="item in options"
          :key="item"
          :value="item"
      />
    </el-select>
  </div>
</template>

<script setup lang="ts">

import {ref, watch} from "vue";

const props = defineProps<{
  modelValue?: string;
  options: String[];
}>();

const selectValue = ref<string>(props.modelValue);
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>()

watch(selectValue, (newValue) =>{
  emit("update:modelValue", newValue);
})

</script>

<style scoped>

</style>