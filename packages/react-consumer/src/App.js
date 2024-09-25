import NuxtApp from "./SetupFederation.js";
import React, { useEffect, useRef, useState } from "react";
import { initializeEventBus } from "./eventBus.js";
const App = () => {
  useEffect(() => {
    initializeEventBus();
  }, []);
  return (
    <div>
      <NuxtApp></NuxtApp>
    </div>
  );
};

export default App;
