### _.each(list, iteratee)

遍历 list 中的所有元素，按顺序用每个元素当做参数调用 iteratee 函数。支持数组，对象，和类数组对象 [&#x24C8;](https://github.com/MuYunyun/diana/blob/master/src/common/collection/equal.ts "View in source")

##### Example
```js
_.each([1, 2, 3], (value) => {console.log(value)}); // => 1, 2, 3
_.each({1, 2, 3}, (value) => {console.log(value)}); // => 1, 2, 3
```