const path = require('path')
const ora = require('ora')
const rm = require('rimraf')
const chalk = require('chalk')
const webpack = require('webpack')

const nodeConfig = require('./webpack.node')
const bsConfig = require('./webpack.browser')
const pkg = require('../package.json')
const rootPath = path.resolve(__dirname, '../')

let building = ora('building...')

async function buildNode() {
  await rm(path.resolve(rootPath, 'lib', `${pkg.name}.back.js`), err => {
    if (err) throw { err }
    webpack(nodeConfig, (err, stats) => {   // https://webpack.js.org/api/compiler/
      if (err) throw err
      process.stdout.write(stats.toString({
        colors: true,   // Shows colors in the console
        chunks: false,  // Makes the build much quieter
        modules: false,
        children: false,
        chunkModules: false
      }) + '\n\n')
      console.log(chalk.cyan(' NodeFn Build complete.\n'))
    })
  })
}

async function buildBrowser() {
  await rm(path.resolve(rootPath, 'lib', `${pkg.name}.js`), err => {
    if (err) throw { err }
    webpack(bsConfig, (err, stats) => {
      if (err) throw err
      building.stop()
      process.stdout.write(stats.toString({
        colors: true,
        chunks: false,
        modules: false,
        children: false,
        chunkModules: false
      }) + '\n\n')
      console.log(chalk.cyan(' BrowserFn Build complete.\n'))
    })
  })
}

async function build() {
  building.start()
  Promise.all([
    await buildNode(),
    await buildBrowser()
  ]).then(([result1, result2]) => {
    building.stop()
  }).catch(e => {
    building.stop()
    throw e
  })
}

build()