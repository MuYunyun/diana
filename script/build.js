const fs = require('fs')
const path = require('path')
const ora = require('ora')
const { rollup } = require('rollup')
const commenjs = require('rollup-plugin-commonjs')
const { terser } = require('rollup-plugin-terser')
const pkg = require('../package.json')
const rootPath = path.resolve(__dirname, '../')

let building = ora('building...')

async function buildNode() {
  try {
    const result = await rollup({
      input: path.resolve(rootPath, 'dist/src/node', 'index.js'),
      plugins: [
        commenjs(),
        terser(),
      ],
      external: ['tslib']
    })
    await result.write({
      file: `lib/${pkg.name}.back.js`,
      format: 'esm',
    })
  } catch (e) {
    throw e
  }
}

async function buildBrowser() {
  try {
    const result = await rollup({
      input: path.resolve(rootPath, 'dist/src/browser', 'index.js'),
      plugins: [
        commenjs(),
        terser(),
      ],
      external: ['tslib']
    })
    await result.write({
      file: `lib/${pkg.name}.js`,
      format: 'esm',
    })
  } catch (e) {
    throw e
  }
}

// 导出单个函数
async function buildSingleFn() {
  const targetPath1 = path.resolve(__dirname, '../', 'dist/src/')
  const dir1 = fs.readdirSync(targetPath1)
  dir1.map(type => {
    const targetPath2 = path.resolve(__dirname, '../', `dist/src/${type}`)
    const dir2 = fs.readdirSync(targetPath2)
    dir2.map(fnType => {
      if (/index.js/.test(fnType)) return
      const targetPath3 = path.resolve(__dirname, '../', `dist/src/${type}/${fnType}`)
      const dir3 = fs.readdirSync(targetPath3)
      dir3.map(fn => {
        if (/.map/.test(fn)) return
        const targetPath4 = path.resolve(__dirname, '../', `dist/src/${type}/${fnType}/${fn}`)
        // 读取目标文件并处理引用路径后写到 lib 目录
        fs.readFile(targetPath4, (err, data) => {
          const handleContent = data.toString().replace(/require\("[./\w]*"\)/, (match) => {
            // match 为 require("../collection/each") => require("./each")
            const splitArr = match.split('/')
            const lastStr = splitArr[splitArr.length - 1].slice(0, -2)
            const handleStr = `require('./${lastStr}')`
            return handleStr
          })
          const libPath = path.resolve(__dirname, '../', 'lib')
          fs.writeFileSync(`${libPath}/${fn}`, handleContent)
        })
      })
    })
  })
}

async function build() {
  if (!fs.existsSync(path.resolve(__dirname, '../', 'lib'))) {
    fs.mkdirSync(path.resolve(__dirname, '../', 'lib'))
  }
  building.start()
  Promise.all([
    await buildNode(),
    await buildBrowser(),
    await buildSingleFn(),
  ]).then(([result1, result2, result3]) => {
    building.stop()
  }).catch(e => {
    building.stop()
    throw e
  })
}

build()