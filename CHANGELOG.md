# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.5.3] 2019-03-04

* 使用 `Rollup` 代替 `Webpack`

## [0.5.2] 2019-01-01

### Chore

* 移除 `lib` 目录, `travis.yml` 中完成 `build`

## [0.5.1] 2018-09-11

### Features

* 增加 round 函数

## [0.4.9] 2018-9-10

### Features

* [相关按需加载 babel 插件](https://github.com/demos-platform/babel-plugin-on-demand-loading)实现

### Removed

* 移除 getNextElement，可以使用原生 api —— nextElementSibling

## [0.4.8] 2018-9-7

### Features

* 将函数模块单独导出，给按需加载创造条件

### Fixed

* 修复 webpack 在 Node.js 端打包包含 window 字段

## [0.4.6] 2018-9-6

### Refactored

* 将串行打包改为并行打包

## [0.4.1] 2018-7-29

### Refactored

* 用 TypeScript 重构项目