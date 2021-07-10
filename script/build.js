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
const pkg = require('../package.json')

let building = ora('building...')

async function buildCJS() {
  try {
    const result = await rollup({
      input: path.resolve('src', 'index.ts'),
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

async function buildEs() {
  try {
    const result = await rollup({
      input: path.resolve('src', 'index.ts'),
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
  const tsProject = ts.createProject('tsconfig.build.json', {
    module: esModule ? 'ES2015' : 'CommonJS'
  })
  const tsResult = tsProject
    .src()
    .pipe(tsProject())
  return merge([
    tsResult.js.pipe(gulp.dest(dir)),
    tsResult.dts.pipe(gulp.dest(dir))
  ])
}

function clean() {
  return del(['es', 'lib'])
}

function build() {
  building.start()
  clean()
  // build for single function
  compileTS('es', true)
  compileTS('lib', false)
  // build entire package
  buildCJS()
  // build entire package
  buildEs()
  building.stop()
}

build()