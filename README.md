# diana

![Build Status](https://travis-ci.org/MuYunyun/diana.svg?branch=master) [![codecov](https://codecov.io/gh/MuYunyun/diana/branch/master/graph/badge.svg)](https://codecov.io/gh/MuYunyun/diana) ![LICENSE MIT](https://img.shields.io/npm/l/express.svg)

![](http://oqhtscus0.bkt.clouddn.com/5aa428c1014d75db4d2d331fb2b41334.jpg-muyy)

A lightweight tool library (Support for `browser` and `node` environments)

> [文档地址](http://muyunyun.cn/diana/) :tada:

### Installation

```bash
yarn add diana || npm install diana --save
```

You can also download [diana.js](https://github.com/MuYunyun/diana/blob/master/lib/diana.js) directly in the browser，it support UMD common module specification.

### Usage

```js
import * as _ from 'diana' // amd
// const _ = require('diana') // common.js
const isEqual = _.equal([1, 2, 3], [1, 2, 3]) // true

// ofcource you can import the module you need
import { isEqual } from 'diana'
```

### Contribute

Before submitting a pull request, please make sure the following is done:

Fork [the repository](https://github.com/MuYunyun/diana) and create your branch from master.

> pr the function

1.Run `yarn install` in the repository root.

2.If you've fixed a bug that should be tested, Run `yarn test`.

3.If you've add a function，at the meanwhile you should also add the test case in the test/xx.

> pr the document

1.fix or add the corresponding document in the docs/snippets.

Welcome your pull request, very thanks!