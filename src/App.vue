<script setup lang="ts">
import { ref } from "vue";
const value1 = ref();
</script>

<template>
  <div>
    开始项目
    <a-date-picker v-model:value="value1" />
  </div>
</template>

<style scoped></style>
