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