module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
        alias: {
          '@components': './src/components',
          '@views': './src/views',
          '@utils': './src/utils',
          '@types': './src/types',
          '@router': './src/router',
        },
      },
    ],
  ],
};
