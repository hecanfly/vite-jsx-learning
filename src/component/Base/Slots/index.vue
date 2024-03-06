<script setup lang="ts">
import Son from "./Son.vue";
</script>

<template>
  <Son>
    <template v-slot:slot1="{slotData}">{{ slotData.name }}</template>
  </Son>

</template>
