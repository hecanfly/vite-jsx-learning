<template>
  <el-menu mode="horizontal">
    <el-menu-item index="1">
      <router-link to="/">学习JSX</router-link>
    </el-menu-item>
    <el-sub-menu index="2">
      <template #title>基础内容</template>
      <el-menu-item index="2-1">
        <router-link to="/base/props">Props</router-link>
      </el-menu-item>
      <el-menu-item index="2-2">
        <router-link to="/base/emits">Emits</router-link>
      </el-menu-item>
      <el-menu-item index="2-3">
        <router-link to="/base/slots-vue">Vue中的插槽</router-link>
      </el-menu-item>
      <el-menu-item index="2-4">
        <router-link to="/base/slots-jsx">JSX中的插槽</router-link>
      </el-menu-item>
    </el-sub-menu>
  </el-menu>

  <RouterView></RouterView>
</template>

<script lang="ts" setup>
</script>
