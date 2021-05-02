module.exports = {
  presets: ['module:metro-react-native-babel-preset', 'mobx'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        // extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@': './src'
        }
      }
    ]
  ]
}