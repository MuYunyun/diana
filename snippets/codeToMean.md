### _.codeToMean(arr, code)

将数组中的 code 转化为 mean. [&#x24C8;](https://github.com/MuYunyun/diana/blob/master/src/common/lang/convertMeanValue.ts "View in source")

##### Arguments
`arr` *(Array)*: 数组

`code` *(String | Number)*: 要转化的 code 值

&nbsp;&nbsp;

##### Returns
*(mean)*: 数组中 code 对应的 mean，若找不到则返回 null

&nbsp;&nbsp;

##### Example
```js
const arr = [
  { code: 10, mean: '午高峰时段' },
  { code: 20, mean: '晚高峰时段' },
  { code: 30, mean: '夜宵时段' },
]

_.codeToMean(arr, 20) // => 晚高峰时段
```