<template>
  <div>
    <div><slot name="slot1" :slotData="data"></slot></div>
  </div>
</template>
<script setup lang="ts">
import {ref} from "vue";

const data = ref({name:"子组件传递来的值"})
</script>