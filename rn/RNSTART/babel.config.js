module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@api': ['./src/api'],
          '@components': ['./src/components/*'],
          '@pages/*': ['./src/pages/*'],
          '@models': ['./src/models'],
          '@res': ['./src/res'],
        },
      },
    ],
  ],
};
