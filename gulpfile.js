const gulp = require('gulp')
const ts = require('gulp-typescript')
const merge = require('merge2')
const del = require('del')
const fs = require('fs')
const path = require('path')
const ora = require('ora')
const { rollup } = require('rollup')
const commenjs = require('@rollup/plugin-commonjs')
const typescript = require('@rollup/plugin-typescript')
const { terser } = require('rollup-plugin-terser')
const pkg = require('./package.json')
// const rootPath = path.resolve(__dirname, '/')

let building = ora('building...')

async function buildNode() {
  try {
    const result = await rollup({
      input: path.resolve('src/common', 'index.ts'),
      plugins: [
        typescript(),
        commenjs(),
        terser(),
      ],
    })
    await result.write({
      file: `lib/${pkg.name}.back.js`,
      format: 'cjs',
    })
  } catch (e) {
    throw e
  }
}

async function buildBrowser() {
  try {
    const result = await rollup({
      input: path.resolve('src/browser', 'index.ts'),
      plugins: [
        typescript(),
        commenjs(),
        terser(),
      ],
    })
    await result.write({
      file: `es/${pkg.name}.js`,
      format: 'esm',
    })
  } catch (e) {
    throw e
  }
}

function compileTS(dir, esModule) {
  console.log('compileTS')
  const tsProject = ts.createProject('tsconfig.build.json', {
    module: esModule ? 'ES2015' : 'CommonJS'
  })
  const tsResult = tsProject.src().pipe(tsProject())
  return merge([tsResult.js.pipe(gulp.dest(dir)), tsResult.dts.pipe(gulp.dest(dir))])
}

function compileES() {
  buildBrowser()
  return compileTS('es', true)
}

function compileCJS() {
  buildNode()
  return compileTS('lib', false)
}

function clean() {
  return del(['es', 'lib'])
}

exports.default = gulp.series(
  clean,
  gulp.parallel(compileES, compileCJS),
)
