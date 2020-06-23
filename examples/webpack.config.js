const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: {
    // main: [path.resolve(__dirname, "app/main.js")]
    main: ["./app/main.js"]
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' },
      { test: /\.vue$/, use: 'vue-loader' },
    ]
  },
  output: {
    path: path.join(__dirname, '__build__'),
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    publicPath: '/__build__/'
  },
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.common.js',
      'vue-plugin': path.join(__dirname, '..', 'dist')
    }
  },
  context: __dirname,
  node: {
    __dirname: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      // template: path.resolve(__dirname, "app/index.html"),
      template: "./app/index.html",
    }),
    new VueLoaderPlugin(),
  ]
};