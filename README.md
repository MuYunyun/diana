# diana <sup>v0.04</sup>

![Build Status](https://travis-ci.org/MuYunyun/diana.svg?branch=master) [![codecov](https://codecov.io/gh/MuYunyun/diana/branch/master/graph/badge.svg)](https://codecov.io/gh/MuYunyun/diana) ![LICENSE MIT](https://img.shields.io/npm/l/express.svg)

Front-end business code tool library, library name from the LOL Moonlight goddess - Diana (Moon Force incarnation).

> Purpose: Efficient completion of front-end business code

> Maybe you want [中文文档](https://github.com/MuYunyun/diana/blob/master/README-zh_cn.md)

## Installation

1. Direct download [diana.js](https://github.com/MuYunyun/diana/blob/master/min/diana.js) in `min` directory, support UMD common module specification
2. Use npm to install

### Browser:

``` html
<script src="diana.js"></script>
<script>
    const num = diana.randomNum(1, 3)
</script>
```

### Npm:

```bash
npm install --save-dev diana
```

webpack、RequireJS、SeaJS...
```js
// introduce completely
const randomNum = require('diana/randomNum')
const num = randomNum(1, 3)
```

**Recommended method**

You really don't need to introduce all the functions in a complete way, so just introduce the methods you need to use.
``` javascript
// Only introduce some methods('diana/<method>')
const arrayEqual = require('diana/arrayEqual')
const isArrEqual = arrayEqual([1, 2, 3], [1, 2, 3])
```

## API Document

### <a id="Arrays"></a>`Arrays`

* [`_.arrayEqual`](#_arrayEqual)

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