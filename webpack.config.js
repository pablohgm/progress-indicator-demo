let path = require('path');

module.exports = {
    entry: "./app.js",
    output: {
      filename: "bundle.js",
      path: path.join(__dirname, "public"),
      publicPath: "public",
    },
    watch: true,
    devServer: {
      port: 9000
    },
    module: {
      rules: [
          {
              test: /\.js$/,
              exclude: /node_modules/,
              use: 'babel-loader'
          },
          {
              test: /\.html$/,
              exclude: /node_modules/,
              use: {loader: 'html-loader'}
          },
          {
            test: /\.css$/,
            use: [ 'css-loader' ]
          },
          {
            test: /\.svg$/,
            loader: 'svg-inline-loader'
        }
      ]
  }
}