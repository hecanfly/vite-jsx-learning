import { PropType, defineComponent, toRaw } from "vue";

type Color = "red" | "blue";

const MyComponent = defineComponent({
  setup() {
    const SonComponent = defineComponent({
      props: {
        isVisible: {
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
            return { message: "hello" };
          },
        },
      },
      setup(props) {
        console.log(toRaw(props));
        
        return () => {
          return (
            <>
            <h1>子组件</h1>
              <p>isVisible：{props.isVisible === true ? "true" : "false"}</p>
              <p>color：{props.color}</p>
              <p>data：{props.data?.message}</p>
            </>
          );
        };
      },
    });
    
    return () => <><h1>父组件</h1><hr/><SonComponent isVisible={true} color={"red"}></SonComponent></>;
  },
});

export default MyComponent;
