const webpack = require('webpack')
const path = require('path')

const pkg = require('../package.json')

const rootPath = path.resolve(__dirname, '../')

const config = {
  entry: path.resolve(rootPath, 'dist/src/browser', 'index.js'),
  output: {
    filename: `${pkg.name}.js`,
    path: path.resolve(rootPath, 'lib'),
    library: `${pkg.name}`,
    libraryTarget: 'umd' // http://www.imooc.com/article/10969
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: "babel-loader",
    }]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
}

module.exports = config
