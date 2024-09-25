/* eslint-disable no-underscore-dangle */

import React, { useEffect, useRef, useState } from "react";
// import { mount } from 'vuefooter/Footer';
// setup runtime config

const { setupFooter } = await import("layoutnuxt/app");

const Footer = () => {
  const footerRef = useRef(null);
  useEffect(() => {
    const setupTheFooter = async () => {
      const { mount } = await setupFooter();
      await mount(footerRef.current);
    };
    setupTheFooter();
  }, []);

  // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
  return <div id="footer" ref={footerRef}></div>;
};

export default Footer;
