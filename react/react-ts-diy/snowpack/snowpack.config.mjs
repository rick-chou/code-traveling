/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    // 静态资源路径
    public: { url: '/', static: true },
    // 打包路径
    src: { url: '/dist' },
  },
  // 配置一些插件
  plugins: [
    '@snowpack/plugin-sass',
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-typescript',
  ],
};
