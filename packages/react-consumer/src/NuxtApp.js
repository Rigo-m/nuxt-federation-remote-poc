/* eslint-disable no-underscore-dangle */

import React, { useEffect, useRef, useState } from "react";
// import { mount } from 'vuefooter/Footer';
// setup runtime config
await import("layoutnuxt/runtimeConfig");

const NuxtAppLazy = await import("layoutnuxt/app");

const NuxtApp = () => {
  const ref = useRef(null);

  useEffect(() => {
    const { setup } = NuxtAppLazy;
    setup();
  }, []);

  // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
  return <div id="__nuxt" ref={ref} />;
};

export default NuxtApp;
