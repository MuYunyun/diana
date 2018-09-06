const path = require('path')

const pkg = require('../package.json')
const rootPath = path.resolve(__dirname, '../')

const config = {
  entry: path.resolve(rootPath, 'dist/src/node', 'index.js'),
  mode: "production",
  output: {
    filename: `${pkg.name}.back.js`,
    path: path.resolve(rootPath, 'lib'),
    library: `${pkg.name}`,
    libraryTarget: 'umd'
  }
}

module.exports = config
