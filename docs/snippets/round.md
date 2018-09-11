### _.round(value, position)

数字四舍五入(可以指定保留几位小数) [&#x24C8;](https://github.com/MuYunyun/diana/blob/master/src/common/math/round.ts "View in source")

##### Arguments
`value` *(number)*: 数值
`position` *(number)*: 保留几位小数, 默认为 0

##### Example
```js
_.round(1.235, 2) => 1.24
_.round(1.234, 2) => 1.23
_.round(1.234, 0) => 1
```
