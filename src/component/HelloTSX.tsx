import { defineComponent } from "vue";

export default defineComponent({
  name: "HelloTSX",
  setup(props, ctx) {
    return () => <h1>Hello TSX</h1>;
  },
});
