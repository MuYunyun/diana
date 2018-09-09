<div align="center">
  <img src="http://oqhtscus0.bkt.clouddn.com/dcce7b9509a0e23f91d8cd2aa3ecffd3.jpg-200">
</div>

[![npm version](https://badge.fury.io/js/diana.svg)](https://badge.fury.io/js/diana) [![week download](https://img.shields.io/npm/dw/diana.svg)](https://www.npmjs.com/package/diana) ![Build Status](https://travis-ci.org/MuYunyun/diana.svg?branch=master) [![codecov](https://codecov.io/gh/MuYunyun/diana/branch/master/graph/badge.svg)](https://codecov.io/gh/MuYunyun/diana) ![LICENSE MIT](https://img.shields.io/npm/l/diana.svg)

前端定制化工具库

* 使用 TypeScript 构建(更为友好地支持装饰器等语法)
* 支持 Browser、Node 两端
* 支持按需加载

### Install

```bash
npm install diana --save
```

### Usage

> [使用文档](http://muyunyun.cn/diana/) :tada:

```js
import * as _ from 'diana'    // browser
// const _ = require('diana') // node.js
const isEqual = _.equal([1, 2, 3], [1, 2, 3]) // true
```

> 配合使用 [babel-plugin-on-demand-loading](https://github.com/demos-platform/babel-plugin-on-demand-loading) 可以实现按需加载，体积能极大的减小。

与此同时该库后续会集成一些有用的装饰器函数，比如目前可以像如下使用防抖函数：

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

[按需加载实践](https://github.com/MuYunyun/diana/issues/5)

### Contribute

If you want to contrubute this proj, you can read [how to pr](https://github.com/MuYunyun/diana/blob/master/.github/PULL_REQUEST_TEMPLATE.md)
