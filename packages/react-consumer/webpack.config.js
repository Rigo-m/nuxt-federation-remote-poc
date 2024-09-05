import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import path from "path";
import { fileURLToPath } from "url";
const __dirname = fileURLToPath(import.meta.url);

const { ModuleFederationPlugin } = webpack.container;
export default {
  entry: "./src/index",
  mode: "development",
  experiments: {
    outputModule: true,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 3002,
  },
  output: {
    publicPath: "auto",
  },
  resolve: {
    alias: {
      vue: "vue/dist/vue.esm-bundler.js",
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      library: { type: "module" },
      name: "react",
      remotes: {
        // layout: "http://localhost:3000/assets/remoteEntry.js",
        layoutnuxt: "http://localhost:3000/_nuxt/remoteEntry.js",
      },
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      scriptLoading: "defer",
      inject: false,
    }),
  ],
};
