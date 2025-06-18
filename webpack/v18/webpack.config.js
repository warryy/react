const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    hot: true,
    port: 8080,
    //  webpack-dev-server 默认只会返回 index.html 给根路径（/），而不会为前端路由（如 /about）返回 index.html。
    //  historyApiFallback 配置项用于将所有不匹配的请求重定向到 index.html，从而支持前端路由。
    // 当用户访问 /about 时，浏览器会请求 /about，但由于没有对应的资源，浏览器会重定向到 /，并返回 index.html。
    // 然后，React Router 会处理 /about 路径，显示 About 组件。
    historyApiFallback: true,
  },
  devtool: "cheap-module-source-map",
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
    }),
  ],
};
