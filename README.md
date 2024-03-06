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

## 引入 JSX

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

修改 App.vue 文件内容如下：

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

参考：[https://blog.csdn.net/weixin_52851967/article/details/128756524](https://blog.csdn.net/weixin_52851967/article/details/128756524)

```bash
pnpm install vue-router
```

### 引入 Element Plus

参考：[https://element-plus.org/zh-CN/guide/installation.html](https://element-plus.org/zh-CN/guide/installation.html)



## 基础

### defineComponent

参考：[https://cn.vuejs.org/api/general.html#definecomponent](https://cn.vuejs.org/api/general.html#definecomponent)

在定义 Vue 组件时提供类型推导的辅助函数。

```typescript
// 函数语法 (需要 3.3+)
function defineComponent(
  setup: ComponentOptions['setup'],
  extraOptions?: ComponentOptions
): () => any
```

### Props

```typescript jsx
import {PropType, defineComponent, toRaw} from "vue";

type Color = "red" | "blue";

const MyComponent = defineComponent({
    setup() {
        const SonComponent = defineComponent({
            props: {
                booleanType: {
                    type: Boolean,
                    default: true,
                    required: true,
                },
                color: {
                    type: String as PropType<Color>,
                },
                data: {
                    type: Object,
                    default: function () {
                        return {message: "hello"};
                    },
                },
            },
            setup(props) {
                console.log(toRaw(props));

                return () => {
                    return (
                        <>
                            <h1>子组件</h1>
                            <p>booleanType:{props.booleanType === true ? "true" : "false"}</p>
                            <p>color：{props.color}</p>
                            <p>data：{props.data?.message}</p>
                        </>
                    );
                };
            },
        });

        return () => (
            <>
                <h1>父组件</h1>
                <hr/>
                <SonComponent booleanType={true} color={"red"} data={{message: "这是自定义的对象"}}></SonComponent>
            </>
        );
    },
});

export default MyComponent;

```

### Emits

v-model在tsx中的写法：[https://cn.vuejs.org/guide/extras/render-function.html#v-model](https://cn.vuejs.org/guide/extras/render-function.html#v-model)

```vue
<script lang="tsx" setup>
import {defineComponent, ref} from "vue";

const curValue = ref<string>("")

const SonComponent = defineComponent({
  props: {},
  emits: ['updateValue'],
  setup(props, {emit}) {
    const input = ref<string>("")
    const updateValue = () => {
      emit("updateValue", input.value)
    }
    return () => {
      return (
          <>
            子组件的值：{input.value}
            <el-input model-value={input.value} onUpdate:modelValue={(val: string) => (input.value = val)}/>
            <el-button onClick={updateValue}>把值传递给父组件</el-button>
          </>
      )
    }
  }
})
</script>

<template>
  父组件的值：{{ curValue }}
  <hr/>
  <SonComponent @updateValue="(v:string)=>(curValue = v)"></SonComponent>
</template>
```

### Attrs

### Slots

[插槽笔记](./插槽.md)

### Expose

## 案例

## 参考

- [https://github.com/vuejs/babel-plugin-jsx/blob/HEAD/packages/babel-plugin-jsx/README-zh_CN.md](https://github.com/vuejs/babel-plugin-jsx/blob/HEAD/packages/babel-plugin-jsx/README-zh_CN.md)
-
