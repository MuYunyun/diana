# diana <sup>v0.2.2</sup>

![Build Status](https://travis-ci.org/MuYunyun/diana.svg?branch=master) [![codecov](https://codecov.io/gh/MuYunyun/diana/branch/master/graph/badge.svg)](https://codecov.io/gh/MuYunyun/diana) ![LICENSE MIT](https://img.shields.io/npm/l/express.svg)


前端业务代码工具库（支持`浏览器`和 `node` 环境），库名取自 LOL 皎月女神。[文档地址](http://muyunyun.cn/diana/)

> 目的：归纳总结以及高效率完成前端业务代码

> [开发记录整理ing](https://github.com/MuYunyun/diana/blob/master/README-zh_cn.md)

## 安装使用

1. 使用 npm 安装
2. 直接下载`min`目录下的[diana.js](https://github.com/MuYunyun/diana/blob/master/min/diana.js)使用，支持UMD通用模块规范

### npm:

```bash
npm install diana --save-dev
```

```js
const _ = require('diana')
const isEqual = _.equal([1, 2, 3], [1, 2, 3]) // true
```

### 浏览器:

``` html
<script src="diana.js"></script>
<script>
    const isEqual = diana.equal([1, 2, 3], [1, 2, 3]) // true
</script>
```

## API 文档

### <a id="Array"></a>`Array`

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
* [`_.isArguments`](#_isArguments)
* [`_.isFunction`](#_isFunction)
* [`_.isString`](#_isString)
* [`_.isNumber`](#_isNumber)
* [`_.isDate`](#_isDate)
* [`_.isRegExp`](#_isRegExp)
* [`_.isError`](#_Error)

### `Math`

* [`_.max`](#_max)
* [`_.min`](#_min)
* [`_.sum`](#_sum)
* [`_.mean`](#_mean)

### `Object`

* [`_.equal`](#_equal)
* [`_.pairs2obj`](#_pairs2obj)

### `Url`

* [`_.obj2query`](#_obj2query)
* [`_.query2obj`](#_query2obj)

### `Collection`

* [`_.each`](#_each)

### `Function`

* [`_.debounce`](#_debounce)
* [`_.throttle`](#_throttle)

***

### `Device`
* [`_.getOS`](#_getOS)
* [`_.isMobile`](#_isMobile)

***

### `"Object" Methods`
#### <a id="_equal"></a>`_.equal(value1, value2)`
[#](#_equal) [&#x24C8;](https://github.com/MuYunyun/diana/blob/master/src/common/object/equal.js "View in source") [&#x24C9;][1]

判断两个任意值是否相等(包含对象、数组深度遍历)

##### Example
```js
const obj1 = {
    a: 1,
    b: [1, this.obj1],
}
const obj2 = {
    a: 1,
    b: [1, this.obj2],
}
_.equal(obj1, obj2) // => true
```
***
#### <a id="_pairs2obj"></a>`_.pairs2obj(arr)`
[#](#_pairs2obj) [&#x24C8;](https://github.com/MuYunyun/diana/blob/master/src/common/object/pairs2obj.js "View in source") [&#x24C9;][1]

将给定的键值对转换为一个对象

##### Example
```js
_.pairs2obj([['a',1],['b',2]]) // => {a: 1, b: 2}
```
***

### `"Array" Methods`

#### <a id="_uniq"></a>`_.uniq(...arr)`
[#](#_uniq) [&#x24C8;](https://github.com/MuYunyun/diana/blob/master/src/common/array/uniq.js "View in source") [&#x24C9;][1]

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
[#](#_intersection) [&#x24C8;](https://github.com/MuYunyun/diana/blob/master/src/common/array/intersection.js "View in source") [&#x24C9;][1]

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
[#](#_rdColor) [&#x24C8;](https://github.com/MuYunyun/diana/blob/master/src/common/random/rdColor.js "View in source") [&#x24C9;][1]

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
[#](#_rdNum) [&#x24C8;](https://github.com/MuYunyun/diana/blob/master/src/common/random/rdNum.js "View in source") [&#x24C9;][1]

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
[#](#_isEmail) [&#x24C8;](https://github.com/MuYunyun/diana/blob/master/src/common/regexp/isEmail.js "View in source") [&#x24C9;][1]

判断是否为邮箱地址.

##### Example
```js
_.isEmail('muyy95@gmail.com'); // => true
```

***
#### <a id="_isPhoneNum"></a>`_.isPhoneNum(phoneNum)`
[#](#_isPhoneNum) [&#x24C8;](https://github.com/MuYunyun/diana/blob/master/src/common/regexp/isPhoneNum.js "View in source") [&#x24C9;][1]

判断是否为手机号.

##### Example
```js
_.isPhoneNum('15712345678'); // => true
```
***

### `"String" Methods`
#### <a id="_trim"></a>`_.trim(str, type)`
[#](#_trim) [&#x24C8;](https://github.com/MuYunyun/diana/blob/master/src/common/string/trim.js "View in source") [&#x24C9;][1]

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
[#](#_changeCase) [&#x24C8;](https://github.com/MuYunyun/diana/blob/master/src/common/string/changeCase.js "View in source") [&#x24C9;][1]

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
[#](#_isArray) [&#x24C8;](https://github.com/MuYunyun/diana/blob/master/src/common/lang/isArray.js "View in source") [&#x24C9;][1]

判断是否为数组

##### Example
```js
_.isArray([1, 2]); // => true
```

***
#### <a id="_clone"></a>`_.clone(obj)`
[#](#_clone) [&#x24C8;](https://github.com/MuYunyun/diana/blob/master/src/common/lang/clone.js "View in source")[&#x24C9;][1]

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

#### <a id="_cloneDeep"></a>`_.cloneDeep(obj)`
[#](#_cloneDeep) [&#x24C8;](https://github.com/MuYunyun/diana/blob/master/src/common/lang/cloneDeep.js "View in source")[&#x24C9;][1]

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
#### <a id="_isArguments"></a>`_.isArguments(object)`
[#](#_isArguments) [&#x24C8;](https://github.com/MuYunyun/diana/blob/master/src/common/lang/isType.js "View in source")[&#x24C9;][1]

如果 object 是一个参数对象，返回 true。

##### Example
```js
(function(){ return _.isArguments(arguments); })(1, 2, 3); // => true
_.isArguments([1,2,3]); // => false
```
***
#### <a id="_isFunction"></a>`_.isFunction(object)`
[#](#_isFunction) [&#x24C8;](https://github.com/MuYunyun/diana/blob/master/src/common/lang/isType.js "View in source")[&#x24C9;][1]

如果 object 是一个函数（Function），返回 true。

##### Example
```js
_.isFunction(() => {return 1}); // => true
```
***
#### <a id="_isString"></a>`_.isString(object)`
[#](#_isString) [&#x24C8;](https://github.com/MuYunyun/diana/blob/master/src/common/lang/isType.js "View in source")[&#x24C9;][1]

如果 object 是一个字符串，返回 true。

##### Example
```js
_.isString('abc'); // => true
```
***
#### <a id="_isNumber"></a>`_.isNumber(object)`
[#](#_isNumber) [&#x24C8;](https://github.com/MuYunyun/diana/blob/master/src/common/lang/isType.js "View in source")[&#x24C9;][1]

如果 object 是一个数值，返回 true。

##### Example
```js
_.isNumber(123); // => true
```
***
#### <a id="_isDate"></a>`_.isDate(object)`
[#](#_isDate) [&#x24C8;](https://github.com/MuYunyun/diana/blob/master/src/common/lang/isType.js "View in source")[&#x24C9;][1]

如果 object 是一个日期，返回 true。

##### Example
```js
_.isDate(new Date()); // => true
```
***
#### <a id="_isRegExp"></a>`_.isRegExp(object)`
[#](#_isRegExp) [&#x24C8;](https://github.com/MuYunyun/diana/blob/master/src/common/lang/isType.js "View in source")[&#x24C9;][1]

如果 object 是一个正则表达式，返回 true。

##### Example
```js
_.isRegExp(/abc/); // => true
```
***
#### <a id="_isError"></a>`_.isError(object)`
[#](#_isError) [&#x24C8;](https://github.com/MuYunyun/diana/blob/master/src/common/lang/isType.js "View in source")[&#x24C9;][1]

如果object继承至 Error 对象，那么返回 true。

##### Example
```js
_.isError(/abc/); // => true
```
***
### `"Math" Methods`
#### <a id="_max"></a>`_.max(arr)`
[#](#_max) [&#x24C8;](https://github.com/MuYunyun/diana/blob/master/src/common/math/max.js "View in source")[&#x24C9;][1]

判断数组中的最大值

##### Example
```js
_.max([1, 2, 3, 4]); // => 4
```

***
#### <a id="_min"></a>`_.min(arr)`
[#](#_min) [&#x24C8;](https://github.com/MuYunyun/diana/blob/master/src/common/math/min.js "View in source") [&#x24C9;][1]

判断数组中的最小值

##### Example
```js
_.min([1, 2, 3, 4]); // => 1
```

***
#### <a id="_sum"></a>`_.sum(arr)`
[#](#_sum) [&#x24C8;](https://github.com/MuYunyun/diana/blob/master/src/common/math/sum.js "View in source") [&#x24C9;][1]

数组求和

##### Example
```js
_.sum([1, 2, 3, 4]); // => 10
```

***
#### <a id="_mean"></a>`_.mean(arr)`
[#](#_mean) [&#x24C8;](https://github.com/MuYunyun/diana/blob/master/src/common/math/mean.js "View in source") [&#x24C9;][1]

数组求平均值

##### Example
```js
_.mean([1, 2, 3, 4]); // => 2.5
```
***
#### <a id="_obj2query"></a>`_.obj2query(baseurl, obj)`
[#](#_obj2query) [&#x24C8;](https://github.com/MuYunyun/diana/blob/master/src/common/url/obj2query.js "View in source") [&#x24C9;][1]

对象转成 URL 中的 query

##### Arguments
1. `baseurl` *(String)* 基础 url
2. `obj` *(Object)* 待解析对象

##### Returns
*(String)*: 返回 queryurl

##### Example
```js
_.obj2query('http://abc.com', {a: 1, b: 2}); // => http://abc.com?a=1&b=2
```
***
#### <a id="_query2obj"></a>`_.query2obj(queryurl)`
[#](#_query2obj) [&#x24C8;](https://github.com/MuYunyun/diana/blob/master/src/common/url/query2obj.js "View in source") [&#x24C9;][1]

将 URL 中的 query 转为对象

##### Arguments
1. `queryurl` *(String)* 基础 url

##### Returns
*(Object)*: 返回解析后的对象

##### Example
```js
_.query2obj('http://abc.com?a=1&b=2'); // => {a: 1, b: 2}
```
***
#### <a id="_each"></a>`_.each(list, iteratee)`
[#](#_each) [&#x24C8;](https://github.com/MuYunyun/diana/blob/master/src/common/collection/equal.js "View in source") [&#x24C9;][1]

遍历 list 中的所有元素，按顺序用每个元素当做参数调用 iteratee 函数。支持数组，对象，和类数组对象。

##### Example
```js
_.each([1, 2, 3], (value) => {console.log(value)}); // => 1, 2, 3
_.each({1, 2, 3}, (value) => {console.log(value)}); // => 1, 2, 3
```
***
#### <a id="_debounce"></a>`_.debounce(function, wait, [immediate])`
[#](#_debounce) [&#x24C8;](https://github.com/MuYunyun/diana/blob/master/src/common/function/debounce.js "View in source") [&#x24C9;][1]

函数防抖。限制事件的频繁触发，将延迟函数的执行(真正的执行)在函数最后一次调用时刻的 wait 毫秒之后，对于必须在一些输入（多是一些用户操作）停止到达之后执行的行为有帮助。例如: 渲染一个 Markdown 格式的评论预览, 当窗口停止改变大小之后重新计算布局, 等等。传参 immediate 为 true，debounce会在 wait 时间间隔的开始调用这个函数。

##### Example
```js
const lazyLayout = _.debounce(calculateLayout, 300)
$(window).resize(lazyLayout)
```
***
#### <a id="_throttle"></a>`_.throttle(function, wait, [options]) `
[#](#_throttle) [&#x24C8;](https://github.com/MuYunyun/diana/blob/master/src/common/function/throttle.js "View in source") [&#x24C9;][1]

函数节流。创建并返回一个像节流阀一样的函数，当重复调用函数的时候，至少每隔 wait 毫秒调用一次该函数。对于想控制一些触发频率较高的事件有帮助。默认情况下，throttle 将在你调用的第一时间尽快执行这个 function，(默认第一次和最后一次都执行function)。如果你想禁用第一次首先执行的话，传递{leading: false}，还有如果你想禁用最后一次执行的话，传递{trailing: false}。

##### Example
```js
const throttled = _.throttle(updatePosition, 100)
$(window).scroll(throttled)
```
***
#### <a id="_getOS"></a>`_.getOS()`
[#](#_getOS) [&#x24C8;](https://github.com/MuYunyun/diana/blob/master/src/browser/device/getOS.js "View in source") [&#x24C9;][1]

获取当前的操作系统

##### Example
```js
_.getOS(); // => 'MacOSX'
```
***
#### <a id="_isMobile"></a>`_.isMobile()`
[#](#_isMobile) [&#x24C8;](https://github.com/MuYunyun/diana/blob/master/src/browser/device/isMobile.js "View in source") [&#x24C9;][1]

判断当前环境是否为手机

##### Example
```js
_.isMobile(); // => true
```
***

[1]: #Array "Jump back to the TOC."