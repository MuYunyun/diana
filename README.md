# diana

![Build Status](https://travis-ci.org/MuYunyun/diana.svg?branch=master) ![LICENSE MIT](https://img.shields.io/npm/l/express.svg)


前端业务代码工具库，库名取自 LOL 皎月女神--黛安娜(月之力的不屈化身)。

> 目的：高效率完成前端业务代码

## 安装使用

1. 直接下载`min`目录下的[diana.min.js](https://github.com/proYang/outils/blob/master/min/outils.min.js)使用，支持UMD通用模块规范
2. 使用 npm 安装

### 浏览器:

``` html
<script src="diana.min.js"></script>
<script>
    var isArrEqual = diana.arrayEqual([1, 2, 3], [1, 2, 3])
</script>
```

### npm:

```bash
npm install --save-dev diana
```

webpack、RequireJS、SeaJS等
```js
// 完整引人
const diana = require('diana')
const isArrEqual = diana.arrayEqual([1, 2, 3], [1, 2, 3])
```

**推荐使用方法**

你真的不需要完整引入所有函数，所以只引入需要使用的方法即可。
``` javascript
// 只引入部分方法('mytool/<方法名>')
const arrayEqual = require('mytool/arrayEqual')
const isArrEqual = arrayEqual([1, 2, 3], [1, 2, 3])
```

### API 文档