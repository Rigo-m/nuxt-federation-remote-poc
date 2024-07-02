import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import { createApp, defineAsyncComponent } from "vue";

ReactDOM.render(<App />, document.getElementById("root"));
const AsyncButton = defineAsyncComponent(
  async () => await import("vuebutton/Button"),
);
const VueApp = {
  components: {
    Button: AsyncButton,
  },
  template: `
    <h1>Vue in React</h1>
    <div class="app">
      <Button />
    </div>
  `,
};

createApp(VueApp).mount("#vue");
