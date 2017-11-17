# diana

![Build Status](https://travis-ci.org/MuYunyun/diana.svg?branch=master) [![codecov](https://codecov.io/gh/MuYunyun/diana/branch/master/graph/badge.svg)](https://codecov.io/gh/MuYunyun/diana) ![LICENSE MIT](https://img.shields.io/npm/l/express.svg)

Front-end business code tool library, library name from the LOL Moonlight goddess - Diana (Moon Force incarnation).

> Purpose: Efficient completion of front-end business code

> Maybe you want [中文文档](https://github.com/MuYunyun/diana/blob/master/README-zh_cn.md)

## Installation

1. Direct download [diana.js](https://github.com/proYang/outils/blob/master/min/outils.min.js) in `min` directory, support UMD common module specification
2. Use npm to install

### Browser:

``` html
<script src="diana.js"></script>
<script>
    var isArrEqual = diana.arrayEqual([1, 2, 3], [1, 2, 3])
</script>
```

### Npm:

```bash
npm install --save-dev diana
```

webpack、RequireJS、SeaJS...
```js
// introduce completely
const diana = require('diana')
const isArrEqual = diana.arrayEqual([1, 2, 3], [1, 2, 3])
```

**Recommended method**

You really don't need to introduce all the functions in a complete way, so just introduce the methods you need to use.
``` javascript
// Only introduce some methods('diana/<method>')
const arrayEqual = require('diana/arrayEqual')
const isArrEqual = arrayEqual([1, 2, 3], [1, 2, 3])
```

## API Document

### Array
#### &emsp;&emsp;[arrayEqual](https://github.com/MuYunyun/diana/blob/master/src/array/arrayEqual.js)&emsp;&emsp;Determine whether the two arrays are equal

### Random
#### &emsp;&emsp;[randomColor](https://github.com/MuYunyun/diana/blob/master/src/random/randomColor.js)&emsp;&emsp;Generate colors randomly
#### &emsp;&emsp;[randomNum](https://github.com/MuYunyun/diana/blob/master/src/random/randomNum.js)&emsp;&emsp;Generate integers within the specified range
```js
let num = diana.randomNum(min, max, border)
// The border defaults to 'both' (including the two borders), with the optional 'left' (including the left border), 'right' (including the right border), 'no' (without the border)
```

### Regexp
#### &emsp;&emsp;[isEmail](https://github.com/MuYunyun/diana/blob/master/src/regexp/isEmail.js)&emsp;&emsp;Determine whether the email address
#### &emsp;&emsp;[isPhoneNum](https://github.com/MuYunyun/diana/blob/master/src/regexp/isPhoneNum.js)&emsp;&emsp;Determine whether the phone number