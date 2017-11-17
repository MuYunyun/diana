# diana

![Build Status](https://travis-ci.org/MuYunyun/diana.svg?branch=master) [![codecov](https://codecov.io/gh/MuYunyun/diana/branch/master/graph/badge.svg)](https://codecov.io/gh/MuYunyun/diana) ![LICENSE MIT](https://img.shields.io/npm/l/express.svg)


前端业务代码工具库，库名取自 LOL 皎月女神--黛安娜(月之力的不屈化身)。

> 目的：高效率完成前端业务代码

## 安装使用

1. 直接下载`min`目录下的[diana.min.js](https://github.com/proYang/outils/blob/master/min/outils.min.js)使用，支持UMD通用模块规范
2. 使用 npm 安装

### 浏览器:

``` html
<script src="diana.js"></script>
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
// 只引入部分方法('diana/<方法名>')
const arrayEqual = require('diana/arrayEqual')
const isArrEqual = arrayEqual([1, 2, 3], [1, 2, 3])
```

## API 文档

### Array
#### &emsp;&emsp;[arrayEqual](https://github.com/MuYunyun/diana/blob/master/src/array/arrayEqual.js)&emsp;&emsp;判断两个数组是否相等

### Random
#### &emsp;&emsp;[randomColor](https://github.com/MuYunyun/diana/blob/master/src/random/randomColor.js)&emsp;&emsp;随机生成颜色
#### &emsp;&emsp;[randomNum](https://github.com/MuYunyun/diana/blob/master/src/random/randomNum.js)&emsp;&emsp;指定范围生成整数
```js
let num = diana.randomNum(min, max, border)
// border 默认为 'both'(包含两边界), 可选参数还有 'left'(包含左边界),'right'(包含右边界),'no'(不包含边界)
```

### Regexp
#### &emsp;&emsp;[isEmail](https://github.com/MuYunyun/diana/blob/master/src/regexp/isEmail.js)&emsp;&emsp;判断是否为邮箱地址
#### &emsp;&emsp;[isPhoneNum](https://github.com/MuYunyun/diana/blob/master/src/regexp/isPhoneNum.js)&emsp;&emsp;判断是否为手机号


