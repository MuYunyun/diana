<div align="center">
  <img src="http://oqhtscus0.bkt.clouddn.com/dcce7b9509a0e23f91d8cd2aa3ecffd3.jpg-200">
</div>

[![npm version](https://badge.fury.io/js/diana.svg)](https://badge.fury.io/js/diana) [![week download](https://img.shields.io/npm/dw/diana.svg)](https://www.npmjs.com/package/diana) ![Build Status](https://travis-ci.org/MuYunyun/diana.svg?branch=master) [![codecov](https://codecov.io/gh/MuYunyun/diana/branch/master/graph/badge.svg)](https://codecov.io/gh/MuYunyun/diana) ![LICENSE MIT](https://img.shields.io/npm/l/express.svg)

前端定制化工具库

* 使用 TypeScript 构建(更为友好地支持装饰器等语法)
* 支持 Browser、Node 两端
* 支持按需加载（相关 babel 插件正在开发）

### Install

```bash
yarn add diana || npm install diana --save
```

### Usage

> [使用文档](http://muyunyun.cn/diana/) :tada:

```js
import * as _ from 'diana'    // browser
// const _ = require('diana') // node.js
const isEqual = _.equal([1, 2, 3], [1, 2, 3]) // true
```

同时集成了一些有用的装饰器函数，例如可以像如下使用防抖函数：

```js
import { Debounce } from 'diana'
class Demo {
  @Debounce(1000)
  submit() {} // 点击按钮
}
```

### Develop Process

[更新日志](https://github.com/MuYunyun/diana/blob/master/CHANGELOG.md)

[关于 diana](https://github.com/MuYunyun/diana/issues/1)

### Contribute

Before submitting a pull request, make sure read [how to pr](https://github.com/MuYunyun/diana/blob/master/.github/PULL_REQUEST_TEMPLATE.md)
