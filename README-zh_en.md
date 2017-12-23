# diana <sup>v0.2.3</sup>

![Build Status](https://travis-ci.org/MuYunyun/diana.svg?branch=master) [![codecov](https://codecov.io/gh/MuYunyun/diana/branch/master/graph/badge.svg)](https://codecov.io/gh/MuYunyun/diana) ![LICENSE MIT](https://img.shields.io/npm/l/express.svg)

Front-end business code tool library (Support for `browser` and `node` environments), library name from the LOL Moonlight goddess.

> Purpose: Efficient completion of front-end business code

> [document](http://muyunyun.cn/diana/)

> Maybe you want [中文文档](https://github.com/MuYunyun/diana/blob/master/README-zh_cn.md)

## Installation

1. Use npm to install
2. Direct download [diana.js](https://github.com/MuYunyun/diana/blob/master/lib/diana.js) in `min` directory, support UMD common module specification

### Npm:

```bash
npm install diana --save-dev
```

```js
const _ = require('diana')
const isEqual = _.equal([1, 2, 3], [1, 2, 3]) // true
```

### Browser:

``` html
<script src="diana.js"></script>
<script>
    const isEqual = diana.equal([1, 2, 3], [1, 2, 3]) // true
</script>
```

## API Document

todo...