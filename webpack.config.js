module.exports = {
  mode: 'production',
  output: {
    path: __dirname+'/dist',
    filename: "index.js",
  },
  module: {
    rules: [
      {
        exclude: /src/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
}
