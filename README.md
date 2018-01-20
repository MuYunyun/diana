# diana

![Build Status](https://travis-ci.org/MuYunyun/diana.svg?branch=master) [![codecov](https://codecov.io/gh/MuYunyun/diana/branch/master/graph/badge.svg)](https://codecov.io/gh/MuYunyun/diana) ![LICENSE MIT](https://img.shields.io/npm/l/express.svg)

![](http://oqhtscus0.bkt.clouddn.com/5aa428c1014d75db4d2d331fb2b41334.jpg-muyy)

前端业务代码工具库（支持`浏览器`和 `node` 环境）。

> 目的：归纳总结 && 高效率完成前端业务代码

> [文档地址](http://muyunyun.cn/diana/)

## usage

### npm || yarn (推荐)

```bash
npm install diana --save || yarn add diana
```

```js
const _ = require('diana')
const isEqual = _.equal([1, 2, 3], [1, 2, 3]) // true
```

### bower 安装

```bash
bower install diana
```

```html
<script src="bower_components/diana/lib/diana.js"></script>
<script>
    const isEqual = diana.equal([1, 2, 3], [1, 2, 3]) // true
</script>
```

当然，在浏览器端你也可以直接下载`min`目录下的 [diana.js](https://github.com/MuYunyun/diana/blob/master/lib/diana.js) 使用，支持UMD通用模块规范。