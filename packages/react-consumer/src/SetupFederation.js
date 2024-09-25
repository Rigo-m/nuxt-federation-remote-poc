/* eslint-disable no-underscore-dangle */

import React, { useEffect, useRef, useState } from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
// import { mount } from 'vuefooter/Footer';
// setup runtime config
await import("layoutnuxt/runtimeConfig");

const { setup } = await import("layoutnuxt/app");

const query = window.location.search;
if (query.includes("lang=en")) {
  history.pushState({}, "", "/en-us");
} else if (query.includes("lang=it")) {
  history.pushState({}, "", "/it-it");
}
await new Promise((resolve) => setTimeout(resolve, 1));
await setup();
const NuxtApp = () => {
  const ref = useRef(null);
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
  return (
    <div id="__nuxt" ref={ref}>
      <Header></Header>
      Tailoor content
      <Footer></Footer>
    </div>
  );
};

export default NuxtApp;
