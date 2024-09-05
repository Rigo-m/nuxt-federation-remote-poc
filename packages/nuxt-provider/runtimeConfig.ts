// @ts-ignore
import { runtimeConfig } from "virtual:nuxt-runtime-config";

const baseURL = "http://localhost:3000/";
// @ts-ignore
window.__NUXT__ = {
  serverRendered: false,
  config: {
    public: { ...runtimeConfig.public },
    app: { ...runtimeConfig.app, baseURL, cdnURL: baseURL },
  },
  data: {},
  state: {},
};
