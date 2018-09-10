### _.intersection(...arr)

多个数组取交集 [&#x24C8;](https://github.com/MuYunyun/diana/blob/master/src/common/array/intersection.ts "View in source")

##### Arguments
`...arr` *(Array)*: 可传入 1 个或多个数组

&nbsp;&nbsp;

##### Returns
*(Array)*: 返回取交集后的 array.

&nbsp;&nbsp;

##### Example
```js
_.intersection([1, 2, 'a', 1, 'a']) // => [1, 'a']
_.intersection([1, 2, 'a', 1], [4, 2, 'a'], [2, 'a', 'c']) // => [ 2, 'a']
```