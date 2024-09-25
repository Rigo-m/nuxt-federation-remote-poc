/* eslint-disable no-underscore-dangle */

import React, { useEffect, useRef, useState } from "react";
// import { mount } from 'vuefooter/Footer';
// setup runtime config

const { setupHeader } = await import("layoutnuxt/app");

const Footer = () => {
  const headerRef = useRef(null);
  useEffect(() => {
    const setupTheHeader = async () => {
      const { mount } = await setupHeader();
      const instance = await mount(headerRef.current);
      console.log(instance);
    };
    setupTheHeader();
  }, []);

  // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
  return <div id="header" ref={headerRef}></div>;
};

export default Footer;
