### _.meanToCode(arr, mean)

将数组中的 mean 转化为 code. [&#x24C8;](https://github.com/MuYunyun/diana/blob/master/src/common/lang/convertMeanValue.ts "View in source")

##### Arguments
`arr` *(Array)*: 数组

`mean` *(String)*: 要转化的 mean 值

&nbsp;&nbsp;

##### Returns
*(code)*: 数组中 mean 对应的 code，若找不到则返回 null

&nbsp;&nbsp;

##### Example
```js
const arr = [
  { code: 10, mean: '午高峰时段' },
  { code: 20, mean: '晚高峰时段' },
  { code: 30, mean: '夜宵时段' },
]

_.meanToCode(arr, '晚高峰时段') // => 30
```