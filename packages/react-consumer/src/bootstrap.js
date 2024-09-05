import App from "./App.js";
import React from "react";
import ReactDOM from "react-dom";
import { createApp, defineAsyncComponent } from "vue";

ReactDOM.render(<App />, document.getElementById("root"));

// const AsyncButton = defineAsyncComponent(
//   async () => await import("layout/Test"),
// );
// const AsyncButtonNuxt = defineAsyncComponent(
//   async () => await import("layoutnuxt/Test"),
// );

// const VueAppHeader = {
//   components: {
//     Button: AsyncButton,
//     ButtonNuxt: AsyncButtonNuxt,
//   },
//   template: `
//     <h1>Vue in React</h1>
//     <div class="app">
//       <Button/>
//       <ButtonNuxt />
//     </div>
//   `,
// };
// const VueAppFooter = {
//   components: {
//     Button: AsyncButton,
//   },
//   template: `
//     <div class="app">
//       <Button />
//     </div>
//   `,
// };
//
// createApp(VueAppHeader).mount("#header");
// createApp(VueApp).mount("#footer");
