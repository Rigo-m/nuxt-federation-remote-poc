import { ref } from "vue";

export default {
  name: "Button",
  setup() {
    const clickedCount = ref(0);
    const incrementCount = () => (clickedCount.value += 1);

    return { clickedCount, incrementCount };
  },
  template: `
    <div class="layout-app">
      {{ clickedCount }}
      <button @click="incrementCount"> Increment in vue</button>
    </div>
  `,
};
