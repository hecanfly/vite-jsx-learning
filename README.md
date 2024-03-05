# JSX 学习

## 开始

### 创建项目

参考：[https://cn.vitejs.dev/guide/](https://cn.vitejs.dev/guide/)

```bash
pnpm create vite
```

安装、启动

```bash
pnpm install
pnpm run dev
```

访问：[http://127.0.0.1:5173/](http://127.0.0.1:5173/)

## 引入JSX

参考：[https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue-jsx](https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue-jsx)

安装

```bash
pnpm install @vitejs/plugin-vue-jsx -D
```

配置

在`vite.config.ts`文件中增加两行

```typescript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
+ import vueJsx from "@vitejs/plugin-vue-jsx"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
+     vueJsx()
  ],
})
```

验证

修改App.vue文件内容如下：

```typescript
<script lang="ts" setup>
import HelloTSX from "./component/HelloTSX";
</script>
<template>
  <HelloTSX></HelloTSX>
</template>

```

在`component`文件夹下创建`HelloTSX.tsx`文件

```typescript
import { defineComponent } from "vue";

export default defineComponent({
  name: "HelloTSX",
  setup(props, ctx) {
    return () => <h1>Hello TSX</h1>;
  },
});

```

访问页面，能看到`Hello TSX`字样，表示配置正常

## 可选

### 引入 vue-router

```bash
pnpm install vue-router
```


## 基础

### defineComponent

### Props

### Emits

### Attrs

### Slots

### Expose

## 案例


## 参考

- [https://github.com/vuejs/babel-plugin-jsx/blob/HEAD/packages/babel-plugin-jsx/README-zh_CN.md](https://github.com/vuejs/babel-plugin-jsx/blob/HEAD/packages/babel-plugin-jsx/README-zh_CN.md)
- 