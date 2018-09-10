<div align="center">
  <img src="http://oqhtscus0.bkt.clouddn.com/dcce7b9509a0e23f91d8cd2aa3ecffd3.jpg-200">
</div>

[![npm version](https://badge.fury.io/js/diana.svg)](https://badge.fury.io/js/diana) [![week download](https://img.shields.io/npm/dw/diana.svg)](https://www.npmjs.com/package/diana) ![Build Status](https://travis-ci.org/MuYunyun/diana.svg?branch=master) [![codecov](https://codecov.io/gh/MuYunyun/diana/branch/master/graph/badge.svg)](https://codecov.io/gh/MuYunyun/diana) ![LICENSE MIT](https://img.shields.io/npm/l/diana.svg)

A lightweight fe tool library

### Installation

```bash
yarn add diana || npm install diana --save
```

You can also download [diana.js](https://github.com/MuYunyun/diana/blob/master/lib/diana.js) directly in the browser，it support UMD common module specification.

### Usage

> [Document](http://muyunyun.cn/diana/) :tada:

```js
import _ from 'diana'         // ES6
// const _ = require('diana') // common.js
const isEqual = _.equal([1, 2, 3], [1, 2, 3]) // true
```

And there are some useful decorator methods in the diana, for example as follow:

```js
import { Debounce } from 'diana'
class Demo {
  @Debounce(1000)
  submit() {
    // call api
  }
}
```

### Develop Process

[CHANGELOG](https://github.com/MuYunyun/diana/blob/master/CHANGELOG.md)

[About diana](https://github.com/MuYunyun/diana/issues/1)

### Contribute

Before submitting a pull request, please make sure read [how to pr](https://github.com/MuYunyun/diana/blob/master/.github/PULL_REQUEST_TEMPLATE.md)