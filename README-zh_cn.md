# diana <sup>v0.08</sup>

![Build Status](https://travis-ci.org/MuYunyun/diana.svg?branch=master) [![codecov](https://codecov.io/gh/MuYunyun/diana/branch/master/graph/badge.svg)](https://codecov.io/gh/MuYunyun/diana) ![LICENSE MIT](https://img.shields.io/npm/l/express.svg)


前端业务代码工具库，库名取自 LOL 皎月女神--黛安娜(月之力的不屈化身)。

> 目的：高效率完成前端业务代码

## 安装使用

1. 直接下载`min`目录下的[diana.js](https://github.com/MuYunyun/diana/blob/master/min/diana.js)使用，支持UMD通用模块规范
2. 使用 npm 安装

### 浏览器:

``` html
<script src="diana.js"></script>
<script>
    const num = diana.randomNum(1, 3)
</script>
```

### npm:

```bash
npm install --save-dev diana
```

webpack、RequireJS、SeaJS等
```js
// 完整引人
const _ = require('diana')
const isArrEqual = _.arrayEqual([1, 2, 3], [1, 2, 3])
```

**推荐使用方法**

你真的不需要完整引入所有函数，所以只引入需要使用的方法即可。
``` javascript
// 只引入部分方法('diana/<方法名>')
const randomNum = require('diana/randomNum')
const num = randomNum(1, 3)
```

## API 文档

### <a id="Arrays"></a>`Arrays`

* [`_.arrayEqual`](#_arrayEqual)
* [`_.arrayUniq`](#_arrayUniq)

### `Random`

* [`_.randomColor`](#_randomColor)
* [`_.randomNum`](#_randomNum)

### `Regexp`

* [`_.isEmail`](#_isEmail)
* [`_.isPhoneNum`](#_isPhoneNum)

### `"Arrays" Methods`
#### <a id="_arrayEqual"></a>`_.arrayEqual(arr1, arr2)`
[#](#_arrayEqual) [&#x24C8;](https://github.com/MuYunyun/diana/blob/master/src/array/arrayEqual.js "View in source") [&#x24C9;][1]

判断两个数组是否相等.

##### Arguments
1. `arr1` *(Array)*:
2. `arr2` *(Array)*:

##### Returns
*(Boolean)*: 返回 bool 值.

##### Example
```js
_.arrayEqual([0, 1, 2], [0, 1, 2]);
// => true
```

***

#### <a id="_arrayUniq"></a>`_.arrayUniq(arr1, arr2)`
[#](#_arrayUniq) [&#x24C8;](https://github.com/MuYunyun/diana/blob/master/src/array/arrayUniq.js "View in source") [&#x24C9;][1]

多个数组取并集 | 数组去重

##### Arguments
1. `...arr` *(Array)*: 可传入多个数组

##### Returns
*(Array)*: 返回去重后的 array.

##### Example
```js
_.arrayUniq([1, 3, 2, 2, 1]) // => [1, 3, 2]
_.arrayUniq([1, 'a', 3, 1], [4, 'a', 'b'], [2, 3, 'b', 'c'])
// => [1, 'a', 3, 4, 'b', 2, 'c']
```

***

### `"Random" Methods`
#### <a id="_randomColor"></a>`_.randomColor()`
[#](#_randomColor) [&#x24C8;](https://github.com/MuYunyun/diana/blob/master/src/random/randomColor.js "View in source") [&#x24C9;][1]

生成随机颜色.

##### Returns
*(String)*: 返回颜色的十六进制值.

##### Example
```js
_.randomColor();
// => #b4370c
```

***

#### <a id="_randomNum"></a>`_.randomNum(min, max [, border])`
[#](#_randomNum) [&#x24C8;](https://github.com/MuYunyun/diana/blob/master/src/random/randomNum.js "View in source") [&#x24C9;][1]

指定整数范围生成随机整数.

##### Arguments
1. `min` *(Number)*: 边界最小值
2. `max` *(Number)*: 边界最大值
3. `border` *(String)*: 设定边界(默认参数为 'both', 可选参数: 'left', 'right', 'no')
##### Returns
*(Number)*: 指定整数范围生成的随机整数.

##### Example
```js
_.randomNum(1, 3);            // =>   1 <= result <= 3
_.randomNum(1, 3, 'left');    // =>   1 <= result < 3
_.randomNum(1, 3, 'right');   // =>    1 < result <= 3
_.randomNum(1, 3, 'no');      // =>    1 < result < 3
```

***

### `"Regexp" Methods`
#### <a id="_isEmail"></a>`_.isEmail(email)`
[#](#_isEmail) [&#x24C8;](https://github.com/MuYunyun/diana/blob/master/src/regexp/isEmail.js "View in source") [&#x24C9;][1]

判断是否为邮箱地址.

##### Arguments
1. `email` *(String)*: 待检验的 email 地址

##### Returns
*(Boolean)*: 返回 bool 值

##### Example
```js
_.isEmail('muyy95@gmail.com'); // => true
```

***
#### <a id="_isPhoneNum"></a>`_.isPhoneNum(phoneNum)`
[#](#_isPhoneNum) [&#x24C8;](https://github.com/MuYunyun/diana/blob/master/src/regexp/isPhoneNum.js "View in source") [&#x24C9;][1]

判断是否为手机号.

##### Arguments
1. `phoneNum` *(String)*: 待检验的手机号码

##### Returns
*(Boolean)*: 返回 bool 值

##### Example
```js
_.isPhoneNum('15712345678'); // => true
```
***


[1]: #Arrays "Jump back to the TOC."