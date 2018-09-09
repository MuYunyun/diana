# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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