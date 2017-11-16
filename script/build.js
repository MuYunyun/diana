const path = require('path')
const fs = require('fs')
const ora = require('ora')
const rm = require('rimraf')
const copy = require('copy')
const chalk = require('chalk')
const webpack = require('webpack')

const config = require('./webpack.config')
const pkg = require('../package.json')
const rootPath = path.resolve(__dirname, '../')

new Promise((resolve, reject) => {
  // 构建浏览器端压缩包
  let building = ora('building...')
  building.start()
  rm(path.resolve(rootPath, 'min', `${pkg.name}.min.js`), err => {
    if (err) throw {err}
    webpack(config, (err, stats) => {   // https://webpack.js.org/api/compiler/
      if (err) throw err
      building.stop()
      process.stdout.write(stats.toString({
        colors: true,  // Shows colors in the console
        chunks: false,  // Makes the build much quieter
        modules: false,
        children: false,
        chunkModules: false
      }) + '\n\n')
      resolve()
      console.log(chalk.cyan('  Build complete.\n'))
    })
  })
}).then(() => {
  // 拷贝函数模块至根目录
  let copying = ora('copying...')
  copying.start()
  rm('*.js', err => {
    if (err) throw err
    let folderList = fs.readdirSync(path.resolve(rootPath, 'src'))
    folderList.forEach((item, index) => {
      copy(`src/${item}/*.js`, rootPath, (err, files) => {
        if (err) throw err
        if (index === folderList.length - 1) {
          console.log(chalk.cyan('  Copy complete.\n'))
          copying.stop()
        }
      })
    })
  })
}).catch((err) => {
  throw err
})