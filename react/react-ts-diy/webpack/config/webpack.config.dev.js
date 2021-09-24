const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.resolve(__dirname, "../public/index.html"),
});

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "../src/index.tsx"),
  output: {
    path: path.resolve(__dirname, "../build"),
    filename: "js/[name].[hash].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // 将 JS 字符串生成为 style 节点
          "style-loader",
          // 将 CSS 转化成 CommonJS 模块
          "css-loader",
          // 将 Sass 编译成 CSS
          "sass-loader",
        ],
      },
    ],
  },

  plugins: [htmlWebpackPlugin],

  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};
