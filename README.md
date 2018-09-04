<div align="center">
  <img src="http://oqhtscus0.bkt.clouddn.com/dcce7b9509a0e23f91d8cd2aa3ecffd3.jpg-200">
</div>

![Build Status](https://travis-ci.org/MuYunyun/diana.svg?branch=master) [![codecov](https://codecov.io/gh/MuYunyun/diana/branch/master/graph/badge.svg)](https://codecov.io/gh/MuYunyun/diana) ![LICENSE MIT](https://img.shields.io/npm/l/express.svg)

轻量级定制化工具库（支持 `browser` 和 `node` 环境）

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

同时也加了一些有用的装饰器函数，例如可以像如下使用防抖函数：

```js
import { Debounce } from 'diana'
class Demo {
  @Debounce(1000)
  submit() {
    // call api
  }
}
```

### Contribute

Before submitting a pull request, please make sure read [how to pr](https://github.com/MuYunyun/diana/blob/master/.github/PULL_REQUEST_TEMPLATE.md)

### Todo

- [ ] 将 diana 的函数进行拆分打包
- [ ] 实现相应的按需加载 babel 插件