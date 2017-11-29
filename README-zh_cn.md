# diana <sup>v0.1.2</sup>

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
    const num = diana.rdNum(1, 3)
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
const isArrEqual = _.equal([1, 2, 3], [1, 2, 3])
```

**推荐使用方法**

你真的不需要完整引入所有函数，所以只引入需要使用的方法即可。
``` javascript
// 只引入部分方法('diana/<方法名>')
const rdNum = require('diana/rdNum')
const num = rdNum(1, 3)
```

## API 文档

### <a id="Arrays"></a>`Arrays`

* [`_.equal`](#_equal)
* [`_.uniq`](#_uniq)
* [`_.intersection`](#_intersection)

### `Random`

* [`_.rdColor`](#_rdColor)
* [`_.rdNum`](#_rdNum)

### `Regexp`

* [`_.isEmail`](#_isEmail)
* [`_.isPhoneNum`](#_isPhoneNum)

### `String`

* [`_.trim`](#_trim)
* [`_.changeCase`](#_changeCase)

### `Lang`

* [`_.isArray`](#_isArray)
* [`_.clone`](#_clone)
* [`_.cloneDeep`](#_cloneDeep)

### `Math`

* [`_.max`](#_max)
* [`_.min`](#_min)
* [`_.sum`](#_sum)
* [`_.mean`](#_mean)

### `"Arrays" Methods`
#### <a id="_equal"></a>`_.equal(arr1, arr2)`
[#](#_equal) [&#x24C8;](https://github.com/MuYunyun/diana/blob/master/src/array/equal.js "View in source") [&#x24C9;][1]

判断两个数组是否相等.

##### Arguments
1. `arr1` *(Array)*:
2. `arr2` *(Array)*:

##### Returns
*(Boolean)*: 返回 bool 值.

##### Example
```js
_.equal([0, 1, 2], [0, 1, 2]);
// => true
```

***

#### <a id="_uniq"></a>`_.uniq(...arr)`
[#](#_uniq) [&#x24C8;](https://github.com/MuYunyun/diana/blob/master/src/array/uniq.js "View in source") [&#x24C9;][1]

多个数组取并集 | 数组去重

##### Arguments
1. `...arr` *(Array)*: 可传入 1 个或多个数组

##### Returns
*(Array)*: 返回去重后的 array.

##### Example
```js
_.uniq([1, 3, 2, 2, 1]) // => [1, 3, 2]
_.uniq([1, 'a', 3, 1], [4, 'a', 'b'], [2, 3, 'b', 'c'])
// => [1, 'a', 3, 4, 'b', 2, 'c']
```

***

#### <a id="_intersection"></a>`_.intersection(...arr)`
[#](#_intersection) [&#x24C8;](https://github.com/MuYunyun/diana/blob/master/src/array/intersection.js "View in source") [&#x24C9;][1]

多个数组取交集.

##### Arguments
1. `...arr` *(Array)*: 可传入 1 个或多个数组

##### Returns
*(Array)*: 返回取交集后的 array.

##### Example
```js
_.intersection([1, 2, 'a', 1, 'a']) // => [1, 'a']
_.intersection([1, 2, 'a', 1], [4, 2, 'a'], [2, 'a', 'c']) // => [ 2, 'a']
```

***

### `"Random" Methods`
#### <a id="_rdColor"></a>`_.rdColor()`
[#](#_rdColor) [&#x24C8;](https://github.com/MuYunyun/diana/blob/master/src/random/rdColor.js "View in source") [&#x24C9;][1]

生成随机颜色.

##### Returns
*(String)*: 返回颜色的十六进制值.

##### Example
```js
_.rdColor();
// => #b4370c
```

***

#### <a id="_rdNum"></a>`_.rdNum(min, max [, border])`
[#](#_rdNum) [&#x24C8;](https://github.com/MuYunyun/diana/blob/master/src/random/rdNum.js "View in source") [&#x24C9;][1]

指定整数范围生成随机整数.

##### Arguments
1. `min` *(Number)*: 边界最小值
2. `max` *(Number)*: 边界最大值
3. `border` *(String)*: 设定边界(默认参数为 'both', 可选参数: 'left', 'right', 'no')
##### Returns
*(Number)*: 指定整数范围生成的随机整数.

##### Example
```js
_.rdNum(1, 3);            // =>   1 <= result <= 3
_.rdNum(1, 3, 'left');    // =>   1 <= result < 3
_.rdNum(1, 3, 'right');   // =>    1 < result <= 3
_.rdNum(1, 3, 'no');      // =>    1 < result < 3
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

