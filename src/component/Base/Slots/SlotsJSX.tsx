import {defineComponent} from "vue";

const SonComponent = defineComponent({
    name: "SonComponent",
    props: {
        data: {
            type: Object,
            default: function () {
                return {message: "hello"};
            },
        },
    },
    setup(props, {slots}) {
        return () => {
            return (
                <>
                    {props.data?.message}
                    <div>{slots?.default?.()}</div>
                    <div>{slots?.slot1?.()}</div>
                    <div>{slots?.slot2?.() ?? "默认插槽未传递"}</div>
                </>
            )
        }
    }
})

const MyComponent = defineComponent({
    name: "MyComponent",
    setup() {
        return () => {
            return (
                <SonComponent v-slots={{
                    default: () => <>默认插槽</>,
                    slot1: () => <>slot1插槽</>,
                }}
                />
            )
        }
    }
})

export default MyComponent