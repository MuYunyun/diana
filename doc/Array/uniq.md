### _.uniq(...arr)

多个数组取并集 | 数组去重 [&#x24C8;](https://github.com/MuYunyun/diana/blob/master/src/common/array/uniq.ts "View in source")

##### Arguments
`...arr` *(Array)*: 可传入 1 个或多个数组

&nbsp;&nbsp;

##### Returns
*(Array)*: 返回去重后的 array.

&nbsp;&nbsp;

##### Example
```js
_.uniq([1, 3, 2, 2, 1]) // => [1, 3, 2]
_.uniq([1, 'a', 3, 1], [4, 'a', 'b'], [2, 3, 'b', 'c'])
// => [1, 'a', 3, 4, 'b', 2, 'c']
```