### `"String" Methods`
#### <a id="_trim"></a>`_.trim(str, type)`
[#](#_trim) [&#x24C8;](https://github.com/MuYunyun/diana/blob/master/src/string/trim.js "View in source") [&#x24C9;][1]

去除空格

##### Arguments
1. `str` *(String)*: 待去除空格的字符串
2. `type` *(Number)*: 1-所有空格(默认)，2-前后空格，3-前空格，4-后空格

##### Returns
*(String)*: 返回 String 值

##### Example
```js
_.trim(' ab cd ef '); // => 'abcdef'
_.trim(' ab cd ef ', 2); // => 'ab cd ef'
```

***
#### <a id="_changeCase"></a>`_.changeCase(str, type)`
[#](#__changeCase) [&#x24C8;](https://github.com/MuYunyun/diana/blob/master/src/string/_changeCase.js "View in source") [&#x24C9;][1]

大小写转化

##### Arguments
1. `str` *(String)*: 待去除空格的字符串
2. `type` *(Number)*: 1：首字母大写(默认) 2：首页母小写　3：大小写转换

##### Returns
*(String)*: 返回 String 值

##### Example
```js
_.changeCase('abcd'); // => 'Abcd'
_.changeCase('aBcD', 3); // => 'AbCd'
```

***

### `"Lang" Methods`
#### <a id="_isArray"></a>`_.isArray(str, type)`
[#](#__isArray) [&#x24C8;](https://github.com/MuYunyun/diana/blob/master/src/lang/_isArray.js "View in source") [&#x24C9;][1]

判断是否为数组

##### Arguments
1. `str` *(String)*: 待去除空格的字符串
2. `type` *(Number)*: 1：首字母大写(默认) 2：首页母小写　3：大小写转换

##### Returns
*(Boolean)*: 返回 Boolean 值

##### Example
```js
_.isArray([1, 2]); // => true
```

***
#### <a id="_clone"></a>`_.clone({a: 1})`
[#](#__clone) [&#x24C8;](https://github.com/MuYunyun/diana/blob/master/src/lang/_clone.js "View in source")[&#x24C9;][1]

浅拷贝

##### Arguments
1. `any` *(values)*: 拷贝对象

##### Returns
*(any)*: 拷贝出的对象

##### Example
```js
let obj = {a: 1}
_.clone(obj).a === obj.a; // => true
```
***

#### <a id="_cloneDeep"></a>`_.clone({a: 1})`
[#](#_cloneDeep) [&#x24C8;](https://github.com/MuYunyun/diana/blob/master/src/lang/_cloneDeep.js "View in source")[&#x24C9;][1]

深拷贝

##### Arguments
1. `any` *(values)*: 拷贝对象

##### Returns
*(any)*: 拷贝出的对象

##### Example
```js
let obj = {a: 1}
_.cloneDeep(obj).a === obj.a; // => false
```

***
### `"Math" Methods`
#### <a id="_max"></a>`_.max(arr)`
[#](#__max) [&#x24C8;](https://github.com/MuYunyun/diana/blob/master/src/math/_max.js "View in source")[&#x24C9;][1]

判断数组中的最大值

##### Arguments
1. `arr` *(Array)*

##### Returns
*(number)*: 返回 int

##### Example
```js
_.max([1, 2, 3, 4]); // => 4
```

***
#### <a id="_min"></a>`_.min(arr)`
[#](#__min) [&#x24C8;](https://github.com/MuYunyun/diana/blob/master/src/math/_min.js "View in source") [&#x24C9;][1]

判断数组中的最小值

##### Arguments
1. `arr` *(Array)*

##### Returns
*(number)*: 返回 int

##### Example
```js
_.min([1, 2, 3, 4]); // => 1
```

***
#### <a id="_sum"></a>`_.sum(arr)`
[#](#__sum) [&#x24C8;](https://github.com/MuYunyun/diana/blob/master/src/math/_sum.js "View in source") [&#x24C9;][1]

数组求和

##### Arguments
1. `arr` *(Array)*

##### Returns
*(number)*: 返回 int

##### Example
```js
_.sum([1, 2, 3, 4]); // => 10
```

***
#### <a id="_mean"></a>`_.mean(arr)`
[#](#__mean) [&#x24C8;](https://github.com/MuYunyun/diana/blob/master/src/math/_mean.js "View in source") [&#x24C9;][1]

数组求平均值

##### Arguments
1. `arr` *(Array)*

##### Returns
*(number)*: 返回 number

##### Example
```js
_.mean([1, 2, 3, 4]); // => 2.5
```
***

[1]: #Arrays "Jump back to the TOC."