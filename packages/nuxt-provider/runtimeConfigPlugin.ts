/**
 * Provide the runtime config of the Nuxt app as a virtual module.
 */
export default function nuxtRuntimeConfigPlugin() {
  const virtualModuleId = "virtual:nuxt-runtime-config";
  const resolvedVirtualModuleId = "\0" + virtualModuleId;

  return {
    name: "nuxt-runtime-config", // required, will show up in warnings and errors
    resolveId(id: string) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId;
      }
    },
    async load(id: string) {
      if (id === resolvedVirtualModuleId) {
        // build nuxt, resolve runtime config and inline it as an export
        const { tryUseNuxt } = await import("@nuxt/kit");
        const nuxt = tryUseNuxt();
        if (nuxt) {
          const originalConf = nuxt.options.runtimeConfig;
          const runtimeConfig = {
            public: { ...originalConf.public },
            app: { ...originalConf.app },
          };
          // inject relevant differences in runtimeconfig
          return `export const runtimeConfig = ${JSON.stringify(runtimeConfig)};`;
        }
        return `export const runtimeConfig = ${JSON.stringify({})};`;
      }
    },
  };
}
